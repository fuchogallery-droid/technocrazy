/**
 * TechnoCrazy — Automatizador de Contenido
 * Reemplaza n8n con Node.js puro (sin dependencias nativas)
 * Node.js v18+ requerido (fetch nativo disponible)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_FILE = path.join(__dirname, 'config.json');
const LOG_FILE = path.join(__dirname, 'logs', 'automatizador.log');

// ─── CONFIGURACIÓN ────────────────────────────────────────────────────────────
function loadConfig() {
    if (!fs.existsSync(CONFIG_FILE)) {
        console.error('❌ config.json no encontrado. Copia config.example.json y completa tus API keys.');
        process.exit(1);
    }
    return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
}

// ─── LOGGING ──────────────────────────────────────────────────────────────────
function log(msg, level = 'INFO') {
    const ts = new Date().toISOString();
    const line = `[${ts}] [${level}] ${msg}`;
    console.log(line);
    fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
    fs.appendFileSync(LOG_FILE, line + '\n');
}

// ─── PASO 1: Generar scripts con Claude ───────────────────────────────────────
async function generarScriptsSemanales(config) {
    log('Generando scripts semanales con Claude...');

    const prompt = `Eres el asistente de contenido de TechnoCrazy, la marca digital de Rafael Navarro.
Genera 7 scripts cortos (15-30 segundos) para Reels/TikTok, uno por día de la semana.

Rafael Navarro: Fundador de TechnoCrazy, experto en IA y negocios digitales, voz directa y confiable.
Marca: technocrazy.org | Slogan: "Tecnología que genera dinero"

Formato para cada día:
DÍA: [nombre]
TIPO: [viral/educativo/ventas/inspiracional/Bitcoin]
HOOK: [primera oración — máx 8 palabras, que engancha]
SCRIPT: [texto completo del video, 50-80 palabras]
CTA: [llamada a la acción]
POST_IG: [caption para Instagram con hashtags]

Semana del ${new Date().toLocaleDateString('es-ES')}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'x-api-key': config.ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01',
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            model: 'claude-opus-4-8',
            max_tokens: 3000,
            messages: [{ role: 'user', content: prompt }],
        }),
    });

    if (!response.ok) throw new Error(`Claude API error: ${response.status}`);
    const data = await response.json();
    const scripts = data.content[0].text;

    const fecha = new Date().toISOString().split('T')[0];
    const outFile = path.join(__dirname, 'output', `scripts_${fecha}.txt`);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, scripts, 'utf8');

    log(`✅ Scripts guardados en ${outFile}`);
    return scripts;
}

// ─── PASO 2: Crear video con HeyGen ───────────────────────────────────────────
async function crearVideoHeyGen(config, script, titulo) {
    if (!config.HEYGEN_API_KEY || config.HEYGEN_API_KEY === 'TU_API_KEY_AQUI') {
        log('⚠️  HeyGen no configurado — saltando generación de video', 'WARN');
        return null;
    }

    log(`Creando video HeyGen: ${titulo}`);

    const response = await fetch('https://api.heygen.com/v2/video/generate', {
        method: 'POST',
        headers: {
            'X-Api-Key': config.HEYGEN_API_KEY,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            video_inputs: [{
                character: {
                    type: 'avatar',
                    avatar_id: config.HEYGEN_AVATAR_ID,
                    avatar_style: 'normal',
                },
                voice: {
                    type: 'text',
                    input_text: script,
                    voice_id: config.HEYGEN_VOICE_ID || config.HEYGEN_AVATAR_ID,
                    speed: 1.0,
                },
                background: { type: 'color', value: '#0A0A0F' },
            }],
            dimension: { width: 1080, height: 1920 },
            aspect_ratio: '9:16',
            caption: false,
        }),
    });

    if (!response.ok) throw new Error(`HeyGen error: ${response.status}`);
    const data = await response.json();
    log(`✅ Video enviado a HeyGen. ID: ${data.data?.video_id}`);
    return data.data?.video_id;
}

// ─── PASO 3: Esperar video HeyGen listo ───────────────────────────────────────
async function esperarVideoHeyGen(config, videoId, maxMinutos = 30) {
    if (!videoId) return null;
    log(`Esperando video ${videoId}...`);

    const inicio = Date.now();
    while ((Date.now() - inicio) < maxMinutos * 60 * 1000) {
        await sleep(30000);

        const res = await fetch(`https://api.heygen.com/v1/video_status.get?video_id=${videoId}`, {
            headers: { 'X-Api-Key': config.HEYGEN_API_KEY },
        });
        const data = await res.json();

        if (data.data?.status === 'completed') {
            log(`✅ Video listo: ${data.data.video_url}`);
            return data.data.video_url;
        }
        if (data.data?.status === 'failed') {
            throw new Error(`HeyGen falló: ${data.data.error}`);
        }
        log(`  Estado: ${data.data?.status} — esperando...`);
    }
    throw new Error('Timeout esperando video HeyGen');
}

// ─── PASO 4: Publicar en redes con Blotato ────────────────────────────────────
async function publicarBlotato(config, videoUrl, caption, redes = ['instagram', 'tiktok']) {
    if (!config.BLOTATO_API_KEY || config.BLOTATO_API_KEY === 'TU_API_KEY_AQUI') {
        log('⚠️  Blotato no configurado — saltando publicación', 'WARN');
        return;
    }

    log(`Publicando en: ${redes.join(', ')}`);

    for (const red of redes) {
        const response = await fetch('https://api.blotato.com/v1/posts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${config.BLOTATO_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                platforms: [red],
                content: { text: caption, media_url: videoUrl },
                schedule: { type: 'now' },
            }),
        });

        if (response.ok) {
            log(`✅ Publicado en ${red}`);
        } else {
            log(`❌ Error publicando en ${red}: ${response.status}`, 'ERROR');
        }
    }
}

// ─── PASO 5: Notificar por Telegram ───────────────────────────────────────────
async function notificarTelegram(config, mensaje) {
    if (!config.TELEGRAM_BOT_TOKEN || config.TELEGRAM_BOT_TOKEN === 'TU_BOT_TOKEN') return;

    await fetch(`https://api.telegram.org/bot${config.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: config.TELEGRAM_CHAT_ID,
            text: mensaje,
            parse_mode: 'HTML',
        }),
    });
    log('📱 Notificación enviada a Telegram');
}

// ─── FLUJO COMPLETO SEMANAL ───────────────────────────────────────────────────
async function ejecutarSemanalmente(config) {
    log('🚀 === INICIO CICLO SEMANAL TechnoCrazy ===');

    try {
        const scripts = await generarScriptsSemanales(config);
        log('Scripts generados. Para generar videos en HeyGen, configura HEYGEN_API_KEY en config.json');
        log('Para usar Colab gratuito: abre colab/VozClonada_TechnoCrazy.ipynb y VozClonada_TechnoCrazy.ipynb');

        await notificarTelegram(config,
            `🎬 <b>TechnoCrazy — Scripts Semanales Listos</b>\n\n` +
            `✅ 7 scripts generados\n` +
            `📁 Guardados en: output/scripts_${new Date().toISOString().split('T')[0]}.txt\n\n` +
            `Próximo paso: subir a Colab y generar videos`
        );

        log('✅ === CICLO COMPLETADO ===');
    } catch (err) {
        log(`❌ Error en ciclo: ${err.message}`, 'ERROR');
        await notificarTelegram(config, `❌ Error en automatizador: ${err.message}`);
    }
}

// ─── PROGRAMADOR SIMPLE (reemplaza cron de n8n) ───────────────────────────────
function programarLunes8AM(config) {
    function msHastaProximoLunes8AM() {
        const ahora = new Date();
        const proximoLunes = new Date(ahora);
        const diasHastaLunes = (1 - ahora.getDay() + 7) % 7 || 7;
        proximoLunes.setDate(ahora.getDate() + diasHastaLunes);
        proximoLunes.setHours(8, 0, 0, 0);
        return proximoLunes - ahora;
    }

    function tick() {
        const ms = msHastaProximoLunes8AM();
        const horas = Math.round(ms / 3600000);
        log(`Próxima ejecución: en ${horas} horas (lunes 8:00 AM)`);

        setTimeout(async () => {
            await ejecutarSemanalmente(config);
            tick();
        }, ms);
    }

    tick();
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const config = loadConfig();
const args = process.argv.slice(2);

if (args.includes('--ahora')) {
    log('Modo manual: ejecutando ciclo ahora...');
    ejecutarSemanalmente(config);
} else if (args.includes('--programar')) {
    log('Modo daemon: esperando lunes 8:00 AM...');
    programarLunes8AM(config);
} else {
    console.log(`
╔══════════════════════════════════════════╗
║  TechnoCrazy — Automatizador de Contenido ║
╚══════════════════════════════════════════╝

Uso:
  node automatizador.js --ahora      Ejecutar ciclo completo ahora
  node automatizador.js --programar  Correr como daemon (lunes 8AM)

Configura tus API keys en config.json antes de ejecutar.
`);
}
