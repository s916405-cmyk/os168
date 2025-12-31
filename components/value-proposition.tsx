"use client"

import { motion } from "framer-motion"
import { Shield, Eye, FileCheck, Lock } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "合規控制",
    description: "可顯著提升 AI 行為符合企業政策與法規要求的能力，避免未授權操作帶來的風險",
  },
  {
    icon: Eye,
    title: "即時監測",
    description: "以旁路方式運作，不影響核心系統穩定性。全天候監測系統狀態與 AI 行為，異常情況即時通知",
  },
  {
    icon: FileCheck,
    title: "完整紀錄",
    description: "所有治理操作與系統事件完整記錄，可供審計與追溯",
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description: "不觸碰帳戶與金流，不代替決策，責任清楚歸屬",
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            為什麼選擇{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AIOS</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            已在企業環境完成概念驗證的 AI 治理工具。讓您在享受 AI 效益的同時，確保合規與風險可控。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
