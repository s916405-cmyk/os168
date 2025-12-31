"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Shield, FileText, Scale, AlertCircle, Lock, Database, Globe } from "lucide-react"

export default function GovernancePage() {
  const { language, toggleLanguage } = useLanguage()

  const sections = [
    {
      icon: Shield,
      title: language === "zh" ? "非託管原則 (Non-Custodial)" : "Non-Custodial Principle",
      content:
        language === "zh"
          ? "AIOS 不託管企業資料、不保存 API Key、不儲存使用者個資。所有資料主權與控制權完全由企業自行掌握。"
          : "AIOS does not custody enterprise data, API keys, or user personal information. Full data sovereignty and control remain with the enterprise.",
    },
    {
      icon: FileText,
      title: language === "zh" ? "唯讀治理 (Read-Only Governance)" : "Read-Only Governance",
      content:
        language === "zh"
          ? "系統以唯讀方式監測與治理，不修改企業既有系統內容、不自動執行決策、不觸碰金流與交易。"
          : "The system monitors and governs in read-only mode, without modifying existing enterprise systems, executing automated decisions, or touching financial transactions.",
    },
    {
      icon: Scale,
      title: language === "zh" ? "不構成決策建議" : "No Decision Recommendations",
      content:
        language === "zh"
          ? "AIOS 提供治理工具與異常預警，但不構成法律、財務或商業決策建議。所有決策由企業自行判斷與執行。"
          : "AIOS provides governance tools and anomaly warnings but does not constitute legal, financial, or business decision recommendations. All decisions remain with the enterprise.",
    },
    {
      icon: AlertCircle,
      title: language === "zh" ? "責任邊界" : "Responsibility Boundaries",
      content:
        language === "zh"
          ? "AIOS Labs 負責系統治理層運作，不涉及企業應用層決策、收益分配或法律責任。企業對其 AI 系統的合規性與運作結果負完全責任。"
          : "AIOS Labs is responsible for governance layer operations only, not application-layer decisions, revenue distribution, or legal liabilities. Enterprises bear full responsibility for AI compliance and operational outcomes.",
    },
    {
      icon: Lock,
      title: language === "zh" ? "NDA 與保密協議" : "NDA & Confidentiality",
      content:
        language === "zh"
          ? "NDA（保密協議）僅適用於企業採購、系統介接或技術整合階段，不涉及前台公開內容。官網所有資訊皆為公開可讀，不含機密或敏感資訊。"
          : "NDAs apply only to enterprise procurement, system integration, or technical onboarding phases, not public-facing content. All website information is publicly readable and contains no confidential or sensitive data.",
    },
    {
      icon: Database,
      title: language === "zh" ? "資料處理原則" : "Data Processing Principles",
      content:
        language === "zh"
          ? "AIOS 以旁路方式運作，不影響核心系統穩定性。所有監測數據僅用於治理與異常預警，不進行推論、不外洩、不轉售。停用服務後不留存任何資料。"
          : "AIOS operates in bypass mode without affecting core system stability. All monitoring data is used solely for governance and anomaly warnings, without inference, leakage, or resale. No data retention after service termination.",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <Globe className="w-4 h-4 text-cyan-400" />
              <button onClick={toggleLanguage} className="text-sm font-medium">
                {language === "zh" ? "English" : "繁體中文"}
              </button>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              {language === "zh" ? "治理與法規" : "Governance & Compliance"}
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {language === "zh" ? "透明的責任邊界" : "Transparent Boundaries"}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              {language === "zh"
                ? "AIOS 嚴格遵守企業資料主權與治理邊界，確保所有運作符合法規與企業內控要求"
                : "AIOS strictly adheres to enterprise data sovereignty and governance boundaries, ensuring all operations comply with regulations and internal controls"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governance Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Points Summary */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {language === "zh" ? "核心承諾" : "Core Commitments"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  language === "zh" ? "不託管企業資料與 API Key" : "No custody of enterprise data or API keys",
                  language === "zh" ? "不讀取或儲存個人識別資訊" : "No reading or storing of personal data",
                  language === "zh" ? "不自動執行決策或交易" : "No automated decisions or transactions",
                  language === "zh" ? "不影響核心系統穩定性" : "No impact on core system stability",
                  language === "zh" ? "停用後不留存任何資料" : "No data retention after termination",
                  language === "zh" ? "完全符合企業內控要求" : "Full compliance with internal controls",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-card/50">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-6 rounded-2xl bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {language === "zh"
                  ? "本頁面所有內容僅供參考，不構成法律建議或合約承諾。正式合約條款與服務細節請以簽署文件為準。如有任何疑問，歡迎聯絡我們的法務團隊進行確認。"
                  : "All content on this page is for reference only and does not constitute legal advice or contractual commitments. Formal contract terms and service details are subject to signed documents. For any questions, please contact our legal team for clarification."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
