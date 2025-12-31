"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Activity, ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    icon: Shield,
    name: "AIOS Guard",
    role: "AI 行為合規治理與控制",
    description: "監控並控制 AI 行為，確保符合企業政策與法規要求。適用於電商、金融、醫療、政府等需要嚴格合規的場景。",
    features: ["即時行為監控", "合規政策執行", "風險預警機制", "操作權限控制"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Activity,
    name: "Sentinel Sovereign",
    role: "系統狀態監測與治理紀錄",
    description: "提供系統健康監測與完整的治理日誌記錄功能。協助 IT、資安、法務團隊掌握系統狀態與責任歸屬。",
    features: ["系統健康監測", "治理日誌保存", "異常偵測告警", "審計追溯支援"],
    gradient: "from-blue-500 to-indigo-600",
  },
]

export function ProductsOverview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">產品系列</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            可單獨使用或搭配部署，為您的企業提供全方位的 AI 治理解決方案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <product.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-cyan-400 mb-4">{product.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              <div className="space-y-3 mb-8">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/products">
                <Button variant="ghost" className="w-full rounded-2xl group/btn">
                  了解更多
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/products#comparison">
            <Button variant="outline" size="lg" className="rounded-3xl px-8 border-2 bg-transparent">
              查看產品比較表
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
