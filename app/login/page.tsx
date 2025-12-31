"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [language, setLanguage] = useState<"zh" | "en">("zh")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a frontend-only form, no actual authentication logic
    console.log("Login form submitted (frontend only)")
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "zh" ? "返回首頁" : "Back to Home"}
          </Link>

          <Card className="border-border/50 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">{language === "zh" ? "登入 AIOS" : "Login to AIOS"}</CardTitle>
              <CardDescription>
                {language === "zh" ? "輸入您的帳號資訊以繼續使用" : "Enter your credentials to continue"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{language === "zh" ? "電子郵件" : "Email"}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={language === "zh" ? "your@email.com" : "your@email.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{language === "zh" ? "密碼" : "Password"}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={language === "zh" ? "輸入密碼" : "Enter password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-400/90 to-blue-500/90 hover:from-cyan-400 hover:to-blue-500"
                >
                  {language === "zh" ? "登入" : "Login"}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-muted-foreground">
                  {language === "zh" ? "還沒有帳號？" : "Don't have an account?"}
                  <Link href="/register" className="ml-1 text-primary hover:underline">
                    {language === "zh" ? "立即註冊" : "Register now"}
                  </Link>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                  <h3 className="font-semibold text-sm">
                    {language === "zh" ? "✓ 30 天免費試用" : "✓ 30-Day Free Trial"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {language === "zh"
                      ? "立即體驗 AIOS 企業級 AI 治理平台，無需信用卡。"
                      : "Experience AIOS enterprise AI governance platform, no credit card required."}
                  </p>
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
