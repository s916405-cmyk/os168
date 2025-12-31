"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Eye } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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

export default function SentinelFAQPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-background via-background to-blue-950/5">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 border border-blue-400/30 flex items-center justify-center">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
            Sentinel Sovereign {language === "zh" ? "問與答" : "FAQ"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "zh"
              ? "系統狀態旁路監測與異常預警 - 了解 Sentinel Sovereign 的運作機制與安全邊界"
              : "System Status Monitoring & Anomaly Alerts - Understanding Sentinel Sovereign operations and security boundaries"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-background/40 border border-border rounded-3xl p-8 shadow-xl shadow-blue-500/8"
        >
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
        </motion.div>
      </div>
    </div>
  )
}
