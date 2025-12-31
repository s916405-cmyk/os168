"use client"

import Link from "next/link"

const footerLinks = {
  產品: [
    { label: "AIOS Guard", href: "/products#guard" },
    { label: "Sentinel Sovereign", href: "/products#sentinel" },
    { label: "產品比較", href: "/products#comparison" },
  ],
  企業: [
    { label: "企業導入", href: "/deployment" },
    { label: "定價方案", href: "/pricing" },
    { label: "申請試用", href: "/contact" },
  ],
  資源: [
    { label: "常見問題", href: "/faq" },
    { label: "治理與法規", href: "/governance" },
    { label: "聯絡我們", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                AIOS
              </span>
            </Link>
            {/* </CHANGE> */}
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              企業級 AI 治理與控制平台，讓 AI 行為可控、可追溯、可解釋。
            </p>
            <p className="text-xs text-muted-foreground">© 2025 AIOS Labs. All rights reserved.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              隱私權政策
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              服務條款
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">Built with precision and care for enterprise security</p>
        </div>
      </div>

      {/* Hidden dashboard entry for future implementation */}
      <div className="hidden" id="dashboard-entry" />
      <div className="hidden" id="governance-log-entry" />
    </footer>
  )
}
