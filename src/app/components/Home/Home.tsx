import React from 'react'

import Hero from './Hero/Hero'
import LearnMore from './LearnMore/LearnMore'
import Video from './VideoAbout/Video'
import Community from './Community/Community'

const Home = () => {
  return (
    <div className='overflow-hidden'>

      <Hero/>
      <LearnMore/>
      <Video />
      <Community/>
    </div>
  )
}

export default Home
