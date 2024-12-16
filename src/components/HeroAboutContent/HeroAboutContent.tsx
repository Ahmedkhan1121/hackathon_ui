import React from 'react'
import HeroAboutButton from '../HeroAboutButton/HeroAboutButton'

function HeroAboutContent() {
  return (
    <div className='flex justify-around items-center h-[277px]'>
      <div className='w-[400px]'><h1>A brand built on the love of craftmanship,
      quality and outstanding customer service</h1></div>
      <HeroAboutButton btn='View our products'/>
    </div>
  )
}

export default HeroAboutContent
