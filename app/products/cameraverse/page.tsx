"use client"

import { motion } from "framer-motion"
import { Camera, Video, ImageIcon, Layers, Zap, Lock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CameraVersePage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Camera,
      title: language === "zh" ? "智能影像分析" : "Intelligent Image Analysis",
      description:
        language === "zh"
          ? "提供 AI 驅動的影像辨識與分析功能，協助企業建立視覺應用"
          : "AI-powered image recognition and analysis for enterprise visual applications",
    },
    {
      icon: Video,
      title: language === "zh" ? "即時影像處理" : "Real-time Video Processing",
      description:
        language === "zh"
          ? "高效能影像串流處理，支援多種應用場景"
          : "High-performance video streaming for various application scenarios",
    },
    {
      icon: ImageIcon,
      title: language === "zh" ? "多格式支援" : "Multi-format Support",
      description:
        language === "zh"
          ? "支援主流影像與視訊格式，靈活整合至現有系統"
          : "Support for mainstream image and video formats with flexible integration",
    },
    {
      icon: Layers,
      title: language === "zh" ? "模組化架構" : "Modular Architecture",
      description:
        language === "zh"
          ? "可依需求選用功能模組，降低導入複雜度"
          : "Select functional modules as needed to reduce implementation complexity",
    },
    {
      icon: Zap,
      title: language === "zh" ? "高效能運算" : "High-Performance Computing",
      description:
        language === "zh"
          ? "優化的運算引擎，提供快速且穩定的影像處理能力"
          : "Optimized computing engine for fast and stable image processing",
    },
    {
      icon: Lock,
      title: language === "zh" ? "企業級安全" : "Enterprise Security",
      description:
        language === "zh"
          ? "完整的資料加密與存取控制，確保影像資料安全"
          : "Complete data encryption and access control for image data security",
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
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-600 bg-clip-text text-transparent">
            CameraVerse
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === "zh"
              ? "企業級影像處理平台，提供智能影像分析與視覺應用開發工具，協助企業快速建立影像相關應用"
              : "Enterprise image processing platform providing intelligent image analysis and visual application development tools"}
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
              className="p-6 rounded-2xl border border-border bg-card hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-400" />
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
          className="bg-gradient-to-br from-emerald-500/5 to-cyan-600/5 rounded-3xl p-8 lg:p-12 border border-emerald-400/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "應用場景" : "Use Cases"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">
                {language === "zh" ? "零售與電商" : "Retail & E-commerce"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "商品影像辨識、視覺搜尋、虛擬試穿等應用，提升購物體驗"
                  : "Product image recognition, visual search, and virtual try-on for enhanced shopping experiences"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">
                {language === "zh" ? "製造與品檢" : "Manufacturing & Quality Control"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "自動化瑕疵檢測、產品分類、生產流程監控"
                  : "Automated defect detection, product classification, and production monitoring"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">
                {language === "zh" ? "安全監控" : "Security Monitoring"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "人員識別、異常行為偵測、區域監控管理"
                  : "Personnel identification, anomaly detection, and area surveillance management"}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">
                {language === "zh" ? "內容創作" : "Content Creation"}
              </h3>
              <p className="text-muted-foreground">
                {language === "zh"
                  ? "影像編輯、自動標註、內容管理與分類"
                  : "Image editing, auto-tagging, and content management and classification"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border"
        >
          <h3 className="text-lg font-bold mb-4">{language === "zh" ? "責任邊界說明" : "Scope of Responsibility"}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="mb-2">
                {language === "zh"
                  ? "• CameraVerse 專注於影像處理與分析工具提供"
                  : "• CameraVerse focuses on image processing and analysis tools"}
              </p>
              <p className="mb-2">
                {language === "zh"
                  ? "• 不包含地理定位或 GPS 追蹤功能"
                  : "• Does not include geolocation or GPS tracking features"}
              </p>
              <p className="mb-2">
                {language === "zh" ? "• 不提供街景或 AR 擴增實境功能" : "• Does not provide street view or AR features"}
              </p>
            </div>
            <div>
              <p className="mb-2">
                {language === "zh"
                  ? "• 不涉及個人身份資料的儲存與處理"
                  : "• Does not involve storage or processing of personal identity data"}
              </p>
              <p className="mb-2">
                {language === "zh" ? "• 不含金流或交易相關 API" : "• Does not include payment or transaction APIs"}
              </p>
              <p className="mb-2">
                {language === "zh"
                  ? "• 影像資料由企業自行管理，AIOS 不保存"
                  : "• Image data is managed by enterprises, AIOS does not store it"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
