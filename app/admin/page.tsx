"use client";
import { useEffect, useState, type ReactNode } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  getDocs,
  limit as fsLimit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { useCollection } from "@/lib/useCollection";
import AdminTabShell, { type AdminTabDef } from "@/components/admin/AdminTabShell";
import LlamadasTab from "@/components/admin/LlamadasTab";
import ImageUploadField from "@/components/shared/ImageUploadField";
import FileUploadField, { type UploadedFile } from "@/components/admin/FileUploadField";
import { StarRatingDisplay, StarRatingInput } from "@/components/shared/StarRating";
import {
  UserCircle,
  DollarSign,
  Package,
  ArrowUp,
  ArrowDown,
  Clock,
  Download,
  Library,
  Images,
  Quote,
  MessageCircleQuestion,
  Lightbulb,
  Newspaper,
  Settings,
  FileText,
  Trash2,
  Pencil,
  Plus,
  Check,
  Eye,
  EyeOff,
  Nfc,
  Copy,
  Power,
  BarChart3,
  Smartphone,
  Link2,
  Video,
  Search,
  Share2,
  Phone,
  MessageSquare,
  Mail,
  MessageCircle,
  MapPin,
  UserPlus,
  Coins,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { NFC_TYPES, getTypeDef, resolveChipTarget, type NfcChipType } from "@/lib/nfcTypes";
import {
  FALLBACK_PRODUCT_ICON,
  PRODUCT_ACCENTS,
  PRODUCT_ICONS,
  PLATFORM_LABELS,
  PRODUCT_ICON_MAP,
  PRODUCT_PLATFORMS,
  accentOf,
  emptyHomeProduct,
  formatFileSize,
  type HomeProduct,
  type HomeProductAction,
} from "@/lib/homeProducts";
import { QUICK_LINK_CATEGORIES, emptyQuickLink, type QuickLink } from "@/lib/quickLinks";
import type {
  Post,
  Product,
  LibraryItem,
  LibraryItemType,
  GalleryImage,
  Testimonial,
  Question,
  FeedbackItem,
  NewsItem,
  NewsCategory,
  NfcChip,
  NfcScan,
} from "@/lib/collections";
import { getSiteScreenshotUrl } from "@/lib/screenshot";
import { FEEDBACK_CATEGORY_LABELS, NEWS_CATEGORY_LABELS, LIBRARY_TYPE_LABELS } from "@/lib/collections";
import { translations } from "@/lib/i18n";
import { generateContractPDF, generateReceiptPDF, type ContractData, type ReceiptData } from "@/lib/pdf";
import type { Timestamp } from "firebase/firestore";
import type { NavLinkOverride, ServiceOverride } from "@/contexts/SiteConfigContext";

// ── helpers UI compartidos dentro del panel ──────────────────────────────
// Los estilos viven en las clases .adm-* de app/globals.css: esquinas suaves
// (10px, no pastillas), foco con anillo azul y espaciado más generoso.
function inputClass() {
  return "adm-input";
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="adm-card">
      <h2 className="adm-card-title">{title}</h2>
      {subtitle && <p className="adm-card-sub">{subtitle}</p>}
      <div style={{ marginTop: 20 }}>{children}</div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="adm-label">{label}</label>
      {children}
    </div>
  );
}

function IconBtn({ onClick, label, danger, children }: { onClick: () => void; label: string; danger?: boolean; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex items-center justify-center flex-shrink-0 transition-colors"
      style={{
        width: 30,
        height: 30,
        borderRadius: 8,
        background: danger ? "rgba(239,68,68,0.1)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${danger ? "rgba(239,68,68,0.24)" : "rgba(255,255,255,0.1)"}`,
        color: danger ? "#ff8080" : "rgba(255,255,255,0.62)",
      }}
    >
      {children}
    </button>
  );
}

// ── pestañas ──────────────────────────────────────────────────────────────
type AdminTab =
  | "perfil"
  | "inicio"
  | "enlaces"
  | "precios"
  | "biblioteca"
  | "galeria"
  | "testimonios"
  | "preguntas"
  | "feedback"
  | "noticias"
  | "chips"
  | "llamadas"
  | "config"
  | "contratos";

const ADMIN_TABS: AdminTabDef<AdminTab>[] = [
  { id: "perfil", label: "Perfil y Muro", icon: UserCircle },
  { id: "inicio", label: "Productos del Inicio", icon: Package },
  { id: "enlaces", label: "Enlaces (/links)", icon: Link2 },
  { id: "precios", label: "Precios y Productos", icon: DollarSign },
  { id: "biblioteca", label: "Biblioteca", icon: Library },
  { id: "galeria", label: "Galería", icon: Images },
  { id: "testimonios", label: "Testimonios", icon: Quote },
  { id: "preguntas", label: "Preguntas", icon: MessageCircleQuestion },
  { id: "feedback", label: "Feedback", icon: Lightbulb },
  { id: "noticias", label: "Noticias", icon: Newspaper },
  { id: "chips", label: "Chips NFC", icon: Nfc },
  { id: "llamadas", label: "Agente IA (Llamadas)", icon: Phone },
  { id: "config", label: "Config", icon: Settings },
  { id: "contratos", label: "Contratos y Recibos", icon: FileText },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>("perfil");

  return (
    <AdminTabShell tabs={ADMIN_TABS} activeTab={activeTab} onTabChange={setActiveTab} onLogout={() => signOut(auth)}>
      {activeTab === "perfil" && <PerfilMuroTab />}
      {activeTab === "inicio" && <ProductosInicioTab />}
      {activeTab === "enlaces" && <EnlacesTab />}
      {activeTab === "precios" && <PreciosProductosTab />}
      {activeTab === "biblioteca" && <BibliotecaTab />}
      {activeTab === "galeria" && <GaleriaTab />}
      {activeTab === "testimonios" && <TestimoniosTab />}
      {activeTab === "preguntas" && <PreguntasTab />}
      {activeTab === "feedback" && <FeedbackTab />}
      {activeTab === "noticias" && <NoticiasTab />}
      {activeTab === "chips" && <NfcChipsTab />}
      {activeTab === "llamadas" && <LlamadasTab />}
      {activeTab === "config" && <ConfigTab />}
      {activeTab === "contratos" && <ContratosTab />}
    </AdminTabShell>
  );
}

// ── Perfil y Muro ─────────────────────────────────────────────────────────
function PerfilMuroTab() {
  const { items: posts } = useCollection<Post>("posts", [orderBy("createdAt", "desc")]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  function reset() {
    setTitle("");
    setBody("");
    setImageUrl([]);
    setEditingId(null);
  }

  function startEdit(p: Post) {
    setEditingId(p.id);
    setTitle(p.title);
    setBody(p.body);
    setImageUrl(p.imageUrl ? [p.imageUrl] : []);
  }

  async function save() {
    if (!title.trim() || !body.trim()) return;
    setSaving(true);
    const data = { title: title.trim(), body: body.trim(), imageUrl: imageUrl[0] || "" };
    if (editingId) {
      await updateDoc(doc(db, "posts", editingId), data);
    } else {
      await addDoc(collection(db, "posts"), { ...data, published: true, createdAt: serverTimestamp() });
    }
    setSaving(false);
    setMsg("Guardado ✓");
    setTimeout(() => setMsg(""), 2000);
    reset();
  }

  async function togglePublished(p: Post) {
    await updateDoc(doc(db, "posts", p.id), { published: !p.published });
  }

  async function remove(id: string) {
    if (!confirm("¿Borrar esta publicación?")) return;
    await deleteDoc(doc(db, "posts", id));
  }

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold mb-4">{msg}</p>}
      <Card title={editingId ? "Editar publicación" : "Nueva publicación"} subtitle="Tu blog personal — solo tú publicas, cualquier visitante puede verlo en /muro.">
        <div className="flex flex-col gap-4">
          <Field label="Título">
            <input className={inputClass()} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Contenido">
            <textarea className={inputClass()} rows={5} value={body} onChange={(e) => setBody(e.target.value)} />
          </Field>
          <Field label="Imagen (opcional)">
            <ImageUploadField value={imageUrl} onChange={setImageUrl} />
          </Field>
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={save} disabled={saving} className="adm-btn adm-btn-primary">
            {editingId ? "Guardar cambios" : "Publicar"}
          </button>
          {editingId && (
            <button onClick={reset} className="text-white/50 text-xs font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </Card>

      <Card title="Publicaciones">
        <div className="flex flex-col gap-2">
          {posts.map((p) => (
            <div key={p.id} className="adm-row flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-white text-sm font-semibold truncate">{p.title}</p>
                  <button
                    onClick={() => togglePublished(p)}
                    className="rounded-full px-2 py-0.5 flex-shrink-0"
                    style={{ fontSize: 10, background: p.published ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.08)", color: p.published ? "#4ade80" : "rgba(255,255,255,0.5)" }}
                  >
                    {p.published ? "Publicado" : "Borrador"}
                  </button>
                </div>
                <p className="text-white/40 text-xs truncate mt-0.5">{p.body}</p>
              </div>
              <div className="flex gap-1.5 flex-shrink-0">
                <IconBtn onClick={() => startEdit(p)} label="Editar"><Pencil size={13} /></IconBtn>
                <IconBtn onClick={() => remove(p.id)} label="Borrar" danger><Trash2 size={13} /></IconBtn>
              </div>
            </div>
          ))}
          {posts.length === 0 && <p className="text-white/30 text-xs">Todavía no hay publicaciones.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Productos del Inicio ─────────────────────────────────────────────────
// Tarjetas de la sección "Productos" de la página de inicio (components/Products.tsx).
// Se guardan en el documento config/site, campo `homeProducts`, en vez de en una
// colección nueva: config/site ya tiene lectura pública + escritura con sesión en
// firestore.rules, así que no hay que publicar reglas nuevas, y el sitio las
// recibe en vivo por el onSnapshot de SiteConfigContext (sin volver a desplegar).
const ACTION_OPTIONS: { id: HomeProductAction; label: string; help: string; Icon: LucideIcon }[] = [
  { id: "download", label: "Descarga gratis", help: "Botón que descarga el archivo que subas aquí.", Icon: Download },
  { id: "link", label: "Enlace externo", help: "Botón que abre otra página (la app, Payhip…).", Icon: Link2 },
  { id: "soon", label: "Próximamente", help: "Se ve la tarjeta, pero sin descarga ni enlace.", Icon: Clock },
];

function ProductosInicioTab() {
  const [items, setItems] = useState<HomeProduct[] | null>(null);
  const [form, setForm] = useState<HomeProduct>(emptyHomeProduct());
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const snap = await getDoc(doc(db, "config", "site"));
      const data = snap.exists() ? snap.data() : {};
      setItems(Array.isArray(data.homeProducts) ? (data.homeProducts as HomeProduct[]) : []);
    })();
  }, []);

  async function persist(next: HomeProduct[]) {
    setItems(next);
    await setDoc(doc(db, "config", "site"), { homeProducts: next }, { merge: true });
    setMsg("Guardado ✓");
    setTimeout(() => setMsg(""), 2000);
  }

  function reset() {
    setForm(emptyHomeProduct());
    setImageUrl([]);
    setFile(null);
    setEditingId(null);
    setError("");
  }

  function startEdit(p: HomeProduct) {
    setEditingId(p.id);
    setForm({ ...emptyHomeProduct(), ...p });
    setImageUrl(p.imageUrl ? [p.imageUrl] : []);
    // Los archivos subidos desde el panel viven en Vercel Blob; cualquier otra
    // dirección se pegó a mano y se sigue editando como texto.
    const subido = !!p.fileUrl && p.fileUrl.includes(".blob.vercel-storage.com");
    setFile(subido ? { url: p.fileUrl as string, name: p.fileName || "archivo", size: p.fileSize || 0 } : null);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function save() {
    if (items === null) return;
    setError("");
    if (!form.name.trim() || !form.desc.trim()) {
      setError("Hace falta el nombre y la descripción del producto.");
      return;
    }
    // El archivo puede venir de dos sitios: subido aquí (Vercel Blob) o ya
    // publicado en otra parte y pegado a mano (por ejemplo /descargas/RADI.apk,
    // que se sirve desde el propio sitio).
    const manualUrl = (form.fileUrl || "").trim();
    if (form.action === "download" && !file && !manualUrl) {
      setError("Sube el archivo, pega su dirección, o cambia la acción del botón.");
      return;
    }
    if (form.action === "link" && !(form.linkUrl || "").trim()) {
      setError("Escribe la dirección que abrirá el botón.");
      return;
    }

    // De un archivo subido ya se sabe el peso; de una dirección pegada se
    // pregunta con un HEAD para poder mostrarlo en la tarjeta ("Gratis · 24 MB").
    // Si el servidor no lo dice (u otro dominio lo bloquea), simplemente no se
    // muestra el peso.
    let manualSize = 0;
    if (form.action === "download" && !file && manualUrl) {
      try {
        const head = await fetch(manualUrl, { method: "HEAD" });
        manualSize = Number(head.headers.get("content-length")) || 0;
      } catch {
        manualSize = 0;
      }
    }

    const product: HomeProduct = {
      id: editingId || crypto.randomUUID(),
      name: form.name.trim(),
      desc: form.desc.trim(),
      tag: form.tag.trim(),
      accent: form.accent,
      icon: form.icon,
      action: form.action,
      badge: (form.badge || "").trim(),
      platform: form.platform || "none",
      visible: form.visible,
      imageUrl: imageUrl[0] || "",
      fileUrl: form.action === "download" ? file?.url || manualUrl : "",
      fileName:
        form.action === "download"
          ? file?.name || decodeURIComponent(manualUrl.split("/").pop() || "")
          : "",
      fileSize: form.action === "download" ? file?.size || manualSize : 0,
      linkUrl: form.action === "link" ? (form.linkUrl || "").trim() : "",
    };

    setSaving(true);
    await persist(editingId ? items.map((p) => (p.id === editingId ? product : p)) : [...items, product]);
    setSaving(false);
    reset();
  }

  async function toggleVisible(id: string) {
    if (!items) return;
    await persist(items.map((p) => (p.id === id ? { ...p, visible: !p.visible } : p)));
  }

  async function move(index: number, dir: -1 | 1) {
    if (!items) return;
    const target = index + dir;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    await persist(next);
  }

  async function remove(id: string) {
    if (!items) return;
    if (!confirm("¿Quitar este producto de la página de inicio?")) return;
    await persist(items.filter((p) => p.id !== id));
    if (editingId === id) reset();
  }

  if (items === null) return <p className="text-white/50 text-sm">Cargando…</p>;

  const accent = accentOf(form.accent);

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold" style={{ marginBottom: 16 }}>{msg}</p>}

      <Card
        title={editingId ? "Editar producto" : "Nuevo producto"}
        subtitle="Aparece en la sección Productos de la página de inicio (technocrazy.org). Los cambios se ven al instante, sin volver a publicar el sitio."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre">
            <input className={inputClass()} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ej. Narrador de Voz" />
          </Field>
          <Field label="Etiqueta / categoría">
            <input className={inputClass()} value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} placeholder="Ej. Productividad" />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Descripción (2 líneas en la tarjeta)">
              <textarea className={inputClass()} rows={2} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
            </Field>
          </div>
          <Field label="Insignia (precio o estado)">
            <input className={inputClass()} value={form.badge || ""} onChange={(e) => setForm({ ...form, badge: e.target.value })} placeholder="Gratis" />
          </Field>
          <Field label="¿Se ve en el sitio?">
            <button
              type="button"
              onClick={() => setForm({ ...form, visible: !form.visible })}
              className="flex items-center gap-1.5 font-bold"
              style={{
                fontSize: 12,
                borderRadius: 10,
                padding: "10px 14px",
                background: form.visible ? "rgba(74,222,128,0.14)" : "rgba(251,146,60,0.16)",
                border: `1px solid ${form.visible ? "rgba(74,222,128,0.35)" : "rgba(251,146,60,0.4)"}`,
                color: form.visible ? "#4ade80" : "#fdba74",
              }}
            >
              {form.visible ? <Eye size={13} /> : <EyeOff size={13} />}
              {form.visible ? "VISIBLE" : "OCULTO"}
            </button>
          </Field>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="adm-label">Qué es (se ve como etiqueta sobre la foto)</label>
          <div className="flex flex-wrap gap-2" style={{ marginTop: 8 }}>
            {[{ id: "none", admin: "Sin etiqueta", Icon: EyeOff }, ...PRODUCT_PLATFORMS].map((pl) => {
              const active = (form.platform || "none") === pl.id;
              return (
                <button
                  key={pl.id}
                  type="button"
                  onClick={() => setForm({ ...form, platform: pl.id })}
                  className="flex items-center gap-2 font-semibold"
                  style={{
                    minHeight: 44,
                    borderRadius: 10,
                    padding: "0 14px",
                    fontSize: 12,
                    background: active ? "rgba(41,121,255,0.12)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${active ? "rgba(41,121,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                    color: active ? "#fff" : "rgba(255,255,255,0.55)",
                  }}
                >
                  <pl.Icon size={14} /> {pl.admin}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="adm-label">Qué hace el botón</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" style={{ marginTop: 8 }}>
            {ACTION_OPTIONS.map((opt) => {
              const active = form.action === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setForm({ ...form, action: opt.id })}
                  className="text-left"
                  style={{
                    borderRadius: 12,
                    padding: 16,
                    background: active ? "rgba(41,121,255,0.12)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${active ? "rgba(41,121,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  <span className="flex items-center gap-2 font-bold text-white" style={{ fontSize: 13 }}>
                    <opt.Icon size={15} style={{ color: active ? "#2979ff" : "rgba(255,255,255,0.5)" }} />
                    {opt.label}
                  </span>
                  <span className="block" style={{ fontSize: 11, color: "rgba(255,255,255,0.42)", marginTop: 6, lineHeight: 1.5 }}>
                    {opt.help}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {form.action === "download" && (
          <div style={{ marginTop: 20 }}>
            <Field label="Archivo para descargar">
              <FileUploadField value={file} onChange={setFile} />
            </Field>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 8, lineHeight: 1.5 }}>
              Se sube directo desde tu navegador, así que aguanta instaladores y APK grandes (hasta 300MB).
            </p>
            {!file && (
              <div style={{ marginTop: 16 }}>
                <Field label="O pega la dirección de un archivo ya publicado">
                  <input
                    className={inputClass()}
                    value={form.fileUrl || ""}
                    onChange={(e) => setForm({ ...form, fileUrl: e.target.value })}
                    placeholder="/descargas/RADI.apk  o  https://…"
                    style={{ fontFamily: "monospace", fontSize: 12 }}
                  />
                </Field>
              </div>
            )}
          </div>
        )}

        {form.action === "link" && (
          <div style={{ marginTop: 20 }}>
            <Field label="Dirección que abre el botón">
              <input
                className={inputClass()}
                value={form.linkUrl || ""}
                onChange={(e) => setForm({ ...form, linkUrl: e.target.value })}
                placeholder="https://…"
                style={{ fontFamily: "monospace", fontSize: 12 }}
              />
            </Field>
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          <Field label="Foto del producto (opcional — si no pones, se usa el ícono)">
            <ImageUploadField value={imageUrl} onChange={setImageUrl} />
          </Field>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="adm-label">Color</label>
          <div className="flex flex-wrap gap-2" style={{ marginTop: 8 }}>
            {PRODUCT_ACCENTS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setForm({ ...form, accent: a.id })}
                aria-label={a.label}
                title={a.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: a.grad,
                  border: form.accent === a.id ? "2px solid #fff" : "2px solid transparent",
                  boxShadow: form.accent === a.id ? `0 0 0 3px ${a.solid}55` : "none",
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="adm-label">Ícono</label>
          <div className="flex flex-wrap gap-2" style={{ marginTop: 8 }}>
            {PRODUCT_ICONS.map((ic) => {
              const active = form.icon === ic.id;
              return (
                <button
                  key={ic.id}
                  type="button"
                  onClick={() => setForm({ ...form, icon: ic.id })}
                  aria-label={ic.label}
                  title={ic.label}
                  className="flex items-center justify-center"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: active ? accent.grad : "rgba(255,255,255,0.05)",
                    border: `1px solid ${active ? "transparent" : "rgba(255,255,255,0.1)"}`,
                    color: active ? "#fff" : "rgba(255,255,255,0.55)",
                  }}
                >
                  <ic.Icon size={18} />
                </button>
              );
            })}
          </div>
        </div>

        {error && <p className="text-red-400 font-semibold" style={{ fontSize: 12, marginTop: 20 }}>{error}</p>}

        <div className="flex gap-3 items-center" style={{ marginTop: 20 }}>
          <button onClick={save} disabled={saving} className="adm-btn adm-btn-primary">
            {saving ? "Guardando…" : editingId ? "Guardar cambios" : "Agregar producto"}
          </button>
          {editingId && (
            <button onClick={reset} className="text-white/50 text-xs font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </Card>

      <Card
        title="Productos en la página de inicio"
        subtitle="El orden de esta lista es el orden de las tarjetas. Si ninguno está visible, la sección completa desaparece del sitio."
      >
        <div className="flex flex-col gap-2">
          {items.map((p, i) => {
            const a = accentOf(p.accent);
            const Icon = PRODUCT_ICON_MAP[p.icon] ?? FALLBACK_PRODUCT_ICON;
            return (
              <div key={p.id} className="adm-row flex items-center gap-3">
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 36, height: 36, borderRadius: 10, background: a.grad, color: "#fff" }}
                >
                  <Icon size={17} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-white text-sm font-semibold truncate">{p.name}</p>
                    <button
                      onClick={() => toggleVisible(p.id)}
                      title={p.visible ? "Se ve en el sitio — clic para ocultarlo" : "NO se ve en el sitio — clic para mostrarlo"}
                      className="flex items-center gap-1 flex-shrink-0"
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        borderRadius: 6,
                        padding: "3px 8px",
                        background: p.visible ? "rgba(74,222,128,0.14)" : "rgba(251,146,60,0.16)",
                        border: `1px solid ${p.visible ? "rgba(74,222,128,0.35)" : "rgba(251,146,60,0.4)"}`,
                        color: p.visible ? "#4ade80" : "#fdba74",
                      }}
                    >
                      {p.visible ? <Eye size={10} /> : <EyeOff size={10} />}
                      {p.visible ? "VISIBLE" : "OCULTO"}
                    </button>
                  </div>
                  <p className="text-white/40 text-xs truncate" style={{ marginTop: 2 }}>
                    {p.platform && PLATFORM_LABELS[p.platform] ? `${PLATFORM_LABELS[p.platform].admin} · ` : ""}
                    {p.action === "download"
                      ? `Descarga · ${p.fileName || "sin archivo"}${p.fileSize ? ` · ${formatFileSize(p.fileSize)}` : ""}`
                      : p.action === "link"
                        ? `Enlace · ${p.linkUrl}`
                        : "Próximamente"}
                  </p>
                </div>
                <div className="flex gap-1.5 flex-shrink-0">
                  <IconBtn onClick={() => move(i, -1)} label="Subir"><ArrowUp size={13} /></IconBtn>
                  <IconBtn onClick={() => move(i, 1)} label="Bajar"><ArrowDown size={13} /></IconBtn>
                  <IconBtn onClick={() => startEdit(p)} label="Editar"><Pencil size={13} /></IconBtn>
                  <IconBtn onClick={() => remove(p.id)} label="Quitar" danger><Trash2 size={13} /></IconBtn>
                </div>
              </div>
            );
          })}
          {items.length === 0 && (
            <p className="text-white/30 text-xs">
              Todavía no hay productos — la sección no se muestra en el sitio hasta que agregues el primero.
            </p>
          )}
        </div>
      </Card>
    </>
  );
}

// ── Enlaces (página /links) ──────────────────────────────────────────────
// Botones de technocrazy.org/links (la página tipo "link in bio" para la
// bio de Instagram). Igual que homeProducts, viven en config/site (campo
// quickLinks) para no tener que publicar reglas de Firestore nuevas.
function EnlacesTab() {
  const [items, setItems] = useState<QuickLink[] | null>(null);
  const [form, setForm] = useState<QuickLink>(emptyQuickLink());
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const snap = await getDoc(doc(db, "config", "site"));
      const data = snap.exists() ? snap.data() : {};
      setItems(Array.isArray(data.quickLinks) ? (data.quickLinks as QuickLink[]) : []);
    })();
  }, []);

  async function persist(next: QuickLink[]) {
    setItems(next);
    await setDoc(doc(db, "config", "site"), { quickLinks: next }, { merge: true });
    setMsg("Guardado ✓");
    setTimeout(() => setMsg(""), 2000);
  }

  function reset() {
    setForm(emptyQuickLink());
    setImageUrl([]);
    setEditingId(null);
    setError("");
  }

  function startEdit(l: QuickLink) {
    setEditingId(l.id);
    setForm({ ...emptyQuickLink(), ...l });
    setImageUrl(l.imageUrl ? [l.imageUrl] : []);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function save() {
    if (items === null) return;
    setError("");
    if (!form.name.trim() || !form.url.trim()) {
      setError("Hace falta el nombre y la dirección del enlace.");
      return;
    }
    const link: QuickLink = {
      id: editingId || crypto.randomUUID(),
      name: form.name.trim(),
      url: form.url.trim(),
      category: form.category,
      imageUrl: imageUrl[0] || "",
      visible: form.visible,
    };
    setSaving(true);
    await persist(editingId ? items.map((l) => (l.id === editingId ? link : l)) : [...items, link]);
    setSaving(false);
    reset();
  }

  async function toggleVisible(id: string) {
    if (!items) return;
    await persist(items.map((l) => (l.id === id ? { ...l, visible: !l.visible } : l)));
  }

  // Sube/baja el enlace dentro de su propia categoría (cada persiana tiene su
  // propio orden), aunque en config/site quede todo en un único array.
  async function move(id: string, dir: -1 | 1) {
    if (!items) return;
    const cat = items.find((l) => l.id === id)?.category;
    const sameCat = items.filter((l) => l.category === cat);
    const posInCat = sameCat.findIndex((l) => l.id === id);
    const targetInCat = posInCat + dir;
    if (targetInCat < 0 || targetInCat >= sameCat.length) return;
    const otherId = sameCat[targetInCat].id;
    const i = items.findIndex((l) => l.id === id);
    const j = items.findIndex((l) => l.id === otherId);
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    await persist(next);
  }

  async function remove(id: string) {
    if (!items) return;
    if (!confirm("¿Quitar este enlace de la página /links?")) return;
    await persist(items.filter((l) => l.id !== id));
    if (editingId === id) reset();
  }

  if (items === null) return <p className="text-white/50 text-sm">Cargando…</p>;

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold" style={{ marginBottom: 16 }}>{msg}</p>}

      <Card
        title={editingId ? "Editar enlace" : "Nuevo enlace"}
        subtitle="Aparece en technocrazy.org/links, la página para la bio de Instagram. Los cambios se ven al instante, sin volver a publicar el sitio."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre">
            <input className={inputClass()} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ej. GaleriaX" />
          </Field>
          <Field label="Dirección (URL)">
            <input
              className={inputClass()}
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://…"
              style={{ fontFamily: "monospace", fontSize: 12 }}
            />
          </Field>
        </div>

        <div style={{ marginTop: 20 }}>
          <label className="adm-label">Categoría (persiana en la que aparece)</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" style={{ marginTop: 8 }}>
            {QUICK_LINK_CATEGORIES.map((c) => {
              const active = form.category === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setForm({ ...form, category: c.id })}
                  className="flex items-center gap-2 font-bold justify-center"
                  style={{
                    minHeight: 48,
                    borderRadius: 12,
                    padding: "0 14px",
                    fontSize: 13,
                    background: active ? "rgba(41,121,255,0.12)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${active ? "rgba(41,121,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                    color: active ? "#fff" : "rgba(255,255,255,0.55)",
                  }}
                >
                  <c.Icon size={15} style={{ color: active ? "#2979ff" : "rgba(255,255,255,0.4)" }} />
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <Field label="¿Se ve en el sitio?">
            <button
              type="button"
              onClick={() => setForm({ ...form, visible: !form.visible })}
              className="flex items-center gap-1.5 font-bold"
              style={{
                fontSize: 12,
                borderRadius: 10,
                padding: "10px 14px",
                background: form.visible ? "rgba(74,222,128,0.14)" : "rgba(251,146,60,0.16)",
                border: `1px solid ${form.visible ? "rgba(74,222,128,0.35)" : "rgba(251,146,60,0.4)"}`,
                color: form.visible ? "#4ade80" : "#fdba74",
              }}
            >
              {form.visible ? <Eye size={13} /> : <EyeOff size={13} />}
              {form.visible ? "VISIBLE" : "OCULTO"}
            </button>
          </Field>
        </div>

        <div style={{ marginTop: 20 }}>
          <Field label="Foto (círculo al lado del nombre)">
            <ImageUploadField value={imageUrl} onChange={setImageUrl} />
          </Field>
        </div>

        {error && <p className="text-red-400 font-semibold" style={{ fontSize: 12, marginTop: 20 }}>{error}</p>}

        <div className="flex gap-3 items-center" style={{ marginTop: 20 }}>
          <button onClick={save} disabled={saving} className="adm-btn adm-btn-primary">
            {saving ? "Guardando…" : editingId ? "Guardar cambios" : "Agregar enlace"}
          </button>
          {editingId && (
            <button onClick={reset} className="text-white/50 text-xs font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </Card>

      {QUICK_LINK_CATEGORIES.map((cat) => {
        const catItems = items.filter((l) => l.category === cat.id);
        return (
          <Card key={cat.id} title={cat.label} subtitle={`Persiana "${cat.label}" de /links. El orden de esta lista es el orden de los botones.`}>
            <div className="flex flex-col gap-2">
              {catItems.map((l) => (
                <div key={l.id} className="adm-row flex items-center gap-3">
                  <div
                    className="flex items-center justify-center flex-shrink-0 rounded-full overflow-hidden"
                    style={{ width: 36, height: 36, background: "rgba(255,255,255,0.06)" }}
                  >
                    {l.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={l.imageUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <cat.Icon size={16} color="rgba(255,255,255,0.4)" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-white text-sm font-semibold truncate">{l.name}</p>
                      <button
                        onClick={() => toggleVisible(l.id)}
                        title={l.visible ? "Se ve en el sitio — clic para ocultarlo" : "NO se ve en el sitio — clic para mostrarlo"}
                        className="flex items-center gap-1 flex-shrink-0"
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          borderRadius: 6,
                          padding: "3px 8px",
                          background: l.visible ? "rgba(74,222,128,0.14)" : "rgba(251,146,60,0.16)",
                          border: `1px solid ${l.visible ? "rgba(74,222,128,0.35)" : "rgba(251,146,60,0.4)"}`,
                          color: l.visible ? "#4ade80" : "#fdba74",
                        }}
                      >
                        {l.visible ? <Eye size={10} /> : <EyeOff size={10} />}
                        {l.visible ? "VISIBLE" : "OCULTO"}
                      </button>
                    </div>
                    <p className="text-white/40 text-xs truncate" style={{ marginTop: 2 }}>{l.url}</p>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0">
                    <IconBtn onClick={() => move(l.id, -1)} label="Subir"><ArrowUp size={13} /></IconBtn>
                    <IconBtn onClick={() => move(l.id, 1)} label="Bajar"><ArrowDown size={13} /></IconBtn>
                    <IconBtn onClick={() => startEdit(l)} label="Editar"><Pencil size={13} /></IconBtn>
                    <IconBtn onClick={() => remove(l.id)} label="Quitar" danger><Trash2 size={13} /></IconBtn>
                  </div>
                </div>
              ))}
              {catItems.length === 0 && (
                <p className="text-white/30 text-xs">Todavía no hay enlaces en esta categoría.</p>
              )}
            </div>
          </Card>
        );
      })}
    </>
  );
}

// ── Precios y Productos ──────────────────────────────────────────────────
function PreciosProductosTab() {
  const { items: products } = useCollection<Product>("products", [orderBy("createdAt", "desc")]);
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [priceDollars, setPriceDollars] = useState("");
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  function reset() {
    setTitle("");
    setShortDescription("");
    setLongDescription("");
    setPriceDollars("");
    setImageUrl([]);
    setEditingId(null);
  }

  function startEdit(p: Product) {
    setEditingId(p.id);
    setTitle(p.title);
    setShortDescription(p.shortDescription);
    setLongDescription(p.longDescription);
    setPriceDollars((p.priceCents / 100).toFixed(2));
    setImageUrl(p.imageUrl ? [p.imageUrl] : []);
  }

  async function save() {
    const cents = Math.round(parseFloat(priceDollars || "0") * 100);
    if (!title.trim() || !shortDescription.trim() || !cents) return;
    setSaving(true);
    const data = {
      title: title.trim(),
      shortDescription: shortDescription.trim(),
      longDescription: longDescription.trim(),
      priceCents: cents,
      currency: "usd" as const,
      imageUrl: imageUrl[0] || "",
    };
    if (editingId) {
      await updateDoc(doc(db, "products", editingId), data);
    } else {
      await addDoc(collection(db, "products"), { ...data, active: true, createdAt: serverTimestamp() });
    }
    setSaving(false);
    setMsg("Guardado ✓");
    setTimeout(() => setMsg(""), 2000);
    reset();
  }

  async function toggleActive(p: Product) {
    await updateDoc(doc(db, "products", p.id), { active: !p.active });
  }

  async function remove(id: string) {
    if (!confirm("¿Borrar este producto?")) return;
    await deleteDoc(doc(db, "products", id));
  }

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold mb-4">{msg}</p>}
      <Card title={editingId ? "Editar producto" : "Nuevo producto"} subtitle="Se muestra en /precios-productos con botón de compra real por Stripe.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Título">
            <input className={inputClass()} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Precio (USD)">
            <input className={inputClass()} placeholder="Ej. 49.99" value={priceDollars} onChange={(e) => setPriceDollars(e.target.value)} />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Descripción corta (tarjeta)">
              <textarea className={inputClass()} rows={2} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label="Descripción completa (página de detalle)">
              <textarea className={inputClass()} rows={4} value={longDescription} onChange={(e) => setLongDescription(e.target.value)} />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label="Foto">
              <ImageUploadField value={imageUrl} onChange={setImageUrl} />
            </Field>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={save} disabled={saving} className="adm-btn adm-btn-primary">
            {editingId ? "Guardar cambios" : "Agregar producto"}
          </button>
          {editingId && (
            <button onClick={reset} className="text-white/50 text-xs font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </Card>

      <Card
        title="Productos"
        subtitle="Solo los marcados como VISIBLE aparecen en la página Precios y Productos. Pulsa la etiqueta para cambiarlo."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.id} className="adm-row flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-white text-sm font-semibold truncate">{p.title}</p>
                  {/* Interruptor de visibilidad. Antes era una etiqueta que
                      parecía informativa; ahora dice explícitamente qué pasa
                      al pulsarla, porque "Oculto" es la razón #1 de que un
                      producto publicado no aparezca en /precios-productos. */}
                  <button
                    onClick={() => toggleActive(p)}
                    title={p.active ? "Se ve en el sitio — clic para ocultarlo" : "NO se ve en el sitio — clic para mostrarlo"}
                    className="flex items-center gap-1 flex-shrink-0 transition-colors"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      borderRadius: 6,
                      padding: "3px 8px",
                      background: p.active ? "rgba(74,222,128,0.14)" : "rgba(251,146,60,0.16)",
                      border: `1px solid ${p.active ? "rgba(74,222,128,0.35)" : "rgba(251,146,60,0.4)"}`,
                      color: p.active ? "#4ade80" : "#fdba74",
                    }}
                  >
                    {p.active ? <Eye size={10} /> : <EyeOff size={10} />}
                    {p.active ? "VISIBLE" : "OCULTO"}
                  </button>
                </div>
                <p style={{ color: "#7c4dff", fontSize: 13, fontWeight: 700 }}>${(p.priceCents / 100).toFixed(2)}</p>
                <p className="text-white/40 text-xs truncate mt-0.5">{p.shortDescription}</p>
              </div>
              <div className="flex gap-1.5 flex-shrink-0">
                <IconBtn onClick={() => startEdit(p)} label="Editar"><Pencil size={13} /></IconBtn>
                <IconBtn onClick={() => remove(p.id)} label="Borrar" danger><Trash2 size={13} /></IconBtn>
              </div>
            </div>
          ))}
          {products.length === 0 && <p className="text-white/30 text-xs">Todavía no hay productos.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Biblioteca ────────────────────────────────────────────────────────────
function BibliotecaTab() {
  const { items } = useCollection<LibraryItem>("libraryItems", [orderBy("createdAt", "desc")]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<LibraryItemType>("libro");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  function reset() {
    setTitle("");
    setDescription("");
    setType("libro");
    setLink("");
    setPrice("");
    setImageUrl([]);
    setEditingId(null);
  }

  function startEdit(it: LibraryItem) {
    setEditingId(it.id);
    setTitle(it.title);
    setDescription(it.description);
    setType(it.type);
    setLink(it.link);
    setPrice(it.price || "");
    setImageUrl(it.imageUrl ? [it.imageUrl] : []);
  }

  async function save() {
    if (!title.trim() || !description.trim() || !link.trim()) return;
    setSaving(true);
    const data = {
      title: title.trim(),
      description: description.trim(),
      type,
      link: link.trim(),
      price: price.trim(),
      imageUrl: imageUrl[0] || "",
    };
    if (editingId) {
      await updateDoc(doc(db, "libraryItems", editingId), data);
    } else {
      await addDoc(collection(db, "libraryItems"), { ...data, createdAt: serverTimestamp() });
    }
    setSaving(false);
    setMsg("Guardado ✓");
    setTimeout(() => setMsg(""), 2000);
    reset();
  }

  async function remove(id: string) {
    if (!confirm("¿Borrar este ítem de la biblioteca?")) return;
    await deleteDoc(doc(db, "libraryItems", id));
  }

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold mb-4">{msg}</p>}
      <Card title={editingId ? "Editar ítem" : "Nuevo ítem"} subtitle="Libros, videos, imágenes o cualquier link de afiliado/referido — se muestra en /biblioteca.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Título">
            <input className={inputClass()} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Tipo">
            <select className={inputClass()} value={type} onChange={(e) => setType(e.target.value as LibraryItemType)}>
              {(Object.keys(LIBRARY_TYPE_LABELS) as LibraryItemType[]).map((t) => (
                <option key={t} value={t}>{LIBRARY_TYPE_LABELS[t]}</option>
              ))}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Descripción">
              <textarea className={inputClass()} rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            </Field>
          </div>
          <Field label="Link (afiliado/referido)">
            <input className={inputClass()} value={link} onChange={(e) => setLink(e.target.value)} />
          </Field>
          <Field label="Precio (opcional, texto libre)">
            <input className={inputClass()} placeholder="Ej. $19.99 o Gratis" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Portada / imagen">
              <ImageUploadField value={imageUrl} onChange={setImageUrl} />
            </Field>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={save} disabled={saving} className="adm-btn adm-btn-primary">
            {editingId ? "Guardar cambios" : "Agregar a la biblioteca"}
          </button>
          {editingId && (
            <button onClick={reset} className="text-white/50 text-xs font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </Card>

      <Card title="Biblioteca">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((it) => (
            <div key={it.id} className="adm-row flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-white text-sm font-semibold truncate">{it.title}</p>
                <p style={{ color: "#2979ff", fontSize: 11 }}>{LIBRARY_TYPE_LABELS[it.type]}{it.price ? ` · ${it.price}` : ""}</p>
                <p className="text-white/40 text-xs truncate mt-0.5">{it.description}</p>
              </div>
              <div className="flex gap-1.5 flex-shrink-0">
                <IconBtn onClick={() => startEdit(it)} label="Editar"><Pencil size={13} /></IconBtn>
                <IconBtn onClick={() => remove(it.id)} label="Borrar" danger><Trash2 size={13} /></IconBtn>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-white/30 text-xs">Todavía no hay ítems.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Galería ───────────────────────────────────────────────────────────────
function GaleriaTab() {
  const { items } = useCollection<GalleryImage>("galleryImages", [orderBy("createdAt", "desc")]);
  const [msg, setMsg] = useState("");

  async function addUploaded(urls: string[]) {
    for (const url of urls) {
      await addDoc(collection(db, "galleryImages"), { url, title: "", prompt: "", createdAt: serverTimestamp() });
    }
    setMsg("Agregado ✓");
    setTimeout(() => setMsg(""), 2000);
  }

  async function saveTitle(id: string, title: string) {
    await updateDoc(doc(db, "galleryImages", id), { title });
  }

  async function savePrompt(id: string, prompt: string) {
    await updateDoc(doc(db, "galleryImages", id), { prompt });
  }

  async function remove(id: string) {
    if (!confirm("¿Borrar esta foto de la galería?")) return;
    await deleteDoc(doc(db, "galleryImages", id));
  }

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold mb-4">{msg}</p>}
      <Card title="Agregar fotos" subtitle="Puedes seleccionar varias a la vez — se muestran en /galeria.">
        <ImageUploadField value={[]} onChange={addUploaded} multiple max={10} />
      </Card>

      <Card title="Galería">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.map((img) => (
            <div key={img.id} className="rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt="" className="w-full h-28 object-cover" />
              <div className="p-2 flex flex-col gap-1.5">
                <input
                  className={inputClass()}
                  placeholder="Título"
                  defaultValue={img.title}
                  onBlur={(e) => saveTitle(img.id, e.target.value)}
                  style={{ fontSize: 11, padding: "6px 8px" }}
                />
                <textarea
                  className={inputClass()}
                  placeholder="Prompt usado para generar esta imagen"
                  rows={3}
                  defaultValue={img.prompt}
                  onBlur={(e) => savePrompt(img.id, e.target.value)}
                  style={{ fontSize: 11, padding: "6px 8px" }}
                />
                <button onClick={() => remove(img.id)} className="text-red-400 text-xs font-semibold">
                  Borrar
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-white/30 text-xs">Todavía no hay fotos.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Testimonios ───────────────────────────────────────────────────────────
function TestimoniosTab() {
  const { items } = useCollection<Testimonial>("testimonials", [orderBy("createdAt", "desc")]);
  const pending = items.filter((t) => !t.approved);
  const approved = items.filter((t) => t.approved);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  function reset() {
    setEditingId(null);
    setName("");
    setComment("");
    setRating(5);
    setWebsiteUrl("");
    setPhotoUrls([]);
  }

  function startEdit(t: Testimonial) {
    setEditingId(t.id);
    setName(t.name);
    setComment(t.comment);
    setRating(t.rating);
    setWebsiteUrl(t.websiteUrl || "");
    setPhotoUrls(t.photoUrls || []);
  }

  async function saveEdit() {
    if (!editingId || !name.trim() || !comment.trim()) return;
    setSaving(true);
    await updateDoc(doc(db, "testimonials", editingId), {
      name: name.trim(),
      comment: comment.trim(),
      rating,
      websiteUrl: websiteUrl.trim(),
      photoUrls,
    });
    setSaving(false);
    reset();
  }

  async function approve(id: string) {
    await updateDoc(doc(db, "testimonials", id), { approved: true });
  }
  async function remove(id: string) {
    if (!confirm("¿Borrar este testimonio?")) return;
    await deleteDoc(doc(db, "testimonials", id));
    if (editingId === id) reset();
  }

  function Row({ t, showApprove }: { t: Testimonial; showApprove: boolean }) {
    return (
      <div className="adm-row flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-white text-sm font-semibold">{t.name}</p>
            <StarRatingDisplay rating={t.rating} size={12} />
          </div>
          <p className="text-white/50 text-xs">{t.comment}</p>
          {t.websiteUrl && (
            <>
              <a href={t.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:underline block mt-0.5 truncate">
                {t.websiteUrl}
              </a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getSiteScreenshotUrl(t.websiteUrl)}
                alt=""
                loading="lazy"
                className="w-32 h-16 rounded object-cover object-top mt-1"
              />
            </>
          )}
          {t.photoUrls?.length > 0 && (
            <div className="flex gap-1.5 mt-1.5">
              {t.photoUrls.map((url) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={url} src={url} alt="" className="w-10 h-10 rounded object-cover" />
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-1.5 flex-shrink-0">
          {showApprove && (
            <IconBtn onClick={() => approve(t.id)} label="Aprobar"><Check size={13} /></IconBtn>
          )}
          <IconBtn onClick={() => startEdit(t)} label="Editar"><Pencil size={13} /></IconBtn>
          <IconBtn onClick={() => remove(t.id)} label="Borrar" danger><Trash2 size={13} /></IconBtn>
        </div>
      </div>
    );
  }

  return (
    <>
      {editingId && (
        <Card title="Editar testimonio" subtitle="Corrige nombre, comentario, estrellas, fotos o link — se guarda al instante, sin afectar si está aprobado o no.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Nombre">
              <input className={inputClass()} value={name} onChange={(e) => setName(e.target.value)} />
            </Field>
            <Field label="Link de su página">
              <input className={inputClass()} placeholder="https://tusitio.com" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Calificación">
                <StarRatingInput value={rating} onChange={setRating} />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Comentario">
                <textarea className={inputClass()} rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Fotos">
                <ImageUploadField value={photoUrls} onChange={setPhotoUrls} multiple max={4} />
              </Field>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={saveEdit} disabled={saving} className="adm-btn adm-btn-primary">
              Guardar cambios
            </button>
            <button onClick={reset} className="text-white/50 text-xs font-semibold">
              Cancelar
            </button>
          </div>
        </Card>
      )}
      <Card title={`Pendientes de aprobar (${pending.length})`} subtitle="Enviados por visitantes en /testimonios — solo se ven al público al aprobarlos.">
        <div className="flex flex-col gap-2">
          {pending.map((t) => <Row key={t.id} t={t} showApprove />)}
          {pending.length === 0 && <p className="text-white/30 text-xs">No hay testimonios pendientes.</p>}
        </div>
      </Card>
      <Card title="Aprobados">
        <div className="flex flex-col gap-2">
          {approved.map((t) => <Row key={t.id} t={t} showApprove={false} />)}
          {approved.length === 0 && <p className="text-white/30 text-xs">Todavía no hay testimonios aprobados.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Preguntas ─────────────────────────────────────────────────────────────
function PreguntasTab() {
  const { items } = useCollection<Question>("questions", [orderBy("createdAt", "desc")]);
  const pending = items.filter((q) => !q.answer);
  const answered = items.filter((q) => q.answer);
  const [drafts, setDrafts] = useState<Record<string, string>>({});

  async function answer(id: string) {
    const text = (drafts[id] || "").trim();
    if (!text) return;
    await updateDoc(doc(db, "questions", id), { answer: text, answeredAt: serverTimestamp() });
    setDrafts((d) => ({ ...d, [id]: "" }));
  }
  async function remove(id: string) {
    if (!confirm("¿Borrar esta pregunta?")) return;
    await deleteDoc(doc(db, "questions", id));
  }

  return (
    <>
      <Card title={`Pendientes de responder (${pending.length})`} subtitle="Enviadas por visitantes en /preguntas.">
        <div className="flex flex-col gap-3">
          {pending.map((q) => (
            <div key={q.id} className="rounded-lg px-3 py-2.5" style={{ background: "rgba(255,255,255,0.03)" }}>
              <p className="text-white text-sm font-semibold">{q.name || "Anónimo"}</p>
              <p className="text-white/60 text-xs mb-2">{q.question}</p>
              <div className="flex gap-2">
                <input
                  className={inputClass()}
                  placeholder="Escribe la respuesta…"
                  value={drafts[q.id] || ""}
                  onChange={(e) => setDrafts((d) => ({ ...d, [q.id]: e.target.value }))}
                />
                <button onClick={() => answer(q.id)} className="adm-btn adm-btn-primary adm-btn-sm flex-shrink-0">
                  Responder
                </button>
              </div>
            </div>
          ))}
          {pending.length === 0 && <p className="text-white/30 text-xs">No hay preguntas pendientes.</p>}
        </div>
      </Card>
      <Card title="Respondidas">
        <div className="flex flex-col gap-2">
          {answered.map((q) => (
            <div key={q.id} className="adm-row flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold">{q.question}</p>
                <p className="text-white/50 text-xs mt-1">{q.answer}</p>
              </div>
              <IconBtn onClick={() => remove(q.id)} label="Borrar" danger><Trash2 size={13} /></IconBtn>
            </div>
          ))}
          {answered.length === 0 && <p className="text-white/30 text-xs">Todavía no hay preguntas respondidas.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Feedback ──────────────────────────────────────────────────────────────
function FeedbackTab() {
  const { items } = useCollection<FeedbackItem>("feedback", [orderBy("createdAt", "desc")]);

  async function remove(id: string) {
    if (!confirm("¿Borrar este feedback?")) return;
    await deleteDoc(doc(db, "feedback", id));
  }

  return (
    <Card title={`Feedback recibido (${items.length})`} subtitle="Solo visible aquí — no hay página pública de listado.">
      <div className="flex flex-col gap-2">
        {items.map((f) => (
          <div key={f.id} className="adm-row flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-white text-sm font-semibold">{f.name || "Anónimo"}</p>
                {f.category && (
                  <span className="rounded-full px-2 py-0.5" style={{ fontSize: 10, background: "rgba(124,77,255,0.15)", color: "#a78bfa" }}>
                    {FEEDBACK_CATEGORY_LABELS[f.category]}
                  </span>
                )}
              </div>
              <p className="text-white/50 text-xs mt-1">{f.message}</p>
            </div>
            <IconBtn onClick={() => remove(f.id)} label="Borrar" danger><Trash2 size={13} /></IconBtn>
          </div>
        ))}
        {items.length === 0 && <p className="text-white/30 text-xs">Todavía no hay feedback.</p>}
      </div>
    </Card>
  );
}

// ── Noticias ──────────────────────────────────────────────────────────────
function NoticiasTab() {
  const { items } = useCollection<NewsItem>("news", [orderBy("createdAt", "desc")]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [category, setCategory] = useState<NewsCategory>("tecnologia");
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  function reset() {
    setTitle("");
    setSummary("");
    setSourceUrl("");
    setCategory("tecnologia");
    setImageUrl([]);
    setEditingId(null);
  }

  function startEdit(n: NewsItem) {
    setEditingId(n.id);
    setTitle(n.title);
    setSummary(n.summary);
    setSourceUrl(n.sourceUrl);
    setCategory(n.category);
    setImageUrl(n.imageUrl ? [n.imageUrl] : []);
  }

  async function save() {
    if (!title.trim() || !summary.trim() || !sourceUrl.trim()) return;
    setSaving(true);
    const data = {
      title: title.trim(),
      summary: summary.trim(),
      sourceUrl: sourceUrl.trim(),
      category,
      imageUrl: imageUrl[0] || "",
    };
    if (editingId) {
      await updateDoc(doc(db, "news", editingId), data);
    } else {
      await addDoc(collection(db, "news"), { ...data, createdAt: serverTimestamp() });
    }
    setSaving(false);
    setMsg("Guardado ✓");
    setTimeout(() => setMsg(""), 2000);
    reset();
  }

  async function remove(id: string) {
    if (!confirm("¿Borrar esta noticia?")) return;
    await deleteDoc(doc(db, "news", id));
  }

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold mb-4">{msg}</p>}
      <Card title={editingId ? "Editar noticia" : "Nueva noticia"} subtitle="Curada por ti — se muestra en /noticias, filtrable por categoría.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Título">
            <input className={inputClass()} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Categoría">
            <select className={inputClass()} value={category} onChange={(e) => setCategory(e.target.value as NewsCategory)}>
              {(Object.keys(NEWS_CATEGORY_LABELS) as NewsCategory[]).map((c) => (
                <option key={c} value={c}>{NEWS_CATEGORY_LABELS[c]}</option>
              ))}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Resumen">
              <textarea className={inputClass()} rows={3} value={summary} onChange={(e) => setSummary(e.target.value)} />
            </Field>
          </div>
          <Field label="Link a la fuente">
            <input className={inputClass()} value={sourceUrl} onChange={(e) => setSourceUrl(e.target.value)} />
          </Field>
          <Field label="Imagen (opcional)">
            <ImageUploadField value={imageUrl} onChange={setImageUrl} />
          </Field>
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={save} disabled={saving} className="adm-btn adm-btn-primary">
            {editingId ? "Guardar cambios" : "Publicar noticia"}
          </button>
          {editingId && (
            <button onClick={reset} className="text-white/50 text-xs font-semibold">
              Cancelar
            </button>
          )}
        </div>
      </Card>

      <Card title="Noticias">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((n) => (
            <div key={n.id} className="adm-row flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-white text-sm font-semibold truncate">{n.title}</p>
                <p style={{ color: "#00e5ff", fontSize: 11 }}>{NEWS_CATEGORY_LABELS[n.category]}</p>
                <p className="text-white/40 text-xs truncate mt-0.5">{n.summary}</p>
              </div>
              <div className="flex gap-1.5 flex-shrink-0">
                <IconBtn onClick={() => startEdit(n)} label="Editar"><Pencil size={13} /></IconBtn>
                <IconBtn onClick={() => remove(n.id)} label="Borrar" danger><Trash2 size={13} /></IconBtn>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-white/30 text-xs">Todavía no hay noticias.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Chips NFC ─────────────────────────────────────────────────────────────
const NFC_REDIRECT_BASE = "https://technocrazy.org/c";
// Sin 0/O/1/I/l para que nadie confunda caracteres al transcribir un código a mano.
const CODE_CHARS = "abcdefghjkmnpqrstuvwxyz23456789";

function randomChipCode(len = 6) {
  let out = "";
  for (let i = 0; i < len; i++) out += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return out;
}

async function generateUniqueChipCode(): Promise<string> {
  for (let i = 0; i < 8; i++) {
    const code = randomChipCode();
    const snap = await getDocs(query(collection(db, "nfcChips"), where("code", "==", code), fsLimit(1)));
    if (snap.empty) return code;
  }
  throw new Error("No se pudo generar un código único, intenta de nuevo.");
}

function last14Days(): string[] {
  const days: string[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

const TYPE_ICONS: Record<NfcChipType, LucideIcon> = {
  url: Link2, app: Smartphone, video: Video, search: Search, social: Share2,
  text: FileText, tel: Phone, sms: MessageSquare, email: Mail, whatsapp: MessageCircle,
  location: MapPin, contact: UserPlus, bitcoin: Coins, wifi: Wifi,
};

function fieldsValid(type: NfcChipType, fields: Record<string, string>) {
  return getTypeDef(type).fields.every((f) => f.optional || (fields[f.key] || "").trim());
}

function previewText(type: NfcChipType, fields: Record<string, string>): string {
  const target = resolveChipTarget(type, fields);
  if (target.kind === "redirect") return target.url ? `Se abrirá: ${target.url}` : "Completa los datos para ver la vista previa…";
  if (target.kind === "vcard") return fields.name ? `Se guardará el contacto "${fields.name}" en la agenda del teléfono` : "Completa el nombre para ver la vista previa…";
  if (target.title.startsWith("Red WiFi")) return fields.ssid ? `Mostrará la red "${fields.ssid}" para conectarse manualmente` : "Completa el SSID para ver la vista previa…";
  return target.body ? `Mostrará el mensaje: "${target.body}"` : "Escribe el texto para ver la vista previa…";
}

function parseDevice(ua: string): string {
  if (!ua) return "—";
  if (/iphone/i.test(ua)) return "iPhone";
  if (/ipad/i.test(ua)) return "iPad";
  if (/android/i.test(ua)) return "Android";
  if (/windows/i.test(ua)) return "Windows";
  if (/macintosh/i.test(ua)) return "Mac";
  return "Otro";
}

// ── Selector visual de tipo + formulario dinámico (compartido crear/editar) ─
function TypePicker({ value, onChange }: { value: NfcChipType; onChange: (t: NfcChipType) => void }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
      {NFC_TYPES.map((t) => {
        const Icon = TYPE_ICONS[t.type];
        const active = value === t.type;
        return (
          <button
            key={t.type}
            type="button"
            onClick={() => onChange(t.type)}
            className="flex flex-col items-center gap-1.5 text-center transition-colors"
            style={{
              padding: "12px 8px",
              borderRadius: 12,
              background: active ? "rgba(41,121,255,0.14)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${active ? "rgba(41,121,255,0.5)" : "rgba(255,255,255,0.08)"}`,
            }}
          >
            <Icon size={18} style={{ color: active ? "#2979ff" : "rgba(255,255,255,0.55)" }} />
            <span style={{ fontSize: 11, fontWeight: active ? 700 : 500, color: active ? "#fff" : "rgba(255,255,255,0.6)" }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function DynamicFields({ type, fields, onChange }: { type: NfcChipType; fields: Record<string, string>; onChange: (fields: Record<string, string>) => void }) {
  const def = getTypeDef(type);
  function set(key: string, val: string) {
    onChange({ ...fields, [key]: val });
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {def.fields.map((f) => (
        <div key={f.key} className={f.type === "textarea" ? "sm:col-span-2" : undefined}>
          <Field label={f.optional ? `${f.label} (opcional)` : f.label}>
            {f.type === "textarea" ? (
              <textarea className={inputClass()} rows={2} placeholder={f.placeholder} value={fields[f.key] || ""} onChange={(e) => set(f.key, e.target.value)} />
            ) : f.type === "select" ? (
              <select className={inputClass()} value={fields[f.key] || f.options?.[0]?.value || ""} onChange={(e) => set(f.key, e.target.value)}>
                {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ) : (
              <input
                className={inputClass()}
                type={f.type === "tel" || f.type === "email" || f.type === "url" ? f.type : "text"}
                placeholder={f.placeholder}
                value={fields[f.key] || ""}
                onChange={(e) => set(f.key, e.target.value)}
              />
            )}
          </Field>
        </div>
      ))}
    </div>
  );
}

function PhonePreview({ type, fields }: { type: NfcChipType; fields: Record<string, string> }) {
  const Icon = TYPE_ICONS[type];
  return (
    <div
      className="flex flex-col items-center text-center flex-shrink-0"
      style={{ width: 168, padding: "18px 14px", borderRadius: 22, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div style={{ width: 34, height: 4, borderRadius: 4, background: "rgba(255,255,255,0.15)", marginBottom: 14 }} />
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#2979ff,#7c4dff)", marginBottom: 10 }}
      >
        <Icon size={20} color="#fff" />
      </div>
      <p className="text-white/85" style={{ fontSize: 11, lineHeight: 1.5 }}>{previewText(type, fields)}</p>
      <p className="text-white/25 mt-3" style={{ fontSize: 9, letterSpacing: "0.04em" }}>AL TOCAR EL CHIP</p>
    </div>
  );
}

function ChipStats({ chipId }: { chipId: string }) {
  const [scans, setScans] = useState<NfcScan[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const snap = await getDocs(
          query(collection(db, "nfcChips", chipId, "scans"), orderBy("timestamp", "desc"), fsLimit(300))
        );
        if (cancelled) return;
        setScans(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as NfcScan));
      } catch {
        if (!cancelled) setError("No se pudieron cargar las estadísticas.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chipId]);

  if (error) return <p className="text-red-400 text-xs mt-3">{error}</p>;
  if (!scans) return <p className="text-white/40 text-xs mt-3">Cargando estadísticas…</p>;

  const days = last14Days();
  const counts = Object.fromEntries(days.map((d) => [d, 0])) as Record<string, number>;
  for (const s of scans) {
    const day = s.timestamp?.toDate().toISOString().slice(0, 10);
    if (day && day in counts) counts[day]++;
  }
  const max = Math.max(1, ...Object.values(counts));
  const last = scans[0];
  const totalLabel = scans.length === 300 ? "300+" : String(scans.length);

  const cityCounts = new Map<string, number>();
  for (const s of scans) {
    const place = [s.city, s.country].filter(Boolean).join(", ") || "Desconocida";
    cityCounts.set(place, (cityCounts.get(place) || 0) + 1);
  }
  const topCities = [...cityCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);

  return (
    <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="flex items-center gap-5 mb-3 flex-wrap">
        <div>
          <p className="text-white font-bold" style={{ fontSize: 18 }}>{totalLabel}</p>
          <p className="text-white/40" style={{ fontSize: 10 }}>Escaneos totales</p>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">
            {last ? last.timestamp?.toDate().toLocaleString("es-ES", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "—"}
          </p>
          <p className="text-white/40" style={{ fontSize: 10 }}>Último escaneo</p>
        </div>
        {last?.city || last?.country ? (
          <div>
            <p className="text-white font-semibold text-sm">{[last.city, last.country].filter(Boolean).join(", ")}</p>
            <p className="text-white/40" style={{ fontSize: 10 }}>Última ubicación aprox.</p>
          </div>
        ) : null}
      </div>

      <p className="text-white/40 mb-1.5" style={{ fontSize: 10 }}>Escaneos por día (últimos 14 días)</p>
      <div className="flex items-end gap-1" style={{ height: 60 }}>
        {days.map((d) => (
          <div key={d} className="flex-1 flex flex-col items-center justify-end h-full" title={`${d}: ${counts[d]}`}>
            <div
              style={{
                width: "100%",
                height: `${Math.max(3, (counts[d] / max) * 100)}%`,
                background: counts[d] > 0 ? "linear-gradient(180deg,#2979ff,#7c4dff)" : "rgba(255,255,255,0.06)",
                borderRadius: 3,
              }}
            />
          </div>
        ))}
      </div>

      {topCities.length > 0 && (
        <div className="mt-4">
          <p className="text-white/40 mb-1.5" style={{ fontSize: 10 }}>Lugares más frecuentes</p>
          <div className="flex flex-col gap-1">
            {topCities.map(([place, n]) => (
              <div key={place} className="flex items-center justify-between" style={{ fontSize: 12 }}>
                <span className="text-white/70">{place}</span>
                <span className="text-white/40">{n}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {scans.length > 0 && (
        <div className="mt-4">
          <p className="text-white/40 mb-1.5" style={{ fontSize: 10 }}>Últimos escaneos</p>
          <div className="flex flex-col gap-1.5">
            {scans.slice(0, 8).map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-2 adm-row" style={{ padding: "8px 12px" }}>
                <span className="text-white/70" style={{ fontSize: 11.5 }}>
                  {s.timestamp?.toDate().toLocaleString("es-ES", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
                </span>
                <span className="text-white/40 truncate" style={{ fontSize: 11.5 }}>{[s.city, s.country].filter(Boolean).join(", ") || "—"}</span>
                <span className="text-white/40 flex-shrink-0" style={{ fontSize: 11.5 }}>{parseDevice(s.userAgent)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {scans.length === 0 && <p className="text-white/30 text-xs mt-2">Todavía no tiene escaneos.</p>}
    </div>
  );
}

// Web NFC (NDEFReader) todavía no está en los tipos DOM estándar de TS —
// solo lo soporta Chrome en Android (ej. el Pixel 8), nunca desktop/iOS.
type NdefWriter = { write: (message: { records: { recordType: string; data: string }[] }) => Promise<void> };
declare global {
  interface Window {
    NDEFReader?: new () => NdefWriter;
  }
}

function NfcChipsTab() {
  const { items: chips } = useCollection<NfcChip>("nfcChips", [orderBy("createdAt", "desc")]);
  const [label, setLabel] = useState("");
  const [type, setType] = useState<NfcChipType>("url");
  const [fields, setFields] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState("");
  const [editType, setEditType] = useState<NfcChipType>("url");
  const [editFields, setEditFields] = useState<Record<string, string>>({});
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [writingId, setWritingId] = useState<string | null>(null);

  function flash(text: string) {
    setMsg(text);
    setTimeout(() => setMsg(""), 4000);
  }

  async function writeChip(c: NfcChip) {
    if (typeof window === "undefined" || !window.NDEFReader) {
      flash("Este navegador no puede escribir chips NFC. Abre este panel en Chrome de tu Pixel 8 (o Android con NFC) para programar directo desde aquí.");
      return;
    }
    setWritingId(c.id);
    flash("Acerca el chip a la parte trasera del teléfono…");
    try {
      const ndef = new window.NDEFReader();
      await ndef.write({ records: [{ recordType: "url", data: `${NFC_REDIRECT_BASE}/${c.code}` }] });
      flash(`Chip "${c.label}" programado ✓`);
    } catch (e) {
      flash(e instanceof Error ? `No se pudo programar: ${e.message}` : "No se pudo programar el chip. Acércalo más e intenta de nuevo.");
    } finally {
      setWritingId(null);
    }
  }

  async function createChip() {
    if (!label.trim() || !fieldsValid(type, fields)) return;
    setSaving(true);
    try {
      const code = await generateUniqueChipCode();
      const target = resolveChipTarget(type, fields);
      await addDoc(collection(db, "nfcChips"), {
        code,
        label: label.trim(),
        type,
        fields,
        destinationUrl: target.kind === "redirect" ? target.url : "",
        active: true,
        createdAt: serverTimestamp(),
      });
      setLabel("");
      setFields({});
      flash(`Chip creado ✓ — link: ${NFC_REDIRECT_BASE}/${code}`);
    } catch (e) {
      flash(e instanceof Error ? e.message : "No se pudo crear el chip.");
    } finally {
      setSaving(false);
    }
  }

  function startEdit(c: NfcChip) {
    setEditingId(c.id);
    setEditLabel(c.label);
    setEditType(c.type || "url");
    setEditFields(c.fields || (c.destinationUrl ? { url: c.destinationUrl } : {}));
  }

  async function saveEdit() {
    if (!editingId || !editLabel.trim() || !fieldsValid(editType, editFields)) return;
    const target = resolveChipTarget(editType, editFields);
    await updateDoc(doc(db, "nfcChips", editingId), {
      label: editLabel.trim(),
      type: editType,
      fields: editFields,
      destinationUrl: target.kind === "redirect" ? target.url : "",
    });
    setEditingId(null);
    flash("Guardado ✓");
  }

  async function toggleActive(c: NfcChip) {
    await updateDoc(doc(db, "nfcChips", c.id), { active: !c.active });
  }

  async function remove(c: NfcChip) {
    if (!confirm(`¿Borrar el chip "${c.label}"? También se borra su historial de escaneos.`)) return;
    const scansSnap = await getDocs(collection(db, "nfcChips", c.id, "scans"));
    await Promise.all(scansSnap.docs.map((d) => deleteDoc(d.ref)));
    await deleteDoc(doc(db, "nfcChips", c.id));
  }

  async function copyLink(c: NfcChip) {
    await navigator.clipboard.writeText(`${NFC_REDIRECT_BASE}/${c.code}`);
    setCopiedId(c.id);
    setTimeout(() => setCopiedId(null), 1500);
  }

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold mb-4 break-all">{msg}</p>}

      <Card
        title="Nuevo chip"
        subtitle={`Elige qué debe pasar al tocar el chip, completa los datos y pulsa "Generar chip". Desde Chrome en tu Pixel 8 (u otro Android) pulsa después "Programar chip" para escribirlo directo en el físico, sin abrir NFC Tools — y puedes cambiar el destino aquí cuando quieras sin volver a tocarlo.`}
      >
        <TypePicker value={type} onChange={(t) => { setType(t); setFields({}); }} />
        <div className="flex flex-col sm:flex-row gap-5 mt-2">
          <div className="flex-1 min-w-0">
            <div className="mt-2">
              <Field label="Nombre / etiqueta (para identificarlo tú)">
                <input className={inputClass()} placeholder="Ej. Tarjeta de mesa — Local Rockford" value={label} onChange={(e) => setLabel(e.target.value)} />
              </Field>
            </div>
            <DynamicFields type={type} fields={fields} onChange={setFields} />
          </div>
          <PhonePreview type={type} fields={fields} />
        </div>
        <button onClick={createChip} disabled={saving || !label.trim() || !fieldsValid(type, fields)} className="adm-btn adm-btn-primary mt-4">
          {saving ? "Generando…" : "Generar chip"}
        </button>
      </Card>

      <Card title={`Chips (${chips.length})`}>
        <div className="flex flex-col gap-2.5">
          {chips.map((c) => {
            const cType = c.type || "url";
            const TypeIcon = TYPE_ICONS[cType] || Link2;
            const cFields = c.fields || (c.destinationUrl ? { url: c.destinationUrl } : {});
            return (
            <div key={c.id} className="adm-row">
              {editingId === c.id ? (
                <div>
                  <Field label="Nombre / etiqueta">
                    <input className={inputClass()} value={editLabel} onChange={(e) => setEditLabel(e.target.value)} />
                  </Field>
                  <div className="mt-3">
                    <TypePicker value={editType} onChange={(t) => { setEditType(t); setEditFields({}); }} />
                  </div>
                  <DynamicFields type={editType} fields={editFields} onChange={setEditFields} />
                  <div className="flex gap-2 mt-3">
                    <button onClick={saveEdit} disabled={!editLabel.trim() || !fieldsValid(editType, editFields)} className="adm-btn adm-btn-primary adm-btn-sm">Guardar cambios</button>
                    <button onClick={() => setEditingId(null)} className="text-white/50 text-xs font-semibold">Cancelar</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="min-w-0 flex-1 flex items-start gap-3">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(41,121,255,0.14)" }}
                    >
                      <TypeIcon size={15} style={{ color: "#2979ff" }} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-white text-sm font-semibold">{c.label}</p>
                        <span className="rounded-full px-2 py-0.5" style={{ fontSize: 9.5, fontWeight: 700, background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
                          {getTypeDef(cType).label.toUpperCase()}
                        </span>
                        <button
                          onClick={() => toggleActive(c)}
                          title={c.active ? "Activo — clic para desactivar" : "Inactivo — clic para reactivar"}
                          className="flex items-center gap-1 flex-shrink-0"
                          style={{
                            fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "3px 8px",
                            background: c.active ? "rgba(74,222,128,0.14)" : "rgba(239,68,68,0.14)",
                            border: `1px solid ${c.active ? "rgba(74,222,128,0.35)" : "rgba(239,68,68,0.35)"}`,
                            color: c.active ? "#4ade80" : "#ff8080",
                          }}
                        >
                          <Power size={10} />
                          {c.active ? "ACTIVO" : "INACTIVO"}
                        </button>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <code className="text-blue-300" style={{ fontSize: 11.5 }}>{NFC_REDIRECT_BASE}/{c.code}</code>
                        <button onClick={() => copyLink(c)} title="Copiar link" className="text-white/40 hover:text-white/80">
                          {copiedId === c.id ? <Check size={12} /> : <Copy size={12} />}
                        </button>
                      </div>
                      <p className="text-white/40 mt-1 truncate" style={{ fontSize: 11 }}>{previewText(cType, cFields)}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0 items-center">
                    <button
                      onClick={() => writeChip(c)}
                      disabled={writingId === c.id}
                      className="adm-btn adm-btn-primary adm-btn-sm flex items-center gap-1.5"
                      title="Escribe el link directo en el chip físico usando Chrome en Android (Web NFC) — sin abrir NFC Tools"
                    >
                      <Smartphone size={13} />
                      {writingId === c.id ? "Acerca el chip…" : "Programar chip"}
                    </button>
                    <IconBtn onClick={() => setExpandedId(expandedId === c.id ? null : c.id)} label="Ver estadísticas"><BarChart3 size={13} /></IconBtn>
                    <IconBtn onClick={() => startEdit(c)} label="Editar"><Pencil size={13} /></IconBtn>
                    <IconBtn onClick={() => remove(c)} label="Borrar" danger><Trash2 size={13} /></IconBtn>
                  </div>
                </div>
              )}
              {expandedId === c.id && editingId !== c.id && <ChipStats chipId={c.id} />}
            </div>
            );
          })}
          {chips.length === 0 && <p className="text-white/30 text-xs">Todavía no hay chips registrados.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Config (Servicios/Contacto/CTA/Menú — ya existente, movido tal cual) ──
const SERVICE_LABELS = [
  { id: "design", label: "Diseño Gráfico" },
  { id: "web", label: "Páginas Web" },
  { id: "apps", label: "Apps Móviles" },
  { id: "systems", label: "Sistemas Automatizados" },
  { id: "ai", label: "Inteligencia Artificial" },
  { id: "robot", label: "Robot de Redes Sociales" },
];

type Contact = { instagram: string; website: string; email: string; whatsapp: string };
type Cta = { es: string; en: string };

function ConfigTab() {
  const [loadingData, setLoadingData] = useState(true);
  const [services, setServices] = useState<Record<string, ServiceOverride>>({});
  const [contact, setContact] = useState<Contact>({ instagram: "", website: "", email: "", whatsapp: "" });
  const [cta, setCta] = useState<Cta>({ es: "", en: "" });
  const [navLinks, setNavLinks] = useState<NavLinkOverride[]>([]);
  const [savedMsg, setSavedMsg] = useState("");

  useEffect(() => {
    (async () => {
      setLoadingData(true);
      const snap = await getDoc(doc(db, "config", "site"));
      const data = snap.exists() ? snap.data() : {};

      // Los campos se prellenan con el texto que el sitio muestra HOY: si hay
      // un override guardado se usa ese, y si no, el original de lib/i18n.ts.
      // Antes quedaban vacíos cuando nunca se había guardado nada, y no había
      // forma de saber qué decía la tarjeta sin ir a mirarla al sitio.
      const saved: Record<string, ServiceOverride> = data.services || {};
      const merged: Record<string, ServiceOverride> = {};
      for (const s of SERVICE_LABELS) {
        const row = saved[s.id] ?? {};
        const baseES = translations.es.services.cards.find((c) => c.id === s.id);
        const baseEN = translations.en.services.cards.find((c) => c.id === s.id);
        merged[s.id] = {
          titleES: row.titleES || baseES?.title || "",
          titleEN: row.titleEN || baseEN?.title || "",
          descES: row.descES || baseES?.desc || "",
          descEN: row.descEN || baseEN?.desc || "",
          priceES: row.priceES || baseES?.price || "",
          priceNoteES: row.priceNoteES || baseES?.priceNote || "",
          priceEN: row.priceEN || baseEN?.price || "",
          priceNoteEN: row.priceNoteEN || baseEN?.priceNote || "",
        };
      }
      setServices(merged);
      setContact({
        instagram: data.contact?.instagram || "https://instagram.com/igTechnoCrazy",
        website: data.contact?.website || "https://technocrazy.org",
        email: data.contact?.email || "Rafaelpixel3004@gmail.com",
        whatsapp: data.contact?.whatsapp || "https://wa.me/17794318214",
      });
      setCta({ es: data.cta?.es || "Hablemos ⚡", en: data.cta?.en || "Let's Talk ⚡" });
      setNavLinks(
        data.navLinks?.length
          ? data.navLinks
          : [
              { href: "#inicio", labelES: "Inicio", labelEN: "Home", icon: "home" },
              { href: "#servicios", labelES: "Servicios", labelEN: "Services", icon: "layers" },
              { href: "#testimonios", labelES: "Testimonios", labelEN: "Testimonials", icon: "star" },
              { href: "#sobre-mi", labelES: "Sobre mí", labelEN: "About Me", icon: "user" },
              { href: "#proceso", labelES: "Proceso", labelEN: "Process", icon: "route" },
              { href: "/calendario", labelES: "Calendario", labelEN: "Calendar", icon: "calendar" },
              { href: "/propuesta-ia.html", labelES: "Propuesta IA", labelEN: "AI Proposal", icon: "bot" },
              { href: "/muro", labelES: "Perfil y Muro", labelEN: "Profile & Wall", icon: "user-circle" },
              { href: "/precios-productos", labelES: "Precios y Productos", labelEN: "Pricing & Products", icon: "dollar-sign" },
              { href: "/biblioteca", labelES: "Biblioteca", labelEN: "Library", icon: "book" },
              { href: "/galeria", labelES: "Galería", labelEN: "Gallery", icon: "images" },
              { href: "/testimonios", labelES: "Reseñas", labelEN: "Reviews", icon: "quote" },
              { href: "/preguntas", labelES: "Preguntas", labelEN: "Questions", icon: "help-circle" },
              { href: "/feedback", labelES: "Feedback", labelEN: "Feedback", icon: "lightbulb" },
              { href: "/noticias", labelES: "Noticias", labelEN: "News", icon: "newspaper" },
            ]
      );
      setLoadingData(false);
    })();
  }, []);

  async function save(partial: Record<string, unknown>) {
    await setDoc(doc(db, "config", "site"), partial, { merge: true });
    setSavedMsg("Guardado ✓");
    setTimeout(() => setSavedMsg(""), 2000);
  }

  async function saveServices() {
    // Como los campos vienen prellenados con el texto original, solo se guarda
    // lo que Rafael realmente cambió. Si un texto vuelve a ser igual al
    // original, se borra el override para que la tarjeta siga heredando de
    // lib/i18n.ts en vez de quedar congelada con una copia idéntica.
    const updates: Record<string, unknown> = {};

    const FIELD_SOURCE = {
      titleES: (id: string) => translations.es.services.cards.find((c) => c.id === id)?.title,
      titleEN: (id: string) => translations.en.services.cards.find((c) => c.id === id)?.title,
      descES: (id: string) => translations.es.services.cards.find((c) => c.id === id)?.desc,
      descEN: (id: string) => translations.en.services.cards.find((c) => c.id === id)?.desc,
      priceES: (id: string) => translations.es.services.cards.find((c) => c.id === id)?.price,
      priceEN: (id: string) => translations.en.services.cards.find((c) => c.id === id)?.price,
      priceNoteES: (id: string) => translations.es.services.cards.find((c) => c.id === id)?.priceNote,
      priceNoteEN: (id: string) => translations.en.services.cards.find((c) => c.id === id)?.priceNote,
    } as const;

    for (const s of SERVICE_LABELS) {
      const row = services[s.id];
      if (!row) continue;
      (Object.keys(FIELD_SOURCE) as (keyof typeof FIELD_SOURCE)[]).forEach((field) => {
        const val = (row[field] ?? "").trim();
        const original = (FIELD_SOURCE[field](s.id) ?? "").trim();
        const key = `services.${s.id}.${field}`;
        if (!val || val === original) updates[key] = deleteField();
        else updates[key] = val;
      });
    }

    if (Object.keys(updates).length === 0) return;
    await setDoc(doc(db, "config", "site"), {}, { merge: true }); // asegura que el doc exista
    await updateDoc(doc(db, "config", "site"), updates);
    setSavedMsg("Guardado ✓");
    setTimeout(() => setSavedMsg(""), 2000);
  }

  function addNavLink() {
    setNavLinks((prev) => [...prev, { href: "/", labelES: "Nuevo enlace", labelEN: "New link", icon: "home" }]);
  }
  function removeNavLink(i: number) {
    setNavLinks((prev) => prev.filter((_, idx) => idx !== i));
  }

  if (loadingData) return <p className="text-white/50 text-sm">Cargando…</p>;

  return (
    <>
      {savedMsg && <p className="text-green-400 text-xs font-semibold mb-4">{savedMsg}</p>}

      <Card title="Servicios" subtitle="Título, descripción y precio de cada tarjeta de la sección Servicios (página de inicio), en español e inglés. Los campos muestran lo que el sitio dice ahora mismo — cambia el que quieras y pulsa Guardar.">
        <div className="flex flex-col gap-5">
          {SERVICE_LABELS.map((s) => (
            <div key={s.id} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-white font-semibold text-sm mb-3">{s.label}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field label="Título (ES)">
                  <input
                    className={inputClass()}
                    value={services[s.id]?.titleES || ""}
                    onChange={(e) => setServices((prev) => ({ ...prev, [s.id]: { ...prev[s.id], titleES: e.target.value } }))}
                  />
                </Field>
                <Field label="Título (EN)">
                  <input
                    className={inputClass()}
                    value={services[s.id]?.titleEN || ""}
                    onChange={(e) => setServices((prev) => ({ ...prev, [s.id]: { ...prev[s.id], titleEN: e.target.value } }))}
                  />
                </Field>
                <Field label="Descripción (ES)">
                  <textarea
                    className={inputClass()}
                    rows={2}
                    value={services[s.id]?.descES || ""}
                    onChange={(e) => setServices((prev) => ({ ...prev, [s.id]: { ...prev[s.id], descES: e.target.value } }))}
                  />
                </Field>
                <Field label="Descripción (EN)">
                  <textarea
                    className={inputClass()}
                    rows={2}
                    value={services[s.id]?.descEN || ""}
                    onChange={(e) => setServices((prev) => ({ ...prev, [s.id]: { ...prev[s.id], descEN: e.target.value } }))}
                  />
                </Field>
                <Field label="Precio (ES)">
                  <input
                    className={inputClass()}
                    value={services[s.id]?.priceES || ""}
                    onChange={(e) => setServices((prev) => ({ ...prev, [s.id]: { ...prev[s.id], priceES: e.target.value } }))}
                  />
                </Field>
                <Field label="Nota de precio (ES)">
                  <input
                    className={inputClass()}
                    value={services[s.id]?.priceNoteES || ""}
                    onChange={(e) => setServices((prev) => ({ ...prev, [s.id]: { ...prev[s.id], priceNoteES: e.target.value } }))}
                  />
                </Field>
                <Field label="Precio (EN)">
                  <input
                    className={inputClass()}
                    value={services[s.id]?.priceEN || ""}
                    onChange={(e) => setServices((prev) => ({ ...prev, [s.id]: { ...prev[s.id], priceEN: e.target.value } }))}
                  />
                </Field>
                <Field label="Nota de precio (EN)">
                  <input
                    className={inputClass()}
                    value={services[s.id]?.priceNoteEN || ""}
                    onChange={(e) => setServices((prev) => ({ ...prev, [s.id]: { ...prev[s.id], priceNoteEN: e.target.value } }))}
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
        <button onClick={saveServices} className="adm-btn adm-btn-primary mt-5">
          Guardar servicios
        </button>
        <p className="text-white/30 mt-2" style={{ fontSize: 11 }}>
          Los campos vacíos no se guardan — así nunca se borra algo ya guardado sin querer.
        </p>
      </Card>

      <Card title="Contacto y redes">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Instagram (URL)"><input className={inputClass()} value={contact.instagram} onChange={(e) => setContact({ ...contact, instagram: e.target.value })} /></Field>
          <Field label="Sitio web (URL)"><input className={inputClass()} value={contact.website} onChange={(e) => setContact({ ...contact, website: e.target.value })} /></Field>
          <Field label="Correo"><input className={inputClass()} value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} /></Field>
          <Field label="WhatsApp (URL wa.me)"><input className={inputClass()} value={contact.whatsapp} onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })} /></Field>
        </div>
        <button onClick={() => save({ contact })} className="adm-btn adm-btn-primary mt-5">
          Guardar contacto
        </button>
      </Card>

      <Card title='Texto del botón principal ("Hablemos")'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Español"><input className={inputClass()} value={cta.es} onChange={(e) => setCta({ ...cta, es: e.target.value })} /></Field>
          <Field label="Inglés"><input className={inputClass()} value={cta.en} onChange={(e) => setCta({ ...cta, en: e.target.value })} /></Field>
        </div>
        <button onClick={() => save({ cta })} className="adm-btn adm-btn-primary mt-5">
          Guardar botón
        </button>
      </Card>

      <Card title="Menú de navegación" subtitle="Enlace, texto ES/EN. Puedes agregar o quitar páginas del menú.">
        <div className="flex flex-col gap-3">
          {navLinks.map((l, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto] gap-2 items-center">
              <input
                className={inputClass()}
                value={l.href}
                onChange={(e) => setNavLinks((prev) => prev.map((x, idx) => (idx === i ? { ...x, href: e.target.value } : x)))}
                placeholder="/ruta o #ancla"
                style={{ fontFamily: "monospace", fontSize: 12 }}
              />
              <input
                className={inputClass()}
                value={l.labelES}
                onChange={(e) => setNavLinks((prev) => prev.map((x, idx) => (idx === i ? { ...x, labelES: e.target.value } : x)))}
                placeholder="Texto en español"
              />
              <input
                className={inputClass()}
                value={l.labelEN}
                onChange={(e) => setNavLinks((prev) => prev.map((x, idx) => (idx === i ? { ...x, labelEN: e.target.value } : x)))}
                placeholder="Texto en inglés"
              />
              <IconBtn onClick={() => removeNavLink(i)} label="Quitar enlace" danger><Trash2 size={13} /></IconBtn>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <button onClick={addNavLink} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#2979ff" }}>
            <Plus size={14} /> Agregar enlace
          </button>
        </div>
        <button onClick={() => save({ navLinks })} className="adm-btn adm-btn-primary mt-5">
          Guardar menú
        </button>
      </Card>
    </>
  );
}

// ── Contratos y Recibos (ya existente, movido tal cual) ──────────────────
function todayISO() {
  return new Date().toISOString().slice(0, 10);
}
function docNumber(prefix: string) {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${prefix}-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}
const EMPTY_CONTRACT: ContractData = {
  number: "", clientName: "", clientEmail: "", clientPhone: "", service: "", description: "",
  amount: "", currency: "USD", paymentTerms: "50% de anticipo, 50% al finalizar", startDate: todayISO(), deliveryDate: "", notes: "",
};
const EMPTY_RECEIPT: ReceiptData = {
  number: "", clientName: "", clientEmail: "", concept: "", amount: "", currency: "USD", paymentMethod: "Transferencia", date: todayISO(), notes: "",
};
type StoredContract = ContractData & { id: string; createdAt?: Timestamp };
type StoredReceipt = ReceiptData & { id: string; createdAt?: Timestamp };
function formatDate(ts?: Timestamp) {
  if (!ts) return "";
  return ts.toDate().toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function ContratosTab() {
  const { items: contracts } = useCollection<StoredContract>("contracts", [orderBy("createdAt", "desc")]);
  const { items: receipts } = useCollection<StoredReceipt>("receipts", [orderBy("createdAt", "desc")]);
  const [contract, setContract] = useState<ContractData>(EMPTY_CONTRACT);
  const [receipt, setReceipt] = useState<ReceiptData>(EMPTY_RECEIPT);
  const [msg, setMsg] = useState("");

  async function handleGenerateContract() {
    if (!contract.clientName.trim() || !contract.service.trim() || !contract.amount.trim()) {
      setMsg("Completa al menos cliente, servicio y monto.");
      setTimeout(() => setMsg(""), 3000);
      return;
    }
    const number = docNumber("CONT");
    const data: ContractData = { ...contract, number };
    generateContractPDF(data).save(`Contrato_${number}_${data.clientName.replace(/\s+/g, "_")}.pdf`);
    await addDoc(collection(db, "contracts"), { ...data, createdAt: serverTimestamp() });
    setContract({ ...EMPTY_CONTRACT, startDate: todayISO() });
    setMsg("Contrato generado y guardado ✓");
    setTimeout(() => setMsg(""), 3000);
  }

  async function handleGenerateReceipt() {
    if (!receipt.clientName.trim() || !receipt.concept.trim() || !receipt.amount.trim()) {
      setMsg("Completa al menos cliente, concepto y monto.");
      setTimeout(() => setMsg(""), 3000);
      return;
    }
    const number = docNumber("REC");
    const data: ReceiptData = { ...receipt, number };
    generateReceiptPDF(data).save(`Recibo_${number}_${data.clientName.replace(/\s+/g, "_")}.pdf`);
    await addDoc(collection(db, "receipts"), { ...data, createdAt: serverTimestamp() });
    setReceipt({ ...EMPTY_RECEIPT, date: todayISO() });
    setMsg("Recibo generado y guardado ✓");
    setTimeout(() => setMsg(""), 3000);
  }

  function redownloadContract(c: StoredContract) {
    generateContractPDF(c).save(`Contrato_${c.number}_${c.clientName.replace(/\s+/g, "_")}.pdf`);
  }
  function redownloadReceipt(r: StoredReceipt) {
    generateReceiptPDF(r).save(`Recibo_${r.number}_${r.clientName.replace(/\s+/g, "_")}.pdf`);
  }

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold mb-4">{msg}</p>}

      <Card title="Nuevo contrato" subtitle="Genera un contrato de prestación de servicios en PDF y descárgalo para enviarlo al cliente.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre del cliente"><input className={inputClass()} value={contract.clientName} onChange={(e) => setContract({ ...contract, clientName: e.target.value })} /></Field>
          <Field label="Correo del cliente"><input className={inputClass()} value={contract.clientEmail} onChange={(e) => setContract({ ...contract, clientEmail: e.target.value })} /></Field>
          <Field label="Teléfono del cliente"><input className={inputClass()} value={contract.clientPhone} onChange={(e) => setContract({ ...contract, clientPhone: e.target.value })} /></Field>
          <Field label="Servicio"><input className={inputClass()} placeholder="Ej. Página web, App móvil…" value={contract.service} onChange={(e) => setContract({ ...contract, service: e.target.value })} /></Field>
          <div className="sm:col-span-2">
            <Field label="Descripción / alcance del trabajo"><textarea className={inputClass()} rows={3} value={contract.description} onChange={(e) => setContract({ ...contract, description: e.target.value })} /></Field>
          </div>
          <Field label="Monto"><input className={inputClass()} placeholder="Ej. 500" value={contract.amount} onChange={(e) => setContract({ ...contract, amount: e.target.value })} /></Field>
          <Field label="Moneda"><input className={inputClass()} value={contract.currency} onChange={(e) => setContract({ ...contract, currency: e.target.value })} /></Field>
          <div className="sm:col-span-2">
            <Field label="Condiciones de pago"><input className={inputClass()} value={contract.paymentTerms} onChange={(e) => setContract({ ...contract, paymentTerms: e.target.value })} /></Field>
          </div>
          <Field label="Fecha de inicio"><input type="date" className={inputClass()} value={contract.startDate} onChange={(e) => setContract({ ...contract, startDate: e.target.value })} /></Field>
          <Field label="Entrega estimada"><input type="date" className={inputClass()} value={contract.deliveryDate} onChange={(e) => setContract({ ...contract, deliveryDate: e.target.value })} /></Field>
          <div className="sm:col-span-2">
            <Field label="Cláusulas adicionales / notas (opcional)"><textarea className={inputClass()} rows={2} value={contract.notes} onChange={(e) => setContract({ ...contract, notes: e.target.value })} /></Field>
          </div>
        </div>
        <button onClick={handleGenerateContract} className="adm-btn adm-btn-primary mt-5">
          Generar PDF del contrato
        </button>

        {contracts.length > 0 && (
          <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-white/40 text-xs mb-2">Historial de contratos</p>
            <div className="flex flex-col gap-1.5 max-h-60 overflow-y-auto">
              {contracts.map((c) => (
                <div key={c.id} className="adm-row flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{c.clientName} — {c.service}</p>
                    <p className="text-white/40" style={{ fontSize: 11 }}>{c.number} · {formatDate(c.createdAt)} · {c.amount} {c.currency}</p>
                  </div>
                  <button onClick={() => redownloadContract(c)} className="text-blue-400 hover:text-blue-300 text-xs font-semibold flex-shrink-0">
                    Descargar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      <Card title="Nuevo recibo" subtitle="Genera un recibo de pago en PDF para entregar al cliente.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre del cliente"><input className={inputClass()} value={receipt.clientName} onChange={(e) => setReceipt({ ...receipt, clientName: e.target.value })} /></Field>
          <Field label="Correo del cliente"><input className={inputClass()} value={receipt.clientEmail} onChange={(e) => setReceipt({ ...receipt, clientEmail: e.target.value })} /></Field>
          <div className="sm:col-span-2">
            <Field label="Concepto"><input className={inputClass()} placeholder="Ej. Anticipo página web" value={receipt.concept} onChange={(e) => setReceipt({ ...receipt, concept: e.target.value })} /></Field>
          </div>
          <Field label="Monto"><input className={inputClass()} placeholder="Ej. 250" value={receipt.amount} onChange={(e) => setReceipt({ ...receipt, amount: e.target.value })} /></Field>
          <Field label="Moneda"><input className={inputClass()} value={receipt.currency} onChange={(e) => setReceipt({ ...receipt, currency: e.target.value })} /></Field>
          <Field label="Método de pago"><input className={inputClass()} value={receipt.paymentMethod} onChange={(e) => setReceipt({ ...receipt, paymentMethod: e.target.value })} /></Field>
          <Field label="Fecha"><input type="date" className={inputClass()} value={receipt.date} onChange={(e) => setReceipt({ ...receipt, date: e.target.value })} /></Field>
          <div className="sm:col-span-2">
            <Field label="Notas (opcional)"><textarea className={inputClass()} rows={2} value={receipt.notes} onChange={(e) => setReceipt({ ...receipt, notes: e.target.value })} /></Field>
          </div>
        </div>
        <button onClick={handleGenerateReceipt} className="adm-btn adm-btn-primary mt-5">
          Generar PDF del recibo
        </button>

        {receipts.length > 0 && (
          <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-white/40 text-xs mb-2">Historial de recibos</p>
            <div className="flex flex-col gap-1.5 max-h-60 overflow-y-auto">
              {receipts.map((r) => (
                <div key={r.id} className="adm-row flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{r.clientName} — {r.concept}</p>
                    <p className="text-white/40" style={{ fontSize: 11 }}>{r.number} · {formatDate(r.createdAt)} · {r.amount} {r.currency}</p>
                  </div>
                  <button onClick={() => redownloadReceipt(r)} className="text-blue-400 hover:text-blue-300 text-xs font-semibold flex-shrink-0">
                    Descargar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </>
  );
}
