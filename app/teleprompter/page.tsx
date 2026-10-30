'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowLeft, Minus, Pause, Play, Plus, RotateCcw, Trash2, Upload } from 'lucide-react';
import styles from './teleprompter.module.css';

const STORAGE_KEY = 'teleprompter-tec:v1';

const FONT_OPTIONS = [
  { value: "'Manrope', sans-serif", label: 'Manrope — sans claro' },
  { value: "'Inter', sans-serif", label: 'Inter — sans neutro' },
  { value: 'Arial, Helvetica, sans-serif', label: 'Arial — sans clásico' },
  { value: "'Lora', Georgia, serif", label: 'Lora — serif editorial' },
  { value: "Georgia, 'Times New Roman', serif", label: 'Georgia — serif' },
  { value: "'Courier Prime', 'Courier New', monospace", label: 'Courier — monoespaciado' },
];

const THEME_SWATCHES = [
  { bg: '#0a0a0c', fg: '#f4f4f5', accent: '#e8b24d', label: 'Negro clásico' },
  { bg: '#fafaf8', fg: '#15171c', accent: '#c2410c', label: 'Papel claro' },
  { bg: '#0b0e14', fg: '#dce8ff', accent: '#5b8def', label: 'Azul noche' },
  { bg: '#0c0c0a', fg: '#f2c879', accent: '#ffffff', label: 'Ámbar de cabina' },
];

type Settings = {
  wpm: number;
  fontSize: number;
  fontFamily: string;
  columnWidth: number;
  bg: string;
  fg: string;
  accent: string;
  mirror: boolean;
  guide: boolean;
  centerAlign: boolean;
};

const DEFAULT_SETTINGS: Settings = {
  wpm: 140,
  fontSize: 48,
  fontFamily: FONT_OPTIONS[0].value,
  columnWidth: 720,
  bg: '#0a0a0c',
  fg: '#f4f4f5',
  accent: '#e8b24d',
  mirror: false,
  guide: true,
  centerAlign: true,
};

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
  const r = parseInt(full.substring(0, 2), 16) || 0;
  const g = parseInt(full.substring(2, 4), 16) || 0;
  const b = parseInt(full.substring(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function TeleprompterPage() {
  const [script, setScript] = useState('');
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [view, setView] = useState<'setup' | 'stage'>('setup');
  const [loaded, setLoaded] = useState(false);
  const [words, setWords] = useState<string[]>([]);
  const [playIcon, setPlayIcon] = useState<'play' | 'pause'>('play');
  const [progressPct, setProgressPct] = useState(0);
  const [barHidden, setBarHidden] = useState(false);

  const stageScrollRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const wordsRef = useRef<string[]>([]);
  const playingRef = useRef(false);
  const startTimeRef = useRef(0);
  const elapsedAtPauseRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const currentIndexRef = useRef(-1);
  const hideBarTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const settingsRef = useRef(settings);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    settingsRef.current = settings;
  }, [settings]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (typeof saved.script === 'string') setScript(saved.script);
        if (saved.settings) setSettings((s) => ({ ...s, ...saved.settings }));
      }
    } catch {
      // almacenamiento no disponible: se ignora
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ script, settings }));
    } catch {
      // almacenamiento no disponible: se ignora
    }
  }, [script, settings, loaded]);

  const wordCount = script.trim() ? script.trim().split(/\s+/).length : 0;
  const estimatedSeconds = wordCount ? Math.round((wordCount / settings.wpm) * 60) : 0;
  const estMin = Math.floor(estimatedSeconds / 60);
  const estSec = String(estimatedSeconds % 60).padStart(2, '0');

  function updateSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
    setSettings((s) => ({ ...s, [key]: value }));
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setScript(String(reader.result || ''));
    reader.readAsText(file);
    e.target.value = '';
  }

  const msPerWord = useCallback(() => 60000 / settingsRef.current.wpm, []);
  const totalDurationMs = useCallback(() => wordsRef.current.length * msPerWord(), [msPerWord]);

  function elapsedMs() {
    if (!playingRef.current) return elapsedAtPauseRef.current;
    return elapsedAtPauseRef.current + (performance.now() - startTimeRef.current);
  }

  const setWordByElapsed = useCallback(
    (ms: number) => {
      const total = wordsRef.current.length;
      if (!total) return;
      const idx = Math.min(total - 1, Math.floor(ms / msPerWord()));
      if (idx === currentIndexRef.current) return;
      currentIndexRef.current = idx;

      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        el.classList.toggle(styles.wordCurrent, i === idx);
        el.classList.toggle(styles.wordRead, i < idx);
      });

      const target = wordRefs.current[idx];
      const scrollEl = stageScrollRef.current;
      if (target && scrollEl) {
        const stageRect = scrollEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const guideY = stageRect.top + stageRect.height * 0.45;
        const delta = targetRect.top - guideY;
        scrollEl.scrollTop += delta;
      }

      setProgressPct(total > 1 ? (idx / (total - 1)) * 100 : 0);
    },
    [msPerWord]
  );

  const showBar = useCallback(() => {
    setBarHidden(false);
    scheduleBarHide();
  }, []);

  function scheduleBarHide() {
    if (hideBarTimeoutRef.current) clearTimeout(hideBarTimeoutRef.current);
    if (!playingRef.current) return;
    hideBarTimeoutRef.current = setTimeout(() => setBarHidden(true), 2600);
  }

  const pause = useCallback(() => {
    if (!playingRef.current) return;
    playingRef.current = false;
    elapsedAtPauseRef.current = elapsedMs();
    setPlayIcon('play');
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    showBar();
  }, [showBar]);

  const tick = useCallback(() => {
    const ms = elapsedMs();
    setWordByElapsed(ms);
    if (ms >= totalDurationMs()) {
      pause();
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [pause, setWordByElapsed, totalDurationMs]);

  function resetPlayback() {
    elapsedAtPauseRef.current = 0;
    currentIndexRef.current = -1;
    wordRefs.current.forEach((el) => el?.classList.remove(styles.wordCurrent, styles.wordRead));
    setProgressPct(0);
    if (stageScrollRef.current) stageScrollRef.current.scrollTop = 0;
  }

  const play = useCallback(() => {
    if (playingRef.current || wordsRef.current.length === 0) return;
    if (currentIndexRef.current >= wordsRef.current.length - 1) resetPlayback();
    playingRef.current = true;
    startTimeRef.current = performance.now();
    setPlayIcon('pause');
    rafRef.current = requestAnimationFrame(tick);
    scheduleBarHide();
  }, [tick]);

  function togglePlay() {
    if (playingRef.current) pause();
    else play();
  }

  function restart() {
    pause();
    resetPlayback();
    play();
  }

  function nudgeSpeed(delta: number) {
    setSettings((s) => ({ ...s, wpm: Math.max(60, Math.min(240, s.wpm + delta)) }));
  }

  function enterStage() {
    const raw = script.trim();
    const w = raw ? raw.split(/\s+/) : [];
    if (w.length === 0) return;
    wordsRef.current = w;
    wordRefs.current = [];
    setWords(w);
    setView('stage');
  }

  // Arranca la lectura una vez que React ya montó los <span> de cada palabra.
  useEffect(() => {
    if (view !== 'stage' || words.length === 0) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    resetPlayback();
    play();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, words]);

  function exitStage() {
    pause();
    setView('setup');
  }

  function handleProgressClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    elapsedAtPauseRef.current = pct * totalDurationMs();
    if (playingRef.current) startTimeRef.current = performance.now();
    setWordByElapsed(elapsedMs());
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (view !== 'stage') return;
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
        showBar();
      } else if (e.code === 'Escape') {
        exitStage();
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        nudgeSpeed(10);
        showBar();
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        nudgeSpeed(-10);
        showBar();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  const isActiveSwatch = (sw: (typeof THEME_SWATCHES)[number]) =>
    sw.bg.toLowerCase() === settings.bg.toLowerCase() &&
    sw.fg.toLowerCase() === settings.fg.toLowerCase() &&
    sw.accent.toLowerCase() === settings.accent.toLowerCase();

  const stageVars: CSSProperties = {
    ['--stage-width' as string]: `${settings.columnWidth}px`,
    ['--stage-size' as string]: `${settings.fontSize}px`,
    ['--stage-font' as string]: settings.fontFamily,
    ['--stage-align' as string]: settings.centerAlign ? 'center' : 'left',
    ['--stage-bg' as string]: settings.bg,
    ['--stage-fg' as string]: settings.fg,
    ['--stage-accent' as string]: settings.accent,
    ['--stage-muted' as string]: hexToRgba(settings.fg, 0.3),
    background: settings.bg,
  };

  return (
    <div className={styles.page}>
      {view === 'setup' && (
        <div className={styles.setup} style={{ padding: 'clamp(32px, 6vw, 48px) clamp(16px, 4vw, 24px) 64px' }}>
          <header className={styles.header}>
            <div className={styles.brand}>
              <span className={styles.brandMark} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="1" y="1" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 8h12M6 12h8M6 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className={styles.brandName}>
                Teleprompter <em className={styles.brandAccent} style={{ fontStyle: 'normal' }}>TEC</em>
              </span>
            </div>
            <p className={styles.tagline} style={{ margin: 0 }}>
              Carga tu guion, ajusta la lectura y presenta con marcado de palabra en vivo.
            </p>
          </header>

          <main className={styles.grid}>
            <section className={styles.panel} style={{ padding: 24 }} aria-labelledby="scriptLabel">
              <div className={styles.panelHead}>
                <h2 id="scriptLabel" className={styles.panelTitle} style={{ margin: 0 }}>
                  Guion
                </h2>
                <div className={styles.panelActions}>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btnGhost} ${styles.btnSm}`}
                    style={{ padding: '7px 11px' }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload size={16} />
                    Cargar archivo
                  </button>
                  <input ref={fileInputRef} type="file" accept=".txt,text/plain" hidden onChange={handleFile} />
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btnGhost} ${styles.btnSm}`}
                    style={{ padding: '7px 11px' }}
                    onClick={() => setScript('')}
                  >
                    <Trash2 size={16} />
                    Limpiar
                  </button>
                </div>
              </div>

              <textarea
                className={styles.scriptInput}
                style={{ padding: 16 }}
                placeholder="Pega aquí tu guion o carga un archivo .txt…"
                spellCheck={false}
                value={script}
                onChange={(e) => setScript(e.target.value)}
              />

              <div className={styles.panelFoot}>
                <span>{wordCount} palabra{wordCount === 1 ? '' : 's'}</span>
                <span className={styles.dot} aria-hidden="true">·</span>
                <span>{estMin}:{estSec} estimado</span>
              </div>
            </section>

            <section className={`${styles.panel} ${styles.panelSettings}`} style={{ padding: 24 }} aria-label="Ajustes de lectura">
              <div className={styles.field}>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel} htmlFor="speedRange">Velocidad</label>
                  <span className={styles.fieldValue}>{settings.wpm} ppm</span>
                </div>
                <input
                  id="speedRange"
                  type="range"
                  min={60}
                  max={240}
                  step={5}
                  value={settings.wpm}
                  onChange={(e) => updateSetting('wpm', Number(e.target.value))}
                  className={styles.slider}
                />
                <div className={styles.fieldHint}>Palabras por minuto · controla el tiempo de transición de cada palabra</div>
              </div>

              <div className={styles.field}>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel} htmlFor="sizeRange">Tamaño del texto</label>
                  <span className={styles.fieldValue}>{settings.fontSize} px</span>
                </div>
                <input
                  id="sizeRange"
                  type="range"
                  min={24}
                  max={96}
                  step={2}
                  value={settings.fontSize}
                  onChange={(e) => updateSetting('fontSize', Number(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="fontSelect">Tipo de letra</label>
                <select
                  id="fontSelect"
                  className={styles.select}
                  style={{ padding: '10px 12px' }}
                  value={settings.fontFamily}
                  onChange={(e) => updateSetting('fontFamily', e.target.value)}
                >
                  {FONT_OPTIONS.map((f) => (
                    <option key={f.value} value={f.value}>{f.label}</option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <span className={styles.fieldLabel}>Tema de color</span>
                <div className={styles.swatches}>
                  {THEME_SWATCHES.map((sw) => (
                    <button
                      key={sw.label}
                      type="button"
                      className={`${styles.swatch} ${isActiveSwatch(sw) ? styles.swatchActive : ''}`}
                      style={{ background: sw.bg }}
                      aria-label={sw.label}
                      onClick={() => setSettings((s) => ({ ...s, bg: sw.bg, fg: sw.fg, accent: sw.accent }))}
                    >
                      <span style={{ background: sw.fg }} />
                    </button>
                  ))}
                </div>
              </div>

              <details className={styles.advanced} style={{ paddingTop: 12 }}>
                <summary>Colores personalizados</summary>
                <div className={`${styles.field} ${styles.fieldInline}`} style={{ marginTop: 12 }}>
                  <label className={styles.fieldLabel} htmlFor="bgColor">Fondo</label>
                  <input id="bgColor" type="color" className={styles.colorInput} value={settings.bg} onChange={(e) => updateSetting('bg', e.target.value)} />
                </div>
                <div className={`${styles.field} ${styles.fieldInline}`} style={{ marginTop: 12 }}>
                  <label className={styles.fieldLabel} htmlFor="fgColor">Texto</label>
                  <input id="fgColor" type="color" className={styles.colorInput} value={settings.fg} onChange={(e) => updateSetting('fg', e.target.value)} />
                </div>
                <div className={`${styles.field} ${styles.fieldInline}`} style={{ marginTop: 12 }}>
                  <label className={styles.fieldLabel} htmlFor="accentColor">Marcado (karaoke)</label>
                  <input id="accentColor" type="color" className={styles.colorInput} value={settings.accent} onChange={(e) => updateSetting('accent', e.target.value)} />
                </div>
              </details>

              <div className={styles.field}>
                <div className={styles.fieldRow}>
                  <label className={styles.fieldLabel} htmlFor="widthRange">Ancho de columna</label>
                  <span className={styles.fieldValue}>{settings.columnWidth} px</span>
                </div>
                <input
                  id="widthRange"
                  type="range"
                  min={440}
                  max={1200}
                  step={20}
                  value={settings.columnWidth}
                  onChange={(e) => updateSetting('columnWidth', Number(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.toggles} style={{ paddingTop: 16 }}>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    className={styles.toggleCheckbox}
                    checked={settings.mirror}
                    onChange={(e) => updateSetting('mirror', e.target.checked)}
                  />
                  <span className={styles.toggleTrack}><span className={styles.toggleThumb} /></span>
                  <span className={styles.toggleLabel}>Espejo (vidrio teleprompter)</span>
                </label>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    className={styles.toggleCheckbox}
                    checked={settings.guide}
                    onChange={(e) => updateSetting('guide', e.target.checked)}
                  />
                  <span className={styles.toggleTrack}><span className={styles.toggleThumb} /></span>
                  <span className={styles.toggleLabel}>Línea guía central</span>
                </label>
                <label className={styles.toggle}>
                  <input
                    type="checkbox"
                    className={styles.toggleCheckbox}
                    checked={settings.centerAlign}
                    onChange={(e) => updateSetting('centerAlign', e.target.checked)}
                  />
                  <span className={styles.toggleTrack}><span className={styles.toggleThumb} /></span>
                  <span className={styles.toggleLabel}>Texto centrado</span>
                </label>
              </div>
            </section>
          </main>

          <footer className={styles.footer} style={{ paddingTop: 16 }}>
            <button
              type="button"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}
              style={{ padding: '14px 28px' }}
              onClick={enterStage}
            >
              <Play size={18} />
              Iniciar lectura
            </button>
            <span className={styles.footerHint}>Espacio para pausar · Esc para salir, dentro de la lectura</span>
          </footer>
        </div>
      )}

      {view === 'stage' && (
        <div className={styles.stage} style={stageVars}>
          <div className={`${styles.stageFade} ${styles.stageFadeTop}`} aria-hidden="true" />
          <div className={`${styles.stageFade} ${styles.stageFadeBottom}`} aria-hidden="true" />
          <div className={`${styles.stageGuide} ${settings.guide ? '' : styles.stageGuideHidden}`} aria-hidden="true" />

          <div
            className={styles.stageScroll}
            ref={stageScrollRef}
            onMouseMove={showBar}
            onTouchStart={showBar}
          >
            <div className={styles.stageSpacer} aria-hidden="true" />
            <div
              className={`${styles.stageText} ${settings.mirror ? styles.stageTextMirrored : ''}`}
              style={{ padding: '0 24px' }}
            >
              {words.flatMap((w, i) => [
                <span
                  key={i}
                  ref={(el) => {
                    wordRefs.current[i] = el;
                  }}
                  className={styles.word}
                >
                  {w}
                </span>,
                ' ',
              ])}
            </div>
            <div className={styles.stageSpacer} aria-hidden="true" />
          </div>

          <div
            className={`${styles.stageBar} ${barHidden ? styles.stageBarHidden : ''}`}
            style={{ padding: 'clamp(12px, 3vw, 16px) clamp(12px, 4vw, 24px)' }}
          >
            <button type="button" className={styles.stageBtn} aria-label="Salir" onClick={exitStage}>
              <ArrowLeft size={18} />
            </button>
            <button type="button" className={styles.stageBtn} aria-label="Reducir velocidad" onClick={() => nudgeSpeed(-10)}>
              <Minus size={18} />
            </button>
            <button
              type="button"
              className={`${styles.stageBtn} ${styles.stageBtnPlay}`}
              aria-label="Reproducir o pausar"
              onClick={() => {
                togglePlay();
                showBar();
              }}
            >
              {playIcon === 'play' ? <Play size={20} /> : <Pause size={20} />}
            </button>
            <button type="button" className={styles.stageBtn} aria-label="Aumentar velocidad" onClick={() => nudgeSpeed(10)}>
              <Plus size={18} />
            </button>
            <button type="button" className={styles.stageBtn} aria-label="Reiniciar" onClick={restart}>
              <RotateCcw size={18} />
            </button>
            <div className={styles.stageProgress} onClick={handleProgressClick}>
              <div className={styles.stageProgressFill} style={{ width: `${progressPct}%` }} />
            </div>
            <span className={styles.stageSpeed}>{settings.wpm} ppm</span>
          </div>
        </div>
      )}
    </div>
  );
}
