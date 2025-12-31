"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const navItems = [
  { href: "/", label: "首頁", labelEn: "Home" },
  {
    label: "產品",
    labelEn: "Products",
    submenu: [
      { href: "/products/guard", label: "AIOS Guard", labelEn: "AIOS Guard" },
      { href: "/products/sentinel", label: "Sentinel Sovereign", labelEn: "Sentinel Sovereign" },
    ],
  },
  { href: "/deployment", label: "企業導入", labelEn: "Deployment" },
  { href: "/pricing", label: "定價方案", labelEn: "Pricing" },
  { href: "/governance", label: "治理與法規", labelEn: "Governance" },
  {
    label: "問與答",
    labelEn: "FAQ",
    submenu: [
      { href: "/faq/guard", label: "AIOS Guard", labelEn: "AIOS Guard" },
      { href: "/faq/sentinel", label: "Sentinel Sovereign", labelEn: "Sentinel Sovereign" },
    ],
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                AIOS
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href || item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                {item.submenu ? (
                  <div onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                    <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                      {language === "zh" ? item.label : item.labelEn}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-lg py-2 min-w-[200px]">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                          >
                            {language === "zh" ? subitem.label : subitem.labelEn}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {language === "zh" ? item.label : item.labelEn}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="rounded-2xl">
                {language === "zh" ? "登入" : "Login"}
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" className="rounded-2xl bg-transparent">
                {language === "zh" ? "註冊" : "Register"}
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="rounded-2xl bg-gradient-to-r from-cyan-400/90 to-blue-500/90 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/18 transition-all">
                {language === "zh" ? "申請試用" : "Request Trial"}
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="rounded-2xl border-2 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all bg-transparent px-4 font-medium"
              title={language === "zh" ? "Switch to English" : "切換至繁體中文"}
            >
              {language === "zh" ? "EN" : "中文"}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="rounded-2xl text-sm font-medium px-3"
              title={language === "zh" ? "Switch to English" : "切換至繁體中文"}
            >
              {language === "zh" ? "EN" : "中文"}
            </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-2xl hover:bg-muted transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.href || item.label}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {language === "zh" ? item.label : item.labelEn}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.href}
                              href={subitem.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {language === "zh" ? subitem.label : subitem.labelEn}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {language === "zh" ? item.label : item.labelEn}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <Link href="/login" className="block">
                  <Button variant="ghost" className="w-full rounded-2xl" onClick={() => setIsOpen(false)}>
                    {language === "zh" ? "登入" : "Login"}
                  </Button>
                </Link>
                <Link href="/register" className="block">
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl bg-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    {language === "zh" ? "註冊" : "Register"}
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    className="w-full rounded-2xl bg-gradient-to-r from-cyan-400/90 to-blue-500/90"
                    onClick={() => setIsOpen(false)}
                  >
                    {language === "zh" ? "申請試用" : "Request Trial"}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
