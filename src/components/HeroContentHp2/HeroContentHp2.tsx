import React from 'react'

// ya homepage2 ke hero ka content ka component he 

function HeroContentHp2() {
  return (
    <div className='flex flex-col justify-between p-[45px] bg-white w-[630px] h-[434px] '>
      <div className='flex flex-col gap-5'>
        <h2 className='w-[513px] text-3xl font-bold text-[#22202E]'>Luxury homeware for people who love timeless design quality</h2>
        <p className='w-[343px] text-[#5B5676]'>Shop the new Spring 2022 collection today</p>
      </div>

      <div>
      <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'>View collection</button>
      </div>
    </div>
  )
}

export default HeroContentHp2
