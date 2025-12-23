import Footer from '@/components/Landing/Footer'
import Header from '@/components/Landing/Header'
import HeroSection from '@/components/Landing/HeroSection'
import HowItWorks from '@/components/Landing/HowItWorks'
import PricingSection from '@/components/Landing/PricingSection'
import WhatToAsk from '@/components/Landing/WhatToAsk'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const Landing = async  () => {
  const user = await currentUser()

  const adminEmail = process.env.ADMIN_EMAIL;

  if(user?.emailAddresses[0].emailAddress === adminEmail){
    redirect("/admin/dashboard")
  }

  if(user){
    redirect("/dashboard")
  }

  return (
    <div>
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default Landing