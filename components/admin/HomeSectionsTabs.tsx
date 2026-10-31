"use client";
import { useState } from "react";
import ImageUploadField from "@/components/shared/ImageUploadField";
import { PRODUCT_ACCENTS, accentOf } from "@/lib/homeProducts";
import {
  NFC_FEATURE_ICONS,
  NFC_FEATURE_ICON_MAP,
  DEFAULT_NFC_FEATURES,
  SERVICE_ICONS,
  SERVICE_ICON_MAP,
  emptyCustomService,
  emptyNfcFeature,
  emptyWebPage,
  type CustomService,
  type NfcFeature,
  type WebPageItem,
} from "@/lib/homeSections";
import { Globe, Nfc, Plus, Rocket } from "lucide-react";
import { Card, Field, ListRow, inputClass, moveInList, useSiteList } from "@/components/admin/ui";

// Pestañas del panel para las secciones nuevas del inicio. Todas guardan en
// config/site (sin colecciones nuevas) y el sitio las recibe en vivo.

function FormButtons({ editing, saving, onSave, onCancel, addLabel }: { editing: boolean; saving: boolean; onSave: () => void; onCancel: () => void; addLabel: string }) {
  return (
    <div className="flex gap-3 items-center" style={{ marginTop: 20 }}>
      <button onClick={onSave} disabled={saving} className="adm-btn adm-btn-primary">
        {saving ? "Guardando…" : editing ? "Guardar cambios" : addLabel}
      </button>
      {editing && (
        <button onClick={onCancel} className="text-white/50 text-xs font-semibold">
          Cancelar
        </button>
      )}
    </div>
  );
}

// ── Páginas web ───────────────────────────────────────────────────────────
export function PaginasWebTab() {
  const { items, persist, msg } = useSiteList<WebPageItem>("webPages");
  const [form, setForm] = useState<WebPageItem>(emptyWebPage());
  const [image, setImage] = useState<string[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function reset() {
    setForm(emptyWebPage());
    setImage([]);
    setEditingId(null);
    setError("");
  }

  async function save() {
    if (items === null) return;
    if (!form.name.trim() || !/^https?:\/\//i.test(form.url.trim())) {
      setError("Hace falta el nombre y la dirección completa (empieza con https://).");
      return;
    }
    const page: WebPageItem = {
      id: editingId || crypto.randomUUID(),
      name: form.name.trim(),
      desc: form.desc.trim(),
      url: form.url.trim(),
      imageUrl: image[0] || "",
      buttonLabel: (form.buttonLabel || "").trim(),
      visible: form.visible,
    };
    setSaving(true);
    await persist(editingId ? items.map((x) => (x.id === editingId ? page : x)) : [...items, page]);
    setSaving(false);
    reset();
  }

  if (items === null) return <p className="text-white/50 text-sm">Cargando…</p>;

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold" style={{ marginBottom: 16 }}>{msg}</p>}
      <Card
        title={editingId ? "Editar página" : "Nueva página web"}
        subtitle="Sale en el carrusel «Páginas que ya están en línea» del inicio, que corre solo de derecha a izquierda. Si no subes foto, se usa una captura automática de la dirección."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre">
            <input className={inputClass()} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ej. GANADERO OS" />
          </Field>
          <Field label="Dirección (URL)">
            <input className={inputClass()} value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="https://…" style={{ fontFamily: "monospace", fontSize: 12 }} />
          </Field>
        </div>
        <div style={{ marginTop: 16 }}>
          <Field label="Descripción corta">
            <textarea className={inputClass()} rows={2} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} placeholder="Qué hace la página, en una o dos frases." />
          </Field>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginTop: 16 }}>
          <Field label="Texto del botón (opcional)">
            <input className={inputClass()} value={form.buttonLabel || ""} onChange={(e) => setForm({ ...form, buttonLabel: e.target.value })} placeholder="Visitar" />
          </Field>
        </div>
        <div style={{ marginTop: 16 }}>
          <Field label="Foto de la página (opcional)">
            <ImageUploadField value={image} onChange={setImage} />
          </Field>
        </div>
        {error && <p className="text-red-400 font-semibold" style={{ fontSize: 12, marginTop: 16 }}>{error}</p>}
        <FormButtons editing={!!editingId} saving={saving} onSave={save} onCancel={reset} addLabel="Agregar página" />
      </Card>

      <Card title="Páginas publicadas" subtitle="El orden de esta lista es el orden del carrusel.">
        <div className="flex flex-col gap-2">
          {items.map((p, i) => (
            <ListRow
              key={p.id}
              item={p}
              index={i}
              total={items.length}
              title={p.name}
              subtitle={p.url}
              lead={
                <div className="flex items-center justify-center flex-shrink-0 rounded-lg overflow-hidden" style={{ width: 52, height: 34, background: "rgba(255,255,255,0.06)" }}>
                  {p.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.imageUrl} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <Globe size={16} color="rgba(255,255,255,0.4)" />
                  )}
                </div>
              }
              onToggle={(id) => persist(items.map((x) => (x.id === id ? { ...x, visible: !x.visible } : x)))}
              onMove={(id, dir) => persist(moveInList(items, id, dir))}
              onEdit={(x) => {
                setEditingId(x.id);
                setForm({ ...emptyWebPage(), ...x });
                setImage(x.imageUrl ? [x.imageUrl] : []);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onRemove={(id) => {
                if (confirm("¿Quitar esta página del carrusel?")) persist(items.filter((x) => x.id !== id));
              }}
            />
          ))}
          {items.length === 0 && <p className="text-white/30 text-xs">Todavía no hay páginas. Mientras no haya ninguna, la sección no se muestra en el inicio.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Servicios propios (se suman a las 6 tarjetas fijas) ───────────────────
export function ServiciosPropiosCard() {
  const { items, persist, msg } = useSiteList<CustomService>("customServices");
  const [form, setForm] = useState<CustomService>(emptyCustomService());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function reset() {
    setForm(emptyCustomService());
    setEditingId(null);
    setError("");
  }

  async function save() {
    if (items === null) return;
    if (!form.title.trim()) {
      setError("Hace falta el nombre del servicio.");
      return;
    }
    const svc: CustomService = {
      ...form,
      id: editingId || crypto.randomUUID(),
      title: form.title.trim(),
      desc: form.desc.trim(),
      price: form.price.trim(),
      priceNote: form.priceNote.trim(),
      linkUrl: (form.linkUrl || "").trim(),
    };
    setSaving(true);
    await persist(editingId ? items.map((x) => (x.id === editingId ? svc : x)) : [...items, svc]);
    setSaving(false);
    reset();
  }

  if (items === null) return <p className="text-white/50 text-sm">Cargando…</p>;

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold" style={{ marginBottom: 16 }}>{msg}</p>}
      <Card
        title={editingId ? "Editar servicio propio" : "Agregar un servicio nuevo"}
        subtitle="Diseño, programación, sistemas, robots, apps… cualquier servicio que ofrezcas. Aparece como una tarjeta más en la sección Servicios del inicio."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nombre del servicio">
            <input className={inputClass()} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </Field>
          <Field label="Enlace del botón (opcional, si no abre WhatsApp)">
            <input className={inputClass()} value={form.linkUrl || ""} onChange={(e) => setForm({ ...form, linkUrl: e.target.value })} placeholder="https://…" style={{ fontFamily: "monospace", fontSize: 12 }} />
          </Field>
          <Field label="Precio (ej. Desde $50)">
            <input className={inputClass()} value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
          </Field>
          <Field label="Nota del precio (ej. según proyecto)">
            <input className={inputClass()} value={form.priceNote} onChange={(e) => setForm({ ...form, priceNote: e.target.value })} />
          </Field>
        </div>
        <div style={{ marginTop: 16 }}>
          <Field label="Descripción corta">
            <textarea className={inputClass()} rows={2} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
          </Field>
        </div>
        <div style={{ marginTop: 16 }}>
          <label className="adm-label">Ícono</label>
          <div className="flex flex-wrap gap-2" style={{ marginTop: 8 }}>
            {SERVICE_ICONS.map((ic) => {
              const active = form.icon === ic.id;
              return (
                <button
                  key={ic.id}
                  type="button"
                  onClick={() => setForm({ ...form, icon: ic.id })}
                  className="flex items-center gap-1.5 font-semibold"
                  style={{ minHeight: 40, padding: "0 12px", borderRadius: 10, fontSize: 12, background: active ? "rgba(41,121,255,0.14)" : "rgba(255,255,255,0.03)", border: `1px solid ${active ? "rgba(41,121,255,0.5)" : "rgba(255,255,255,0.08)"}`, color: active ? "#fff" : "rgba(255,255,255,0.55)" }}
                >
                  <ic.Icon size={14} /> {ic.label}
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <label className="adm-label">Color</label>
          <div className="flex flex-wrap gap-2" style={{ marginTop: 8 }}>
            {PRODUCT_ACCENTS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setForm({ ...form, accent: a.id })}
                aria-label={a.label}
                title={a.label}
                style={{ width: 36, height: 36, borderRadius: 10, background: a.grad, outline: form.accent === a.id ? "2px solid #fff" : "none", outlineOffset: 2 }}
              />
            ))}
          </div>
        </div>
        {error && <p className="text-red-400 font-semibold" style={{ fontSize: 12, marginTop: 16 }}>{error}</p>}
        <FormButtons editing={!!editingId} saving={saving} onSave={save} onCancel={reset} addLabel="Agregar servicio" />
      </Card>

      <Card title="Mis servicios nuevos" subtitle="Se muestran después de las seis tarjetas fijas, en este orden.">
        <div className="flex flex-col gap-2">
          {items.map((s, i) => {
            const Icon = SERVICE_ICON_MAP[s.icon] ?? Rocket;
            return (
              <ListRow
                key={s.id}
                item={s}
                index={i}
                total={items.length}
                title={s.title}
                subtitle={[s.price, s.priceNote].filter(Boolean).join(" · ")}
                lead={
                  <div className="flex items-center justify-center flex-shrink-0 rounded-lg text-white" style={{ width: 34, height: 34, background: accentOf(s.accent).grad }}>
                    <Icon size={16} />
                  </div>
                }
                onToggle={(id) => persist(items.map((x) => (x.id === id ? { ...x, visible: !x.visible } : x)))}
                onMove={(id, dir) => persist(moveInList(items, id, dir))}
                onEdit={(x) => {
                  setEditingId(x.id);
                  setForm({ ...emptyCustomService(), ...x });
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onRemove={(id) => {
                  if (confirm("¿Quitar este servicio?")) persist(items.filter((x) => x.id !== id));
                }}
              />
            );
          })}
          {items.length === 0 && <p className="text-white/30 text-xs">Todavía no has agregado servicios propios.</p>}
        </div>
      </Card>
    </>
  );
}

// ── Chip NFC en el inicio ─────────────────────────────────────────────────
export function NfcInicioTab() {
  const { items, persist, msg } = useSiteList<NfcFeature>("nfcFeatures");
  const [form, setForm] = useState<NfcFeature>(emptyNfcFeature());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function reset() {
    setForm(emptyNfcFeature());
    setEditingId(null);
    setError("");
  }

  async function save() {
    if (items === null) return;
    if (!form.title.trim()) {
      setError("Hace falta el título de la función.");
      return;
    }
    const f: NfcFeature = { ...form, id: editingId || crypto.randomUUID(), title: form.title.trim(), desc: form.desc.trim(), detail: (form.detail || "").trim() };
    setSaving(true);
    await persist(editingId ? items.map((x) => (x.id === editingId ? f : x)) : [...items, f]);
    setSaving(false);
    reset();
  }

  if (items === null) return <p className="text-white/50 text-sm">Cargando…</p>;

  return (
    <>
      {msg && <p className="text-green-400 text-xs font-semibold" style={{ marginBottom: 16 }}>{msg}</p>}
      {items.length === 0 && (
        <Card title="Se están mostrando las funciones de ejemplo" subtitle="Mientras no guardes las tuyas, el inicio muestra estas seis. Cópialas para editarlas, o agrega las tuyas abajo.">
          <button onClick={() => persist(DEFAULT_NFC_FEATURES.map((d) => ({ ...d, id: crypto.randomUUID() })))} className="adm-btn adm-btn-primary">
            Copiar las de ejemplo para editarlas
          </button>
        </Card>
      )}

      <Card
        title={editingId ? "Editar función" : "Nueva función del chip"}
        subtitle="Cada función es una tarjeta pequeña con su ícono y una descripción; al tocarla se despliega el detalle. Los visitantes también ven un botón para activar el NFC de su teléfono."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Título">
            <input className={inputClass()} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Ej. Guardar contacto" />
          </Field>
          <Field label="Descripción corta (visible siempre)">
            <input className={inputClass()} value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
          </Field>
        </div>
        <div style={{ marginTop: 16 }}>
          <Field label="Detalle (se despliega al tocar)">
            <textarea className={inputClass()} rows={3} value={form.detail || ""} onChange={(e) => setForm({ ...form, detail: e.target.value })} />
          </Field>
        </div>
        <div style={{ marginTop: 16 }}>
          <label className="adm-label">Ícono</label>
          <div className="flex flex-wrap gap-2" style={{ marginTop: 8 }}>
            {NFC_FEATURE_ICONS.map((ic) => {
              const active = form.icon === ic.id;
              return (
                <button
                  key={ic.id}
                  type="button"
                  onClick={() => setForm({ ...form, icon: ic.id })}
                  className="flex items-center gap-1.5 font-semibold"
                  style={{ minHeight: 40, padding: "0 12px", borderRadius: 10, fontSize: 12, background: active ? "rgba(245,158,11,0.14)" : "rgba(255,255,255,0.03)", border: `1px solid ${active ? "rgba(245,158,11,0.5)" : "rgba(255,255,255,0.08)"}`, color: active ? "#fff" : "rgba(255,255,255,0.55)" }}
                >
                  <ic.Icon size={14} /> {ic.label}
                </button>
              );
            })}
          </div>
        </div>
        {error && <p className="text-red-400 font-semibold" style={{ fontSize: 12, marginTop: 16 }}>{error}</p>}
        <FormButtons editing={!!editingId} saving={saving} onSave={save} onCancel={reset} addLabel="Agregar función" />
      </Card>

      <Card title="Funciones en el inicio" subtitle="El orden de esta lista es el orden de las tarjetas.">
        <div className="flex flex-col gap-2">
          {items.map((f, i) => {
            const Icon = NFC_FEATURE_ICON_MAP[f.icon] ?? Nfc;
            return (
              <ListRow
                key={f.id}
                item={f}
                index={i}
                total={items.length}
                title={f.title}
                subtitle={f.desc}
                lead={
                  <div className="flex items-center justify-center flex-shrink-0 rounded-lg text-white" style={{ width: 34, height: 34, background: "linear-gradient(135deg,#f59e0b,#fb923c)" }}>
                    <Icon size={16} />
                  </div>
                }
                onToggle={(id) => persist(items.map((x) => (x.id === id ? { ...x, visible: !x.visible } : x)))}
                onMove={(id, dir) => persist(moveInList(items, id, dir))}
                onEdit={(x) => {
                  setEditingId(x.id);
                  setForm({ ...emptyNfcFeature(), ...x });
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onRemove={(id) => {
                  if (confirm("¿Quitar esta función?")) persist(items.filter((x) => x.id !== id));
                }}
              />
            );
          })}
          {items.length === 0 && <p className="text-white/30 text-xs">Sin funciones propias todavía.</p>}
        </div>
        <p className="text-white/35" style={{ fontSize: 11, marginTop: 14 }}>
          <Plus size={10} style={{ display: "inline", marginRight: 4 }} />
          Los chips físicos (códigos, escaneos, programarlos) se siguen administrando en la pestaña «Chips NFC».
        </p>
      </Card>
    </>
  );
}
