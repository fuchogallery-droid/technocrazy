# GUÍA MAESTRA DE IMPLEMENTACIÓN
# TechnoCrazy — Sistema Avatar IA
# Versión 1.0 | Junio 2026

---

## RESUMEN EJECUTIVO

Este sistema convierte tu cara y voz en un agente de contenido autónomo.
Una sola tarde de setup → contenido publicándose solo indefinidamente.

**Costo operativo:** ~$130/mes para contenido diario en 3 plataformas
**Equivalente humano:** $1,500-3,000/mes (editor + community manager + diseñador)
**ROI:** Primer cliente del Sistema = recupera inversión completa

---

## FASE 1 — CLONAR TU CARA (HeyGen)
**Tiempo: 30 minutos | Costo: Plan Creator $29/mes**

### Paso 1.1 — Crear cuenta HeyGen
- Ir a heygen.com → Sign up
- Plan recomendado: Creator ($29/mes) para empezar
- Para API: necesitarás agregar créditos (pay-as-you-go desde $5)

### Paso 1.2 — Crear tu Avatar Digital Twin
1. Dashboard → Avatars → Create Avatar
2. Seleccionar "Instant Avatar" (video de 5 min) o "Studio Avatar" (mejor calidad)
3. **Requisitos del video de grabación:**
   - Fondo liso (preferible neutro)
   - Buena iluminación frontal (no contraluz)
   - Cámara al nivel de los ojos
   - Habla 5 minutos de forma natural, mueve un poco la cabeza
   - Sin obstáculos frente a la cara (manos, objetos)
   - Audio claro, sin eco
4. Subir el video → HeyGen procesa en ~20 minutos
5. Guardar el **Avatar ID** que se genera

### Paso 1.3 — Probar el avatar
- Crear un video de prueba: Dashboard → Create Video → Select Avatar
- Escribir un texto de prueba → Generate
- Verificar naturalidad del movimiento labial y expresión

**⚠️ NOTA:** El Avatar V Digital Twin (el más realista) requiere Enterprise API.
Para empezar, el Instant Avatar funciona muy bien y es accesible desde $29/mes.

---

## FASE 2 — CLONAR TU VOZ (ElevenLabs)
**Tiempo: 20 minutos | Costo: Creator $22/mes**

### Paso 2.1 — Crear cuenta ElevenLabs
- Ir a elevenlabs.io → Sign up
- Plan Creator ($22/mes) incluye voice cloning y 100 min/mes de audio

### Paso 2.2 — Clonar tu voz
1. Dashboard → Voices → Add Voice → Instant Voice Clone
2. **Requisitos del audio:**
   - Mínimo 10 minutos de audio tuyo
   - Habla natural, como si estuvieras grabando un podcast
   - Audio limpio, sin música de fondo ni eco
   - Puedes usar grabaciones existentes tuyas
3. Subir el audio → ElevenLabs procesa en ~5 minutos
4. Probar la voz: escribir texto → escuchar
5. Guardar el **Voice ID** generado

### Paso 2.3 — Conectar con HeyGen
- En HeyGen al crear videos: Voice → ElevenLabs → pegar Voice ID
- Esto hace que tu avatar hable con TU voz exacta

---

## FASE 3 — ENTRENAR MODELO DE IMÁGENES (Flux LoRA)
**Tiempo: 1 hora setup + 30 min entrenamiento | Costo: ~$2 en Replicate**

### Paso 3.1 — Preparar fotos de entrenamiento
Necesitas 15-25 fotos tuyas:
- Variedad de expresiones (serio, sonriendo, pensativo)
- Variedad de ángulos (frente, 3/4, perfil ligero)
- Variedad de fondos (ya tienes fotos profesionales perfectas)
- Resolución mínima: 512x512px, mejor 1024x1024px
- **TUS FOTOS TECHNOCRAZY YA SON PERFECTAS para esto**

### Paso 3.2 — Entrenar en Replicate
1. Crear cuenta en replicate.com
2. Ir a: replicate.com/ostris/flux-dev-lora-trainer
3. Subir las fotos en un ZIP
4. Configuración recomendada:
   ```
   trigger_word: RAFAELNAVARRO
   steps: 1000
   learning_rate: 0.0004
   batch_size: 1
   ```
5. Entrenar → cuesta ~$2, tarda ~20-30 min
6. Guardar el **Model ID** del LoRA entrenado

### Paso 3.3 — Usar el LoRA
En cualquier prompt de imagen incluir siempre: `RAFAELNAVARRO`
Ejemplo: `RAFAELNAVARRO in a modern office, holding a laptop, confident expression, professional lighting`

---

## FASE 4 — CONFIGURAR n8n
**Tiempo: 2-3 horas | Costo: $0 self-hosted o $20/mes cloud**

### Opción A: n8n Cloud (recomendado para empezar)
1. Ir a n8n.io → Start for free
2. Plan Starter: $20/mes (1,000 ejecuciones/mes)

### Opción B: n8n Self-hosted (gratis, más control)
```bash
# Requiere servidor o PC siempre encendido
npx n8n
# O con Docker:
docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n
```

### Paso 4.1 — Importar el workflow
1. En n8n: Workflows → Import
2. Subir el archivo: `n8n-workflow/workflow-avatar-ia.json`
3. El workflow aparece listo para configurar

### Paso 4.2 — Configurar credenciales (en orden)
Ir a n8n → Credentials → Add Credential para cada servicio:

**Anthropic (Claude):**
- API Key: tu clave de console.anthropic.com
- Modelo: claude-opus-4-8-20251101

**HeyGen:**
- API Key: desde heygen.com → Settings → API
- Avatar ID: el que guardaste en Fase 1

**ElevenLabs:**
- API Key: desde elevenlabs.io → Profile → API Key
- Voice ID: el que guardaste en Fase 2

**OpenAI (para imágenes):**
- API Key: desde platform.openai.com

**Blotato (publicación multi-plataforma):**
- Crear cuenta en blotato.com
- Conectar: Instagram, TikTok, YouTube
- API Key desde el dashboard

**Google Drive:**
- OAuth: n8n → Credentials → Google Drive → Connect

**Telegram (notificaciones):**
- Crear bot con @BotFather en Telegram
- Guardar el Token y tu Chat ID

### Paso 4.3 — Configurar variables de entorno
Ver el archivo: `n8n-workflow/variables-entorno.env`
Configurar cada variable en n8n → Settings → Environment Variables

### Paso 4.4 — Activar el workflow
- Toggle "Active" en el workflow
- Primera ejecución: correr manualmente para verificar
- Si todo pasa: el cron se activa automáticamente (lunes 8AM)

---

## FASE 5 — CARGAR SKILLS EN CLAUDE
**Tiempo: 15 minutos | Sin costo adicional**

### Paso 5.1 — Crear el Proyecto en Claude
1. Claude.ai → Projects → New Project
2. Nombre: "TechnoCrazy Content System"
3. Copiar el contenido de `PROYECTO-CLAUDE-INSTRUCCIONES.md` en las instrucciones

### Paso 5.2 — Cargar los Skills
Para cada archivo en `/skills/`:
1. Claude → Customize → Skills → Add Skill → Upload
2. Subir los archivos .md uno por uno:
   - `script-viral.md` → activa con `/script-viral`
   - `script-ventas.md` → activa con `/script-ventas`
   - `copy-post.md` → activa con `/copy-post`
   - `prompt-imagen.md` → activa con `/prompt-imagen`
   - `semana-contenido.md` → activa con `/semana-contenido`

### Paso 5.3 — Configurar CoWork (tarea programada)
1. Claude → CoWork → New Task
2. Proyecto: TechnoCrazy Content System
3. Instrucción: "Cada lunes a las 8AM activa /semana-contenido y genera el plan completo de la semana. Guarda los resultados en Google Drive en la carpeta TechnoCrazy/Contenido/[fecha]"
4. Programar: lunes 8:00 AM
5. Activar

---

## FASE 6 — PRIMER TEST COMPLETO
**Tiempo: 1 hora**

### Checklist de verificación:
- [ ] Avatar HeyGen funciona (test con texto simple)
- [ ] Voz ElevenLabs suena natural
- [ ] Flux LoRA genera imagen con tu cara correctamente
- [ ] Claude genera script con /script-viral
- [ ] n8n conecta a todos los servicios sin errores
- [ ] Blotato conectado a IG, TikTok, YouTube
- [ ] Primera publicación de prueba en modo "draft" (no publica aún)
- [ ] Activar publicación real

### Primera semana manual:
Antes de confiar en la automatización completa, supervisar manualmente la primera semana:
- Lunes: revisar los 7 scripts generados
- Miércoles: verificar que los videos de HeyGen están bien
- Viernes: confirmar que las publicaciones se hicieron correctamente

---

## COSTOS REALES DETALLADOS

### Setup inicial (una sola vez):
| Item | Costo |
|------|-------|
| HeyGen Avatar V escaneo | Incluido en plan |
| ElevenLabs voice clone | Incluido en plan |
| Flux LoRA training (Replicate) | ~$2 |
| **Total setup** | **~$2** |

### Operación mensual:
| Servicio | Plan | Costo/mes |
|---------|------|-----------|
| Claude API (Opus) | Pay-as-you-go | ~$15-20 |
| HeyGen Creator | Mensual | $29 |
| ElevenLabs Creator | Mensual | $22 |
| Blotato | Starter | $15-29 |
| n8n Cloud | Starter | $20 |
| OpenAI (imágenes) | Pay-as-you-go | ~$3-5 |
| **TOTAL** | | **~$104-125/mes** |

### Para el cliente del servicio:
- Tú cobras: $297 (hecho contigo) o $997 (instalado)
- Su costo mensual de APIs: ~$125/mes
- O puedes incluir el primer mes en el precio

---

## CÓMO VENDER ESTE SISTEMA

### El argumento de ventas en 30 segundos:
> "¿Cuánto tiempo pierdes grabando, editando y publicando contenido cada semana? 
> Con el Sistema Avatar IA de TechnoCrazy, grabas una vez y el sistema publica 
> solo para siempre. Tu cara real, tu voz real, publicando en IG, TikTok y YouTube 
> mientras tú trabajas en lo que importa."

### Los 3 momentos para vender:
1. **Muéstralo funcionando en TechnoCrazy** → "Mira, esto es lo que TechnoCrazy publica solo"
2. **Cuantifica el tiempo ahorrado** → "¿Cuántas horas a la semana dedicas a contenido? ¿Cuánto vale esa hora?"
3. **Cierra con el ROI** → "Si este sistema te trae 1 cliente nuevo al mes, ya se pagó solo"

---

## PRÓXIMOS PASOS PARA RAFAEL

### Esta semana (sin necesitar a Rafael):
✅ Skills de Claude creadas y listas para cargar
✅ Workflow n8n listo para importar  
✅ Landing page lista para desplegar en Vercel
✅ Variables de entorno documentadas
✅ Guía de implementación completa

### Necesita Rafael (próximas 2 horas cuando tenga tiempo):
1. Grabar video de 5 minutos para HeyGen (buena luz, fondo liso)
2. Grabar 10 minutos de audio para ElevenLabs
3. Crear cuentas: HeyGen + ElevenLabs + Blotato + Replicate
4. Cargar los 5 Skills en su Claude
5. Importar el workflow en n8n
6. Configurar las credenciales con sus API keys

### La semana que viene:
- Primera semana de contenido generada y publicándose sola
- TechnoCrazy se convierte en el demo vivo del producto
- Lanzamiento de ventas del Sistema Avatar IA

---

*Sistema diseñado por Claude para TechnoCrazy — Rafael Navarro*
*Versión 1.0 | 30 Junio 2026*
