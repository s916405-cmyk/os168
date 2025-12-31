"use client"

import { motion } from "framer-motion"

const industries = ["電子商務", "金融服務", "醫療健康", "政府機關", "製造業", "教育機構"]

export function TrustedBy() {
  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">已被多個產業採用</p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">值得信賴的企業夥伴</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-card border border-border text-center hover:border-cyan-500/30 transition-all duration-300"
            >
              <span className="text-sm font-medium">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
