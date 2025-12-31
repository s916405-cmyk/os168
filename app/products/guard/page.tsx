"use client"

import { motion } from "framer-motion"
import { Shield, Lock, FileCheck, Activity, AlertTriangle, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function GuardPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Shield,
      title: language === "zh" ? "AI 行為監控" : "AI Behavior Monitoring",
      description:
        language === "zh"
          ? "即時監控 AI 操作行為，確保符合企業政策框架"
          : "Real-time monitoring of AI operations to ensure compliance with corporate policies",
    },
    {
      icon: Lock,
      title: language === "zh" ? "合規政策執行" : "Compliance Policy Enforcement",
      description:
        language === "zh"
          ? "自動執行合規檢查，防止違規操作發生"
          : "Automated compliance checks to prevent unauthorized operations",
    },
    {
      icon: FileCheck,
      title: language === "zh" ? "治理日誌保存" : "Governance Log Retention",
      description:
        language === "zh"
          ? "完整記錄所有 AI 操作，支援審計追溯"
          : "Complete logging of all AI operations for audit trails",
    },
    {
      icon: Activity,
      title: language === "zh" ? "異常偵測告警" : "Anomaly Detection & Alerts",
      description:
        language === "zh"
          ? "智能偵測異常行為，即時發送告警通知"
          : "Intelligent detection of anomalous behavior with real-time alerts",
    },
    {
      icon: AlertTriangle,
      title: language === "zh" ? "風險評估" : "Risk Assessment",
      description:
        language === "zh"
          ? "持續評估 AI 操作風險等級，提供風險報告"
          : "Continuous assessment of AI operation risk levels with detailed reports",
    },
    {
      icon: Users,
      title: language === "zh" ? "權限控制管理" : "Access Control Management",
      description:
        language === "zh"
          ? "細緻的權限管理機制，確保資源安全存取"
          : "Granular permission management to ensure secure resource access",
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
            AIOS Guard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "zh"
              ? "專注於 AI 行為的即時監控與合規控制，提升 AI 操作符合企業政策框架的能力"
              : "Focused on real-time monitoring and compliance control of AI behavior to enhance AI operations within corporate policy frameworks"}
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
              className="p-6 rounded-2xl border border-border bg-card hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-3xl p-8 lg:p-12 border border-cyan-400/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "應用場景" : "Use Cases"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">
                {language === "zh" ? "電商與零售" : "E-commerce & Retail"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "確保 AI 客服與推薦系統符合消費者保護法規，防止不當推銷或誤導性資訊"
                  : "Ensure AI customer service and recommendation systems comply with consumer protection regulations"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">
                {language === "zh" ? "金融服務" : "Financial Services"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "監控 AI 風險評估與信用審核流程，確保符合金融監管要求"
                  : "Monitor AI risk assessment and credit review processes to ensure financial regulatory compliance"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">{language === "zh" ? "醫療保健" : "Healthcare"}</h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "管控 AI 診斷輔助系統，確保符合醫療法規與病患隱私保護"
                  : "Control AI diagnostic assistance systems to ensure compliance with healthcare regulations and patient privacy"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">{language === "zh" ? "政府機關" : "Government"}</h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "提供透明可追溯的 AI 決策流程，符合政府資訊公開與問責要求"
                  : "Provide transparent and traceable AI decision-making processes for government accountability"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
