"use client"

import { motion } from "framer-motion"
import { Activity, Database, BarChart3, Bell, FileText, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SentinelPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Activity,
      title: language === "zh" ? "系統健康監測" : "System Health Monitoring",
      description:
        language === "zh"
          ? "持續監測系統運作狀態，確保服務穩定性"
          : "Continuous monitoring of system operational status to ensure service stability",
    },
    {
      icon: Database,
      title: language === "zh" ? "治理日誌保存" : "Governance Log Retention",
      description:
        language === "zh"
          ? "加密保存所有治理紀錄，支援長期審計追溯"
          : "Encrypted storage of all governance records for long-term audit trails",
    },
    {
      icon: BarChart3,
      title: language === "zh" ? "效能分析儀表板" : "Performance Analytics Dashboard",
      description:
        language === "zh"
          ? "視覺化系統效能指標，協助決策優化"
          : "Visualize system performance metrics to support decision optimization",
    },
    {
      icon: Bell,
      title: language === "zh" ? "異常偵測告警" : "Anomaly Detection & Alerts",
      description:
        language === "zh"
          ? "即時偵測系統異常，快速回應潛在問題"
          : "Real-time detection of system anomalies for rapid response to potential issues",
    },
    {
      icon: FileText,
      title: language === "zh" ? "審計追溯支援" : "Audit Trail Support",
      description:
        language === "zh"
          ? "完整的操作紀錄與時間戳記，滿足合規要求"
          : "Complete operation records with timestamps to meet compliance requirements",
    },
    {
      icon: Shield,
      title: language === "zh" ? "旁路式部署" : "Bypass Deployment",
      description:
        language === "zh"
          ? "以旁路方式運作，不影響核心系統穩定性"
          : "Operates in bypass mode without affecting core system stability",
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Sentinel Sovereign
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "zh"
              ? "專注於系統級監測與治理紀錄保存，協助 IT、資安、法務團隊掌握系統運作狀態與責任歸屬"
              : "Focused on system-level monitoring and governance record retention to help IT, security, and legal teams understand system operations and accountability"}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-blue-600/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-500/5 to-blue-600/5 rounded-3xl p-8 lg:p-12 border border-purple-400/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "核心優勢" : "Key Benefits"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">
                {language === "zh" ? "不干擾核心業務" : "Non-Intrusive"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "旁路式架構設計，完全不影響現有系統運作與效能"
                  : "Bypass architecture design that does not affect existing system operations and performance"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">
                {language === "zh" ? "完整資料安全" : "Complete Data Security"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "所有監測數據與日誌都經過加密保存，符合資安規範"
                  : "All monitoring data and logs are encrypted for storage, meeting security standards"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">
                {language === "zh" ? "跨部門協作" : "Cross-Department Collaboration"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "統一的監測平台，讓 IT、資安、法務團隊高效協作"
                  : "Unified monitoring platform for efficient collaboration between IT, security, and legal teams"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">
                {language === "zh" ? "快速部署實施" : "Rapid Deployment"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "模組化設計，可快速整合至現有系統環境"
                  : "Modular design for quick integration into existing system environments"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
