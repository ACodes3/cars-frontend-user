import React from 'react'
import HeroCard from '../Components/HeroCard'
import AboutUsHomeCard from '../Components/HomePageComponents/AboutUsHomeCard'
import Cars from '../Components/HomePageComponents/Cars'

const HomePage = () => {
  return (
    <div>
        <HeroCard />
        <AboutUsHomeCard />
        <Cars />
    </div>
  )
}

export default HomePage