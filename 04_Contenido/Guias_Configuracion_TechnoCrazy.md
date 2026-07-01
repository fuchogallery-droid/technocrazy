# Guías de Configuración — TechnoCrazy
> Fecha: 2026-06-29 | Dominio: technocrazy.org | Namecheap DNS

---

## 1. Zoho Mail — Email profesional hola@technocrazy.org

### Pasos
1. Ir a **zoho.com/mail** → *Sign Up Free* → elegir plan gratuito (1 usuario, 5GB)
2. En "Already own a domain?" escribir `technocrazy.org` → Continuar
3. Zoho mostrará los **registros DNS** a agregar. Anotar:
   - **MX record** (para recibir emails)
   - **TXT record** (para verificar dominio)
   - **CNAME** (opcional, para webmail.technocrazy.org)

### En Namecheap (namecheap.com → Domain List → technocrazy.org → Manage → Advanced DNS)
| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| MX | @ | mx.zoho.com | 1800 |
| MX | @ | mx2.zoho.com | 1800 |
| TXT | @ | zoho-verification=... (copiar de Zoho) | 1800 |

4. En Zoho: clic en **Verify TXT Record** → esperar 5-15 min
5. Crear cuenta: `hola@technocrazy.org` con contraseña segura
6. **App password para móvil:** Zoho → Mi Cuenta → Seguridad → Contraseñas de aplicación

### Notas
- El plan gratuito soporta 1 email. Para más usuarios: $1/usuario/mes
- Acceso webmail: mail.zoho.com

---

## 2. Google Search Console — Indexar technocrazy.org

### Pasos
1. Ir a **search.google.com/search-console** → Agregar propiedad
2. Elegir **"Dominio"** (no URL) → escribir `technocrazy.org`
3. Google mostrará un código TXT: `google-site-verification=XXXXXXXXX`

### En Namecheap (Advanced DNS)
| Tipo | Host | Valor | TTL |
|------|------|-------|-----|
| TXT | @ | google-site-verification=XXXXXXXX | 1800 |

4. En Search Console: clic en **Verificar** → esperar propagación (puede tomar hasta 24h)
5. Una vez verificado: Sitemaps → agregar `https://technocrazy.org/sitemap.xml`

### Generar sitemap (si no existe)
Next.js genera sitemap automáticamente con `next-sitemap`. Si no está instalado:
```bash
npm install next-sitemap
```
Crear `next-sitemap.config.js`:
```js
module.exports = { siteUrl: 'https://technocrazy.org', generateRobotsTxt: true }
```
Agregar a `package.json` scripts: `"postbuild": "next-sitemap"`

---

## 3. Google Analytics 4 — Medir tráfico de technocrazy.org

### Pasos (ya está el código listo en la web, solo falta el ID)
1. Ir a **analytics.google.com** → Crear cuenta
2. Nombre de cuenta: `TechnoCrazy` → Nombre de propiedad: `technocrazy.org`
3. Zona horaria: `América/Chicago (UTC-6)` | Moneda: `USD`
4. Plataforma: **Web** → URL: `technocrazy.org`
5. Copiar el **Measurement ID** (formato `G-XXXXXXXXXX`)

### Pegarlo en .env.local (ya preparado):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
Después: `vercel env add NEXT_PUBLIC_GA_ID production` → pegar el ID → redeploy

---

## 4. LinkedIn — Página de empresa TechnoCrazy

### Pasos
1. Iniciar sesión en **linkedin.com** con cuenta personal
2. Clic en el ícono "Trabajo" (cuadrícula 9 puntos) → *Crear una página de empresa*
3. Elegir tipo: **Pequeña empresa**
4. Rellenar:
   - **Nombre:** TechnoCrazy
   - **URL pública:** `linkedin.com/company/technocrazy`
   - **Sector:** Tecnología de la información
   - **Tamaño:** 1-10 empleados
   - **Sitio web:** `https://technocrazy.org`
5. Subir **logo** (PNG cuadrado, mín 300×300px)
6. Agregar descripción (copiar del About del sitio)
7. Publicar primera actualización con link a technocrazy.org

### Contenido inicial sugerido
> "TechnoCrazy es una agencia digital fundada en Chicago por Rafael Navarro. Construimos sitios web, apps móviles y sistemas automatizados con IA para negocios en crecimiento. Contacto: hola@technocrazy.org"

---

## 5. YouTube — Canal TechnoCrazy

### Pasos
1. Ir a **youtube.com** → click en tu foto → Crear un canal
2. Nombre: **TechnoCrazy**
3. Personalizar canal:
   - **Banner:** 2560×1440px (subir diseño de marca)
   - **Foto de perfil:** logo TechnoCrazy cuadrado
   - **Descripción:** descripción del negocio + technocrazy.org
   - **Links:** agregar technocrazy.org + WhatsApp + Instagram
4. Primer video sugerido: video de 60-90 segundos presentando TechnoCrazy (pantalla + voz)

### Ideas primeros videos
1. "Qué es TechnoCrazy y cómo puede ayudarte" (presentación)
2. "Cómo construí 10 proyectos digitales desde cero en Chicago"
3. Demo de un proyecto real (app o sitio)
4. "Cómo conseguir tu primera página web profesional por menos de $200"

---

## Checklist DNS en Namecheap (resumen)

| Registro | Propósito | Cuándo agregar |
|----------|-----------|----------------|
| TXT google-site-verification | Google Search Console | Al verificar |
| TXT zoho-verification | Zoho Mail | Al configurar email |
| MX mx.zoho.com | Recibir emails en @technocrazy.org | Con Zoho Mail |

> DNS propagation: 15 min – 24h. Usar **dnschecker.org** para verificar.

---

## Estado al 2026-06-29

| Tarea | Estado |
|-------|--------|
| Sitio web desplegado (technocrazy.org) | ✅ LIVE |
| Instagram @igTechnoCrazy — Posts 1+2 publicados | ✅ |
| X @Xtechnocrazy — 3 posts publicados | ✅ |
| Sección About con historia de Rafael | ✅ |
| Sección "Qué recibes" (Deliverables) | ✅ |
| GA4 — código listo, falta Measurement ID | ⏳ |
| Zoho Mail (hola@technocrazy.org) | ⏳ |
| Google Search Console | ⏳ |
| LinkedIn Página de empresa | ⏳ |
| YouTube Canal | ⏳ |
