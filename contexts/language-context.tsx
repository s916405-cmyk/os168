"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "zh" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("aios-language") as Language
    if (savedLanguage === "zh" || savedLanguage === "en") {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("aios-language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "zh" ? "en" : "zh"))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
