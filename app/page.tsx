"use client"

import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ProductsOverview } from "@/components/products-overview"
import { TrustedBy } from "@/components/trusted-by"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden max-w-full">
      <HeroSection />
      <ValueProposition />
      <ProductsOverview />
      <TrustedBy />
      <CTASection />
    </main>
  )
}
