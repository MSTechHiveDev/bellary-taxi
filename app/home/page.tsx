import Hero from '@/components/Home/Hero'
import WhyChooseUs from '@/components/Home/WhyUs'
import Services from '@/components/Home/Services'
import Pricing from '@/components/Home/Pricing'
import Testimonials from '@/components/Home/Testimonials'
import CTA from '@/components/Home/CTA'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  )
}

export default page