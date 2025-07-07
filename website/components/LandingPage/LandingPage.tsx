import React from 'react'
import HeroSectionHome from './HeroSection/HeroSectionHome'
import AboutSectionHome from './AboutSection/AboutSectionHome'
import AdvocacySectionHome from './AdvocacySection/AdvocacySectionHome'
import ImapactSectionHome from './ImpactSection/ImapactSectionHome'
import DonateHome from './DonateSection/DonateHome'
import DetectionSectionHome from './DetectionSection/DetectionHome'
import QuickMenuHome from './QuickMenuSection/QuickMenuHome'
import PartnersHome from './Partners/PartnersHome'
import MotionTextStrip from './HeroSection/MotionTextStrip'
import UpcomingEventsSection from './UpcomingEventsSection/UpcomingEventsSection'

function LandingPage() {
  return (
    <div>
        <HeroSectionHome  />
        <AboutSectionHome />
        <AdvocacySectionHome />
        <ImapactSectionHome />
        <DonateHome />
        <DetectionSectionHome />
        <UpcomingEventsSection />
        <QuickMenuHome />
        <PartnersHome />
        {/* Add more sections as needed */}
    </div>
  )
}

export default LandingPage