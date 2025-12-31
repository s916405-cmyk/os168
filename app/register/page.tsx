"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
  const [language, setLanguage] = useState<"zh" | "en">("zh")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a frontend-only form, no actual registration logic
    console.log("Registration form submitted (frontend only)")
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
              <CardTitle className="text-2xl font-bold">
                {language === "zh" ? "註冊 AIOS 帳號" : "Create AIOS Account"}
              </CardTitle>
              <CardDescription>
                {language === "zh"
                  ? "開始您的 30 天免費試用，體驗企業級 AI 治理"
                  : "Start your 30-day free trial and experience enterprise AI governance"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">{language === "zh" ? "公司名稱" : "Company Name"}</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder={language === "zh" ? "您的公司名稱" : "Your company name"}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
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
                <div className="space-y-2">
                  <Label htmlFor="password">{language === "zh" ? "設定密碼" : "Set Password"}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={language === "zh" ? "至少 8 個字元" : "At least 8 characters"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="rounded-xl"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                    {language === "zh" ? (
                      <>
                        我同意 AIOS 的{" "}
                        <Link href="/governance" className="text-primary hover:underline">
                          服務條款
                        </Link>{" "}
                        與{" "}
                        <Link href="/governance" className="text-primary hover:underline">
                          隱私政策
                        </Link>
                      </>
                    ) : (
                      <>
                        I agree to AIOS{" "}
                        <Link href="/governance" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/governance" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </>
                    )}
                  </Label>
                </div>
                <Button
                  type="submit"
                  disabled={!acceptTerms}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-400/90 to-blue-500/90 hover:from-blue-400 hover:to-blue-500 disabled:opacity-50 shadow-xl shadow-blue-500/15"
                >
                  {language === "zh" ? "開始 30 天免費試用" : "Start 30-Day Free Trial"}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-muted-foreground">
                  {language === "zh" ? "已經有帳號了？" : "Already have an account?"}
                  <Link href="/login" className="ml-1 text-primary hover:underline">
                    {language === "zh" ? "立即登入" : "Login now"}
                  </Link>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="space-y-3">
                  <h3 className="font-semibold text-sm">
                    {language === "zh" ? "免費試用包含：" : "Free trial includes:"}
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        {language === "zh"
                          ? "完整存取 AIOS Guard 與 Sentinel Sovereign"
                          : "Full access to AIOS Guard & Sentinel Sovereign"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        {language === "zh" ? "無需信用卡，隨時可取消" : "No credit card required, cancel anytime"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        {language === "zh" ? "專屬技術支援與導入協助" : "Dedicated technical support & onboarding"}
                      </span>
                    </li>
                  </ul>
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
