import React from 'react'
import HeroSectionHome from './HeroSection/HeroSectionHome'
import AboutSectionHome from './AboutSection/AboutSectionHome'
import AdvocacySectionHome from './AdvocacySection/AdvocacySectionHome'
import ImapactSectionHome from './ImpactSection/ImapactSectionHome'

function LandingPage() {
  return (
    <div>
        <HeroSectionHome  />
        <AboutSectionHome />
        <AdvocacySectionHome />
        <ImapactSectionHome />
    </div>
  )
}

export default LandingPage