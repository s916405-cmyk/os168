"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Server, Container, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const deploymentMethods = [
  {
    icon: Server,
    title: "虛擬機部署 (VM)",
    description: "在您的虛擬機環境中部署 AIOS 系統",
    features: ["支援主流 VM 平台", "完整系統隔離", "彈性資源配置", "以旁路方式運作"],
  },
  {
    icon: Container,
    title: "容器化部署 (Container)",
    description: "使用 Docker/Kubernetes 進行容器化部署",
    features: ["快速部署與擴展", "微服務架構", "資源效率最佳化", "不影響核心系統穩定性"],
  },
  {
    icon: Shield,
    title: "內網專屬部署",
    description: "完全部署於企業內部網路環境",
    features: ["最高安全等級", "完全數據掌控", "符合內控要求", "無外網依賴"],
  },
]

const deploymentSteps = [
  {
    step: "1",
    title: "需求評估",
    description: "與我們的技術團隊討論您的具體需求與環境",
    duration: "1-2 天",
  },
  {
    step: "2",
    title: "PoC 試用",
    description: "30 天完整功能試用，測試系統是否符合需求",
    duration: "30 天",
  },
  {
    step: "3",
    title: "環境準備",
    description: "準備部署環境，配置必要的基礎設施",
    duration: "3-5 天",
  },
  {
    step: "4",
    title: "系統部署",
    description: "由我們的工程團隊協助完成系統部署與設定",
    duration: "1-2 天",
  },
  {
    step: "5",
    title: "測試驗證",
    description: "進行完整的功能測試與安全驗證",
    duration: "2-3 天",
  },
  {
    step: "6",
    title: "正式啟用",
    description: "系統正式上線，開始提供治理服務",
    duration: "1 天",
  },
]

export default function DeploymentPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">企業導入</span>{" "}
              流程
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              彈性的部署方式與專業的技術支援，確保 AIOS 順利整合至您的企業環境
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deployment Methods */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">部署方式</h2>
            <p className="text-lg text-muted-foreground">選擇最適合您企業環境的部署方案</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {deploymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 flex items-center justify-center mb-6">
                  <method.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Steps */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">啟用流程</h2>
            <p className="text-lg text-muted-foreground">從評估到上線，我們提供完整的技術支援</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deploymentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-card border border-border shadow-sm relative group hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 text-white font-bold text-xl shadow-lg shadow-cyan-500/20">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
                  <span className="text-xs text-cyan-400 font-medium">預計時間：{step.duration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deactivation Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-3xl bg-card border border-border shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-6">停用與取消流程</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>我們理解企業需求可能隨時變化。如需停用或取消 AIOS 服務，請遵循以下流程：</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>提前 30 天通知我們的客戶服務團隊</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>我們將協助您匯出所有治理紀錄與日誌數據</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>確認數據移轉完成後，將安全地移除系統</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>根據合約條款處理退款事宜（如適用）</span>
                  </li>
                </ul>
                <p className="pt-4 text-sm">
                  詳細的取消政策與退款條件請參閱{" "}
                  <Link href="/pricing" className="text-cyan-400 hover:underline">
                    定價方案
                  </Link>{" "}
                  頁面。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">準備開始部署？</h2>
            <p className="text-lg text-muted-foreground">聯絡我們的技術團隊，討論最適合您企業的部署方案</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-3xl px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/20 group"
                >
                  聯絡技術團隊
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
    </main>
  )
}
