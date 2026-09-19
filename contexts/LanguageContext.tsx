"use client";
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Lang, translations, Translations } from "@/lib/i18n";
import { applyOverrides } from "@/lib/contentOverrides";

type LanguageCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Traducciones ya con los textos editados desde el sitio aplicados. */
  t: Translations;
  /** Traducciones originales del código, sin overrides — las usa el editor
   *  para poder restaurar un texto a su versión de fábrica. */
  baseT: Translations;
  /** Overrides crudos de Firestore (claves con "~" en vez de "."). */
  overrides: Record<string, string>;
};

const LanguageContext = createContext<LanguageCtx>({
  lang: "en",
  setLang: () => {},
  t: translations.en as unknown as Translations,
  baseT: translations.en as unknown as Translations,
  overrides: {},
});

function detectLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("tc_lang") as Lang | null;
  if (saved === "en" || saved === "es") return saved;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [overrides, setOverrides] = useState<Record<string, string>>({});

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  // Los textos editados desde el sitio se guardan en `content/{lang}`. Con
  // onSnapshot, cualquier cambio publicado aparece al instante en todas las
  // pestañas abiertas, sin recargar ni volver a desplegar.
  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "content", lang),
      (snap) => setOverrides(snap.exists() ? (snap.data() as Record<string, string>) : {}),
      () => setOverrides({})
    );
    return () => unsub();
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("tc_lang", l);
  };

  const baseT = translations[lang] as unknown as Translations;
  const t = useMemo(() => applyOverrides(baseT, overrides), [baseT, overrides]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, baseT, overrides }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
