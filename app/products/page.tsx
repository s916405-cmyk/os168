"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Activity, Camera, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "guard",
    icon: Shield,
    name: "AIOS Guard",
    role: "權限與 AI 行為治理",
    description: "監控並控制 AI 行為，確保符合企業政策與法規要求",
    longDescription:
      "AIOS Guard 專注於 AI 行為的即時監控與合規控制，可顯著提升 AI 操作符合企業政策框架的能力。已在電商、金融、醫療、政府機關等產業完成企業 PoC 驗證。",
    features: [
      "即時 AI 行為監控與追蹤",
      "自動合規政策執行與驗證",
      "多層級風險預警機制",
      "細緻的操作權限控制",
      "完整的行為日誌記錄",
      "可自訂的合規規則引擎",
    ],
    useCases: [
      { title: "電子商務", desc: "確保 AI 推薦系統符合消費者保護法規" },
      { title: "金融服務", desc: "監控 AI 決策流程，符合金融監管要求" },
      { title: "醫療健康", desc: "控制 AI 診斷建議，確保醫療倫理合規" },
      { title: "政府機關", desc: "治理 AI 公共服務，保障公民權益" },
    ],
    notInclude: ["不觸碰用戶帳戶與認證", "不操作金流與交易", "不自動執行決策"],
    gradient: "from-cyan-500 to-blue-600",
    href: "/products/guard",
  },
  {
    id: "sentinel",
    icon: Activity,
    name: "Sentinel Sovereign",
    role: "系統狀態旁路監測與異常預警",
    description: "以旁路方式提供系統健康監測與完整的治理日誌記錄功能",
    longDescription:
      "Sentinel Sovereign 以旁路方式運作，不影響核心系統穩定性。專注於系統級監測與治理紀錄保存，協助 IT、資安、法務團隊掌握系統運作狀態與責任歸屬。所有監測數據與日誌都經過加密保存，可供審計追溯。",
    features: [
      "全天候系統健康監測",
      "完整的治理日誌保存",
      "智能異常偵測與告警",
      "可追溯的審計紀錄",
      "系統效能分析儀表板",
      "多維度數據視覺化",
    ],
    useCases: [
      { title: "IT 運維", desc: "即時掌握系統健康狀態與效能指標" },
      { title: "資安團隊", desc: "監測異常行為，快速響應安全事件" },
      { title: "法務合規", desc: "保存完整治理紀錄，支援審計需求" },
      { title: "管理層", desc: "透過儀表板了解整體治理狀況" },
    ],
    notInclude: ["不含 GPS 定位功能", "不含街景 AR 功能", "不涉及交易 API"],
    gradient: "from-blue-500 to-indigo-600",
    href: "/products/sentinel",
  },
  {
    id: "cameraverse",
    icon: Camera,
    name: "CameraVerse",
    role: "企業級影像處理平台",
    description: "智能影像分析與視覺應用開發工具",
    longDescription:
      "CameraVerse 提供企業級影像處理與分析能力，協助企業快速建立影像相關應用。從商品辨識、品質檢測到安全監控，提供完整的視覺 AI 解決方案。",
    features: [
      "智能影像辨識與分析",
      "即時影像串流處理",
      "多格式影像支援",
      "模組化功能架構",
      "高效能運算引擎",
      "企業級資料安全",
    ],
    useCases: [
      { title: "零售與電商", desc: "商品影像辨識與視覺搜尋應用" },
      { title: "製造與品檢", desc: "自動化瑕疵檢測與產品分類" },
      { title: "安全監控", desc: "人員識別與異常行為偵測" },
      { title: "內容創作", desc: "影像編輯與自動標註管理" },
    ],
    notInclude: ["不含 GPS 定位", "不含街景 AR", "不儲存個人身份資料"],
    gradient: "from-emerald-500 to-cyan-600",
    href: "/products/cameraverse",
  },
]

const comparisonFeatures = [
  { feature: "AI 行為監控", guard: true, sentinel: false, cameraverse: false },
  { feature: "合規政策執行", guard: true, sentinel: false, cameraverse: false },
  { feature: "系統健康監測", guard: false, sentinel: true, cameraverse: false },
  { feature: "治理日誌保存", guard: true, sentinel: true, cameraverse: false },
  { feature: "異常偵測告警", guard: true, sentinel: true, cameraverse: false },
  { feature: "審計追溯支援", guard: true, sentinel: true, cameraverse: false },
  { feature: "權限控制管理", guard: true, sentinel: false, cameraverse: false },
  { feature: "效能分析儀表板", guard: false, sentinel: true, cameraverse: false },
  { feature: "影像辨識分析", guard: false, sentinel: false, cameraverse: true },
  { feature: "視訊串流處理", guard: false, sentinel: false, cameraverse: true },
]

export default function ProductsPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              專業的{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI 治理解決方案
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              可單獨使用或搭配部署，為您的企業提供全方位的 AI 治理能力
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      {products.map((product, index) => (
        <section key={product.id} id={product.id} className={`py-24 relative ${index % 2 === 1 ? "bg-muted/30" : ""}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-xl shadow-cyan-500/15`}
                  >
                    <product.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
                    <p className="text-cyan-400 font-medium mb-4">{product.role}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">{product.longDescription}</p>
                  </div>
                  <div className="flex gap-4">
                    <Link href={product.href}>
                      <Button size="lg" variant="outline" className="rounded-3xl border-2 group bg-transparent">
                        了解更多
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button size="lg" className={`rounded-3xl bg-gradient-to-r ${product.gradient} shadow-lg group`}>
                        申請試用
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm">
                    <h3 className="text-xl font-bold mb-4">核心功能</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold mb-6">適用場景</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {product.useCases.map((useCase, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-card border border-border hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <h4 className="font-bold mb-2">{useCase.title}</h4>
                      <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What's Not Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border"
              >
                <h4 className="font-bold mb-3">責任邊界說明</h4>
                <div className="flex flex-wrap gap-2">
                  {product.notInclude.map((item, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-background text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section id="comparison" className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12">產品功能比較</h2>

            <div className="rounded-3xl border border-border overflow-hidden bg-card shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-6 font-bold">功能項目</th>
                      <th className="text-center p-6 font-bold">AIOS Guard</th>
                      <th className="text-center p-6 font-bold">Sentinel</th>
                      <th className="text-center p-6 font-bold">CameraVerse</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-6 text-muted-foreground">{item.feature}</td>
                        <td className="p-6 text-center">
                          {item.guard ? (
                            <Check className="w-6 h-6 text-cyan-400 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.sentinel ? (
                            <Check className="w-6 h-6 text-blue-400 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.cameraverse ? (
                            <Check className="w-6 h-6 text-emerald-400 mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">三個產品可獨立使用或搭配部署，提供完整的 AI 治理解決方案</p>
              <Link href="/contact">
                <Button size="lg" className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600">
                  聯絡我們了解更多
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
