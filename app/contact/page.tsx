"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [language, setLanguage] = useState<"zh" | "en">("zh")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a frontend-only form, no actual submission logic
    console.log("Contact form submitted (frontend only)")
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "zh" ? "返回首頁" : "Back to Home"}
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {language === "zh" ? "申請 30 天免費試用" : "Request 30-Day Free Trial"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === "zh"
                ? "填寫表單，我們的團隊將在 24 小時內與您聯繫"
                : "Fill out the form and our team will contact you within 24 hours"}
            </p>
          </div>

          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                {language === "zh" ? "聯絡資訊" : "Contact Information"}
              </CardTitle>
              <CardDescription>
                {language === "zh"
                  ? "請提供您的基本資訊以便我們為您安排試用"
                  : "Please provide your basic information so we can arrange a trial for you"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{language === "zh" ? "姓名" : "Name"}</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={language === "zh" ? "您的姓名" : "Your name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{language === "zh" ? "工作電子郵件" : "Work Email"}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={language === "zh" ? "your@company.com" : "your@company.com"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">{language === "zh" ? "公司名稱" : "Company Name"}</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder={language === "zh" ? "您的公司名稱" : "Your company name"}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{language === "zh" ? "需求說明（選填）" : "Requirements (Optional)"}</Label>
                  <Textarea
                    id="message"
                    placeholder={language === "zh" ? "告訴我們您的需求或問題" : "Tell us about your needs or questions"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-400/90 to-blue-500/90 hover:from-blue-400 hover:to-blue-500 shadow-xl shadow-blue-500/15"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {language === "zh" ? "提交申請" : "Submit Request"}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary mb-1">30</div>
                    <div className="text-xs text-muted-foreground">
                      {language === "zh" ? "天免費試用" : "Days Free Trial"}
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary mb-1">24h</div>
                    <div className="text-xs text-muted-foreground">
                      {language === "zh" ? "內回覆" : "Response Time"}
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{language === "zh" ? "無需" : "No"}</div>
                    <div className="text-xs text-muted-foreground">{language === "zh" ? "信用卡" : "Credit Card"}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-6">
            {language === "zh"
              ? "此頁面僅供前台展示使用，不包含實際金流或個資處理功能"
              : "This page is for frontend display only and does not include payment or personal data processing"}
          </p>
        </motion.div>
      </div>
    </main>
  )
}
