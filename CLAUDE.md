@AGENTS.md

# TechnoCrazy — mapa del repo

Sitio de la agencia de Rafael Navarro: servicios, productos, aprendizaje y panel propio. **LIVE en technocrazy.org.**
Next.js 16 + Turbopack · Tailwind v4 · Firebase (Auth + Firestore) · Claude API · bilingüe ES/EN.

## Dónde está cada cosa
- `app/` — rutas. Home (`page.tsx`), `admin/` (panel con pestañas), `api/` (chat, upload, upload-archivo, stripe, generar-post, admin/agent-calls), `c/[code]` (redirección de chips NFC), `nfc/`, `proceso/[slug]`, `soluciones/[slug]`, `muro/ biblioteca/ galeria/ testimonios/ preguntas/ feedback/ noticias/ precios-productos/`, legales (`terminos privacidad cookies contrato`), `calendario/` (solo ES), `privado/asilo`.
- `components/` — secciones del home (`Hero`, `Services`, `Products`, `Testimonials`, `About`, `Process`, `CTAFinal`, `Footer`, `Navbar`), más `admin/`, `nfc/`, `proceso/`, `soluciones/`, `shared/`.
- `lib/` — `i18n.ts` (TODOS los textos del sitio, ES+EN), `firebase.ts`, `collections.ts` (tipos de Firestore), `homeProducts.ts`, `nfcTypes.ts`, `useCollection.ts`, `pdf.ts`, `adminAuth.ts`.
- `contexts/` — `LanguageContext` (idioma + textos editados), `SiteConfigContext` (config en vivo desde Firestore).
- `public/descargas/` — archivos que se descargan desde la sección Productos. **No poner en .gitignore**: el CLI de Vercel respeta los ignores y las descargas se romperían.

## Reglas de este proyecto (no negociables)
1. **El espaciado de Tailwind NO funciona aquí.** `globals.css` tiene `* { margin:0; padding:0 }` fuera de capa y le gana a `p-5`, `mb-4`, etc. Padding y márgenes **siempre en `style={{}}`**. Verificar con `getComputedStyle`, no a ojo.
2. **Los textos del sitio viven en `lib/i18n.ts`**, en ES y EN. Todo lo que se agregue ahí queda editable desde el candado del editor visual.
3. **Lo que se administra desde `/admin` va en Firestore**, no en el código. Config del sitio: documento `config/site` (servicios, contacto, CTA, menú, `homeProducts`). Colecciones aparte: `posts`, `products`, `libraryItems`, `galleryImages`, `testimonials`, `questions`, `feedback`, `news`, `nfcChips`, `contracts`, `receipts`.
4. **Preferir `config/site` a crear una colección nueva:** publicar reglas de Firestore en esta PC exige entrar a Firebase Console con 2FA de Rafael (el CLI no tiene sesión).
5. Sin emojis en la interfaz — íconos de `lucide-react`.
6. Guardar tablas completas con `setDoc(merge)` **pisa** el map entero; para campos por fila usar `updateDoc` con dot-notation y omitir vacíos.

## Comandos
```powershell
npm run dev                                      # localhost:3000
npx tsc --noEmit ; npx eslint <archivos>         # antes de construir
$env:NODE_OPTIONS="--use-system-ca"; npm run build
$env:NODE_OPTIONS="--use-system-ca"; npx vercel --prod --yes
```
El `--use-system-ca` es obligatorio en esta PC (certificado corporativo). Desplegar siempre al terminar un cambio confirmado.

## Trampas conocidas
- `vercel env pull` devuelve las variables **vacías** en este proyecto; para correr local hay que pegar el `firebaseConfig` a mano en `.env.local`. Para escribir variables usar `cmd /c "echo VALOR| npx vercel env add ..."` (el pipe de PowerShell mete BOM).
- **Vercel Blob está suspendido** en la cuenta. Los **archivos** descargables se sirven desde `public/descargas/` (o pegando la dirección a mano en el panel). Las **imágenes** ya no dependen de Blob: `lib/upload.ts` intenta Blob y, si falla, guarda la foto en Firestore (`config/img-…`, base64) y devuelve `/api/img/<id>`, que la sirve `app/api/img/[id]/route.ts`. Cuando se reactive Blob vuelve solo al camino de siempre.
- Si una imagen OG no carga en WhatsApp, casi siempre es caché de Meta: verificar server-side con `Invoke-WebRequest` + User-Agent de WhatsApp antes de tocar código. Nunca loguear Facebook con Playwright.
- Hay meses de trabajo desplegado sin commitear en el repo.

## Antes de decir "listo"
Build limpio, desplegado a producción, y verificado en vivo con Playwright midiendo con `browser_evaluate` (las capturas no se localizan bien en este entorno). Revisar también a 390px de ancho.
