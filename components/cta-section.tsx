"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/8 border border-blue-500/15 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-blue-400/90" />
            <span className="text-sm font-medium text-blue-300/95">立即開始 30 天免費試用</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            準備好強化您的
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI 治理能力了嗎？
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            無需信用卡，30 天完整功能試用。我們的團隊將協助您快速部署並體驗 AIOS 的強大功能。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-3xl px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-xl shadow-cyan-500/15 group"
              >
                申請企業試用
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="rounded-3xl px-8 py-6 text-lg border-2 bg-transparent">
                查看定價方案
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
