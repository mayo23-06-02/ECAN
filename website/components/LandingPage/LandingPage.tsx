import React from 'react'
import HeroSectionHome from './HeroSection/HeroSectionHome'
import AboutSectionHome from './AboutSection/AboutSectionHome'
import AdvocacySectionHome from './AdvocacySection/AdvocacySectionHome'

function LandingPage() {
  return (
    <div>
        <HeroSectionHome  />
        <AboutSectionHome />
        <AdvocacySectionHome />
    </div>
  )
}

export default LandingPage