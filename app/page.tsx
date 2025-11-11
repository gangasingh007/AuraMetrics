import Cta from "@/components/Landing/Cta"
import Footer from "@/components/Landing/Footer"
import Header from "@/components/Landing/Header"
import HeroSection from "@/components/Landing/HeroSection"
import HowItWorks from "@/components/Landing/HowItWorks"
import PricingSection from "@/components/Landing/PricingSection"
import WhatToAsk from "@/components/Landing/WhatToAsk"

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <Cta />
      <Footer />
    </div>
  )
}

export default page