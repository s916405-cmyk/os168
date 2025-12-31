"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Globe } from "lucide-react"
import Link from "next/link"

const guardQA = {
  zh: [
    { q: "AIOS Guard 的主要用途是什麼？", a: "提供 AI 產品與系統的治理與安全控管，不涉及自動決策或金融交易。" },
    { q: "這項服務適合哪些企業使用？", a: "需要 AI 合規治理、敏感資料防護、系統穩定監測與導入控管的企業。" },
    { q: "AIOS Guard 會自動存取 API Key 嗎？", a: "不會，僅治理使用權限與調度行為，不讀取或保存 API Key 內容。" },
    { q: "會涉及使用者個人資料嗎？", a: "不會讀取、儲存或處理個人識別資料（如姓名、ID、Email、地址、裝置資訊等）。" },
    { q: "會影響企業既有系統效能嗎？", a: "不會，服務以治理層平行運作，不修改企業系統內容。" },
    { q: "30 天試用是如何進行？", a: "以唯讀方式執行 PoC（概念驗證），評估是否適配企業系統架構與治理需求。" },
    { q: "試用期間會部署到正式環境嗎？", a: "不會，僅在隔離試用層執行驗證，不影響正式上線系統。" },
    { q: "企業如何付款？", a: "透過訂閱制或合約匯款方式支付，不涉及官網直接金流操作。" },
    { q: "這項服務能否隨時停用或移除？", a: "可以，停用後不會留下運作影響或資料存檔。" },
    { q: "服務上線後是否需要工程師介入？", a: "是的，正式導入與系統整合由企業工程團隊執行。" },
    { q: "AIOS Guard 會提供後台面板嗎？", a: "會預留入口與 UI 版位，但預設為隱藏或停用狀態，不影響前台顯示。" },
    { q: "服務會自動執行風險評估嗎？", a: "會在治理層提供提示與監測建議，但不會進行自動決策或下單。" },
    { q: "服務是否具備版本回溯功能？", a: "具備，所有變更與治理操作皆可回溯與恢復，不修改前台內容。" },
    { q: "會取代企業工程師或決策者嗎？", a: "不會，AIOS Guard 僅作為治理與控制工具，不涉及應用層決策。" },
    { q: "會讀取企業後台系統內容嗎？", a: "不會讀取後台內容，僅治理系統導入與權限控管。" },
    { q: "會保存網站圖片或內容嗎？", a: "不會下載或保存網站素材，僅參考公開呈現方式進行結構建議。" },
    { q: "是否支援多語系？", a: "支援，前台預留語言切換入口，預設顯示繁體中文。" },
    { q: "會讀取 POS、Stripe、金流帳戶資料嗎？", a: "不會，金流與帳戶資料皆不讀取、不保存、不觸碰。" },
    { q: "服務是否能夠治理 AI 內容合規？", a: "能，但僅提供合規治理建議與執行控管，不涉及內容生成策略。" },
    { q: "企業試用時需要提供哪些資訊？", a: "僅需提供系統版本存在性與架構描述，不含實際內容或機密。" },
    { q: "服務是否支援金融自動交易？", a: "不支援，AIOS Guard 不涉及金融交易或自動下單。" },
    { q: "是否包含 AR/GPS 相關功能？", a: "不包含，不支援街景或 GPS 相關 AR 功能。" },
    { q: "服務是否具備 SLA 合約？", a: "具備，AIOS Guard 的 SLA 由 AIOS Labs 作為簽約與系統治理主體。" },
    { q: "會使用第三方資料庫嗎？", a: "會整合企業自有資料庫需求，但不讀取、保存或推論資料內容。" },
    { q: "服務會複製企業系統嗎？", a: "不會，服務僅提供治理控管與導入監測，不涉及複製系統。" },
    { q: "是否可部署在個人主機上？", a: "可以，在企業授權與工程導入層進行部署，但官網永遠唯讀不含執行代碼。" },
    { q: "會干涉企業收益或商業決策嗎？", a: "不會，企業收益與決策不涉及 AIOS Guard 運作邊界。" },
    { q: "服務是否支援 Lookbook 顯示？", a: "前台可顯示 Lookbook 區塊，但不含治理或系統內部術語。" },
    { q: "服務會自動抓取使用者裝置資訊？", a: "不會，裝置資訊皆不讀取、不儲存。" },
    { q: "會進行系統治理建議學習嗎？", a: "會在治理層持續迭代學習，但不進正式系統資料層修改。" },
    { q: "服務是否有 FailSafe 機制？", a: "具備，但 FailSafe 運作細節僅在內部系統層執行，不對外揭露。" },
    { q: "停用後是否會影響 L-Work、Mall、CameraVerse 運作？", a: "不會，AIOS Guard 停用後不會影響其他系統功能。" },
  ],
  en: [
    {
      q: "What is the primary purpose of AIOS Guard?",
      a: "To provide governance and safety control for AI systems without engaging in automated decision-making or financial transactions.",
    },
    {
      q: "Which companies or enterprises is this service suitable for?",
      a: "Enterprises requiring AI compliance governance, sensitive data protection, system stability monitoring, and controlled AI onboarding.",
    },
    {
      q: "Will AIOS Guard automatically access or store API keys?",
      a: "No. It only governs permissions and AI orchestration behavior. It does not read, download, or store API keys.",
    },
    {
      q: "Does it involve processing or storing user personal data?",
      a: "No. It strictly avoids reading or storing personal identifiable information such as names, IDs, emails, addresses, device fingerprints, or location data.",
    },
    {
      q: "Will it impact the performance of existing enterprise systems?",
      a: "No. It operates in parallel at the governance layer and does not modify enterprise system content or performance.",
    },
    {
      q: "How does the 30-day trial work?",
      a: "As a read-only PoC (Proof of Concept) conducted in an isolated trial environment to validate architecture compatibility.",
    },
    {
      q: "Will the trial be deployed to production?",
      a: "No. Trials remain isolated and do not affect live or production environments.",
    },
    {
      q: "How do enterprises pay for the service?",
      a: "Through subscription plans or contract-based bank transfers. The public website does not include payment processing UIs.",
    },
    {
      q: "Can the service be disabled or removed at any time?",
      a: "Yes. Once disabled, it leaves no stored data or operational impact.",
    },
    {
      q: "Does it replace engineers or decision-makers?",
      a: "No. It is strictly a governance and control tool, not a decision-making agent.",
    },
    {
      q: "Will AIOS Guard provide a backend dashboard?",
      a: "Dashboard entry points and UI placements can exist in the architecture but remain hidden or disabled on the public website.",
    },
    {
      q: "Does it conduct automated risk scoring?",
      a: "It can generate governance alerts and recommendations, but does not engage in automated decisions, trades, or account access.",
    },
    { q: "Will it copy or clone enterprise systems?", a: "No. It does not copy, store, or clone enterprise systems." },
    {
      q: "Will it read WooCommerce or POS financial accounts?",
      a: "No. It does not access or store financial account data.",
    },
    { q: "Does it include GPS or street AR features?", a: "No. GPS-based or street AR features are not included." },
    {
      q: "Does the system support multi-language switching?",
      a: "Yes. Language toggle UI placements can exist, but defaults to Traditional Chinese display on the frontend.",
    },
    {
      q: "Does it save website images or content?",
      a: "No. It does not download or store images or content from enterprise websites.",
    },
    {
      q: "Does it support automated financial transactions?",
      a: "No. It does not support automated financial trading or ordering.",
    },
    {
      q: "What information is required for enterprise onboarding?",
      a: "Only high-level system version existence and architecture descriptions, not actual content or confidential data.",
    },
    {
      q: "Will it interfere with enterprise revenue or commercial decisions?",
      a: "No. It does not interfere with enterprise commercial decisions or revenue.",
    },
    {
      q: "Will it read or save logs?",
      a: "Logs can be visualized for governance purposes, but are not saved or inferred externally without authorization.",
    },
    { q: "Will it expose model parameters?", a: "No. It never exposes model parameters." },
    {
      q: "Does it include a FailSafe mechanism?",
      a: "Yes. FailSafe exists internally but is not disclosed externally.",
    },
    { q: "Does it affect L-Work workflow operations?", a: "No. It does not affect workflow operations." },
    {
      q: "Does it involve user account identification?",
      a: "No. It does not involve identifying or storing user account data.",
    },
    {
      q: "Can the architecture reserve Lookbook sections?",
      a: "Yes. Lookbook display sections can be reserved for the frontend.",
    },
    {
      q: "Will it automatically fetch cloud database content?",
      a: "No. It does not fetch or store cloud database content.",
    },
    { q: "Is the frontend publicly readable?", a: "Yes. The frontend is publicly readable and read-only." },
  ],
}

const sentinelQA = {
  zh: [
    { q: "Sentinel 的主要用途是什麼？", a: "監測 AI 與系統的運作狀態，提供治理與異常預警，不涉及應用層決策。" },
    { q: "這項服務適合哪些企業？", a: "需要系統穩定監測、AI 運作可視化、異常預警與治理導入的企業。" },
    { q: "會讀取或保存 API Key 嗎？", a: "不會，僅監測系統狀態與權限調度，不讀取或保存 API Key 內容。" },
    { q: "會處理使用者個人識別資料嗎？", a: "不會讀取、儲存或處理任何個人識別資訊。" },
    { q: "會影響企業既有系統內容或效能嗎？", a: "不會，服務在治理層平行運作，不修改企業系統內容與效能。" },
    { q: "30 天試用如何進行？", a: "以 PoC（概念驗證）方式執行系統監測適配與異常預警驗證，處於隔離試用層。" },
    { q: "企業如何付款？", a: "透過訂閱或合約匯款方式支付，官網不包含金流操作。" },
    { q: "服務是否可隨時停用或移除？", a: "可以，停用後不會留下資料存檔或系統運作影響。" },
    { q: "會取代工程師或企業決策者嗎？", a: "不會，Sentinel 僅為系統狀態監測與治理工具。" },
    { q: "是否包含 AR 或 GPS 功能？", a: "不包含，不支援 AR 或 GPS 定位相關功能。" },
    { q: "會讀取網站內容或下載圖片嗎？", a: "不會下載或保存網站圖片與內容，僅參考公開呈現方式提供結構建議。" },
    { q: "是否會複製企業系統？", a: "不會，服務不涉及複製或保存企業系統。" },
    { q: "是否支援多語系切換？", a: "支援，前台預留語言切換入口，預設顯示繁體中文。" },
    { q: "會讀取 POS、WooCommerce、Stripe 帳戶資料嗎？", a: "不會讀取、不保存、不觸碰任何金融帳戶或金流資料。" },
    { q: "服務是否支援系統 Log 監測？", a: "支援，但不會保存或推論 Log 內容，僅作為異常提示與可視化治理用途。" },
    { q: "服務是否會自我擴張架構？", a: "不會，不進行自我架構擴張。" },
    { q: "會提供面板入口嗎？", a: "會在架構中預留 UI 入口與版位，但預設為隱藏或停用狀態。" },
    { q: "會顯示內部模型參數嗎？", a: "不會對外揭露內部模型參數。" },
    { q: "是否支援版本回溯與 Restore？", a: "具備，但不會在官網揭露內部術語，Restore 入口僅在治理層運作。" },
    { q: "企業試用需要提供什麼資料？", a: "企業可提供系統版本存在性與架構描述，不含內容與機密。" },
    { q: "服務會干涉企業收益或商業決策嗎？", a: "不會干涉企業收益與商業決策。" },
    { q: "會抓取或保存使用者裝置指紋或 IP 嗎？", a: "不會抓取、不會保存裝置或 IP 指紋資訊。" },
    { q: "是否具備異常預警功能？", a: "具備，Sentinel 可提供系統異常預警與建議。" },
    { q: "服務會留存資料嗎？", a: "不會自動留存資料或存檔，所有治理由企業自行導入與管理。" },
    { q: "會自動觸發通知嗎？", a: "會在治理層提供異常通知，但不保存內容。" },
    { q: "會影響商城、遊戲或工作流程引擎運作嗎？", a: "不會影響商城、遊戲或 L-Work 流程運作。" },
    { q: "服務是否包含誇張宣稱？", a: "不包含，語氣中性、專業可信。" },
    { q: "停用後是否會影響其他系統？", a: "不會，停用後不會影響其他系統運作。" },
    { q: "是否提供 Lookbook 顯示預留？", a: "可以預留 Lookbook 區塊，但不含 AR 或相機相關內容。" },
    { q: "是否會保存資料庫內容？", a: "不會保存資料庫內容，僅治理導入與監測用途。" },
    { q: "是否具備 FailSafe 機制？", a: "具備，但不會對外揭露 FailSafe 細節。" },
    { q: "這項服務是否公開可讀？", a: "是，前台公開可讀、唯讀，不涉及內部術語與執行代碼。" },
  ],
  en: [
    {
      q: "What is the primary purpose of Sentinel?",
      a: "To monitor AI and system operational status and provide governance alerts and anomaly warnings without engaging in application-layer decisions.",
    },
    {
      q: "Which enterprises is this suitable for?",
      a: "Enterprises requiring system stability monitoring, AI compliance governance, anomaly early warnings, and controlled AI onboarding visualization.",
    },
    {
      q: "Will it read or store API keys?",
      a: "No. It only monitors system status and AI orchestration behavior. It never reads or stores API keys.",
    },
    {
      q: "Will it process or store user personal data?",
      a: "No. It strictly avoids reading or storing personal identifiable information such as names, IDs, emails, addresses, device fingerprints, or IP-based identification.",
    },
    {
      q: "Will it affect the performance or content of existing systems?",
      a: "No. It operates in parallel at the governance layer and does not modify enterprise system content or performance.",
    },
    {
      q: "How does the 30-day trial work?",
      a: "As a PoC (Proof of Concept) in an isolated environment, verifying architecture compatibility and anomaly notification readiness without deploying to production.",
    },
    {
      q: "How do enterprises pay?",
      a: "Through subscription plans or contract-based bank transfers. The public website does not contain payment processing UIs.",
    },
    {
      q: "Can the service be disabled or removed at any time?",
      a: "Yes. Once disabled, it leaves no stored data or operational impact.",
    },
    { q: "Does it include AR or GPS features?", a: "No. AR or GPS-based features are not included." },
    {
      q: "Will it read or download website images or content?",
      a: "No. It never downloads or stores website images or content externally. It only references public structure presentation for governance suggestions.",
    },
    { q: "Will it copy or clone enterprise systems?", a: "No. It does not copy or clone enterprise systems." },
    {
      q: "Does it read POS/WooCommerce/Stripe accounts?",
      a: "No. It never reads or stores financial account or transaction data.",
    },
    {
      q: "Does it support multi-language toggles?",
      a: "Yes. The frontend reserves language toggle UI placements but defaults to Traditional Chinese display.",
    },
    {
      q: "Will it read or store logs?",
      a: "It can visualize logs for governance anomaly warnings, but does not store or infer content externally without authorization.",
    },
    { q: "Will it expand architecture automatically?", a: "No. It does not self-expand architecture." },
    { q: "Will it expose model parameters?", a: "No. It never exposes model parameters externally." },
    { q: "Will disabling Sentinel affect other modules?", a: "No. Disabling Sentinel does not affect other modules." },
    {
      q: "Does it interfere with revenue or commercial decisions?",
      a: "No. It does not interfere with enterprise revenue or commercial decisions.",
    },
    {
      q: "Does it store device fingerprints or IP data?",
      a: "No. It does not read or store device fingerprints or IP identification data.",
    },
    {
      q: "Does it include FailSafe?",
      a: "Yes, but FailSafe details remain internal and are not disclosed externally.",
    },
    {
      q: "Is Lookbook reservable in frontend?",
      a: "Yes. The frontend can reserve Lookbook display blocks without AR/camera content.",
    },
    { q: "Does it save database content?", a: "No. It does not fetch or store database content externally." },
    { q: "Does it affect L-Work workflow engine?", a: "No. It does not affect workflow engine operations." },
    { q: "Does it include GPS or street AR?", a: "No. GPS or street AR is not included." },
    {
      q: "Will it fetch cloud database content automatically?",
      a: "No. It does not fetch or store cloud database content externally.",
    },
    {
      q: "Is it public read-only?",
      a: "Yes. The frontend is public, readable, and read-only, not containing internal system terminology.",
    },
    {
      q: "Will it provide UI entry placements?",
      a: "Yes. UI entry placements exist in architecture but remain hidden or disabled on public frontend.",
    },
    { q: "Does it replace engineers or decision makers?", a: "No. It is a governance and control tool only." },
    { q: "Does it contain exaggerative claims?", a: "No. It uses a conservative, neutral enterprise-trust tone." },
    {
      q: "Will it read or store personal identifiable data?",
      a: "No. It never reads or stores personal identifiable data.",
    },
    {
      q: "Will it disturb Mall, Game, or Workflow operations?",
      a: "No. It will not disturb Mall, Game, or L-Work workflow engine operations.",
    },
    { q: "Does it include AR or camera features?", a: "No. It does not include AR or camera features." },
  ],
}

export default function FAQPage() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-background via-background to-blue-950/5">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {language === "zh" ? "常見問題" : "Frequently Asked Questions"}
            </h1>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-2xl border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/10 bg-transparent"
            >
              <Globe className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === "zh"
              ? "企業級 AI 治理平台問與答 - 了解 AIOS Guard 與 Sentinel Sovereign 的運作機制與安全邊界"
              : "Enterprise AI Governance Platform Q&A - Understanding AIOS Guard and Sentinel Sovereign operations and security boundaries"}
          </p>
        </motion.div>

        {/* Guard Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{language === "zh" ? "AIOS Guard" : "AIOS Guard"}</h2>
              <p className="text-muted-foreground">
                {language === "zh" ? "權限與 AI 行為治理" : "Permission & AI Behavior Governance"}
              </p>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-background/40 border border-border rounded-3xl p-8 shadow-xl shadow-blue-500/8">
            <Accordion type="single" collapsible className="space-y-4">
              {guardQA[language].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`guard-${index}`}
                  className="border border-border/50 rounded-2xl px-6 hover:border-blue-500/30 transition-all"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium pr-4">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        {/* Sentinel Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 border border-blue-400/30 flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{language === "zh" ? "Sentinel Sovereign" : "Sentinel Sovereign"}</h2>
              <p className="text-muted-foreground">
                {language === "zh" ? "系統狀態旁路監測與異常預警" : "System Status Monitoring & Anomaly Alerts"}
              </p>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-background/40 border border-border rounded-3xl p-8 shadow-xl shadow-blue-500/8">
            <Accordion type="single" collapsible className="space-y-4">
              {sentinelQA[language].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`sentinel-${index}`}
                  className="border border-border/50 rounded-2xl px-6 hover:border-blue-400/30 transition-all"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium pr-4">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-3xl p-12"
        >
          <h3 className="text-2xl font-bold mb-4">{language === "zh" ? "還有其他問題？" : "More Questions?"}</h3>
          <p className="text-muted-foreground mb-8">
            {language === "zh"
              ? "我們的團隊將在 24 小時內為您提供專業解答"
              : "Our team will provide professional answers within 24 hours"}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-3xl px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-blue-600 shadow-xl shadow-blue-500/15"
            >
              {language === "zh" ? "聯絡我們" : "Contact Us"}
            </Button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
