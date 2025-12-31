"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Calendar, FileText, CreditCard, AlertCircle } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "30 天 PoC 試用",
    description: "概念驗證試用，評估系統是否符合企業需求",
    price: "免費",
    period: "",
    features: [
      "完整產品功能體驗",
      "最多 100 個監測端點",
      "技術團隊協助設定",
      "基礎技術支援",
      "不需要信用卡",
      "可延長試用期（需申請）",
    ],
    cta: "開始試用",
    highlight: false,
  },
  {
    name: "企業訂閱方案",
    description: "已完成 PoC 驗證後的長期企業訂閱服務",
    price: "客製報價",
    period: "",
    features: [
      "無限監測端點",
      "完整產品功能",
      "7×24 技術支援",
      "專屬客戶成功經理",
      "定期系統健檢",
      "優先功能更新",
      "年度合約優惠",
    ],
    cta: "聯絡業務",
    highlight: true,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              透明的{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">定價方案</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              先試用再決定，確保 AIOS 完全符合您的企業需求
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`p-8 rounded-3xl border shadow-sm transition-all duration-300 ${
                  plan.highlight
                    ? // Changed cyan to blue and reduced shadow opacity from /10 to /8
                      "bg-gradient-to-br from-blue-500/5 to-blue-600/5 border-blue-500/30 shadow-xl shadow-blue-500/8 scale-105"
                    : "bg-card border-border hover:shadow-lg"
                }`}
              >
                {plan.highlight && (
                  <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium mb-4">
                    推薦方案
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button
                    className={`w-full rounded-2xl py-6 ${
                      plan.highlight
                        ? // Changed gradient from cyan to blue, reduced shadow intensity
                          "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-xl shadow-blue-500/15"
                        : ""
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Billing Info */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-3xl font-bold text-center mb-12">付款與帳務說明</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-card border border-border">
                <Calendar className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">訂閱與合約</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  企業訂閱採年度合約制，可選擇按月或按年付款。年度合約享有優惠價格與更完善的技術支援服務。
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border">
                <CreditCard className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">預收款說明</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  企業合約採預收款制度，簽約時需支付合約期間的服務費用。我們不涉及任何個人金流帳戶或非法資金操作。
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border">
                <FileText className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">發票開立</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  正式訂閱後，我們將依照台灣稅法規定開立發票。試用期間不涉及發票開立，僅在正式簽約付款後處理。
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border">
                <AlertCircle className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">退款政策</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  試用期內可隨時取消，不產生任何費用。正式合約簽訂後的退款條件請參閱合約細節，或聯絡客服團隊了解。
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20">
              <p className="text-center text-muted-foreground">
                所有付款與帳務流程均符合企業採購規範，不涉及個人金流或非法帳戶操作。
                <br />
                如有任何疑問，歡迎{" "}
                <Link href="/contact" className="text-blue-500 hover:underline font-medium">
                  聯絡我們
                </Link>{" "}
                的財務團隊。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl font-bold">準備開始試用？</h2>
            <p className="text-lg text-muted-foreground">30 天完整功能試用，無需信用卡，立即體驗 AIOS 的強大功能</p>
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-3xl px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl shadow-blue-500/15"
              >
                立即申請試用
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
