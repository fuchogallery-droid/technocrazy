"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, translations, Translations } from "@/lib/i18n";

type LanguageCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageCtx>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
});

function detectLang(): Lang {
  if (typeof window === "undefined") return "es";
  const saved = localStorage.getItem("tc_lang") as Lang | null;
  if (saved === "en" || saved === "es") return saved;
  const browser = (navigator.language || (navigator.languages && navigator.languages[0]) || "es").toLowerCase();
  return browser.startsWith("en") ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("tc_lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
