"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Eye } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { language } = useLanguage()

  const stats =
    language === "zh"
      ? [
          { value: "99.9%", label: "以旁路方式運作" },
          { value: "30天", label: "已完成企業 PoC 驗證" },
          { value: "100%", label: "Non-Custodial 原則" },
        ]
      : [
          { value: "99.9%", label: "Bypass Operation" },
          { value: "30 Days", label: "Enterprise PoC Verified" },
          { value: "100%", label: "Non-Custodial Principle" },
        ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 max-w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-full">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/8 border border-blue-500/15 backdrop-blur-sm"
          >
            <Shield className="w-4 h-4 text-blue-400/90" />
            <span className="text-sm font-medium text-blue-300/95">
              {language === "zh" ? "企業級 AI 治理平台" : "Enterprise AI Governance Platform"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-balance px-4"
          >
            {language === "zh" ? (
              <>
                掌控 AI 行為
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  強化企業治理
                </span>
              </>
            ) : (
              <>
                Control AI Behavior
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Strengthen Governance
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4"
          >
            {language === "zh"
              ? "AIOS 為企業提供完整的 AI 合規監測、系統治理與紀錄保存工具。確保 AI 行為可控、可追溯、可解釋，協助企業在合規框架下安全運作。"
              : "AIOS provides comprehensive AI compliance monitoring, system governance, and record-keeping tools for enterprises. Ensuring AI behavior is controllable, traceable, and explainable, helping businesses operate safely within regulatory frameworks."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-3xl px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-xl shadow-cyan-500/15 group w-full sm:w-auto"
              >
                {language === "zh" ? "開始 30 天試用" : "Start 30-Day Trial"}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="rounded-3xl px-8 py-6 text-lg border-2 group bg-transparent w-full sm:w-auto"
              >
                <Eye className="mr-2 w-5 h-5" />
                {language === "zh" ? "探索產品" : "Explore Products"}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
