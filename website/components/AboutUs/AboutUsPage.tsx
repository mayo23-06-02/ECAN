import React from 'react'
import HeroSectionHome from './HeroSection/HeroSectionHome'
import MotionTextStrip from '../LandingPage/HeroSection/MotionTextStrip'
import DonateHome from '../LandingPage/DonateSection/DonateHome'
import OurJourneyHome from './OurJourney/OurJourneyHome'
import OurTeamHome from './OurTeamSection/OurTeamHome'
import BoardOfDirectors from './OurTeamSection/BoardOfDirectors'

function AboutUsPage() {
  return (
    <div>
      <HeroSectionHome />
      <MotionTextStrip />
      <OurJourneyHome />
      <OurTeamHome />
      <BoardOfDirectors />



      <div className='py-8 px-4 md:px-8 lg:px-16 xl:px-32'>
        <DonateHome showImage={false} />
      </div>
    </div>
  )
}

export default AboutUsPage