import Link from 'next/link'
import React from 'react'

function HeroContent() {
  return (

    <div className='bg-[#2A254B] w-[800px] flex flex-col'>
{/* 
      is me gap lagane ka leya flez or flex-col laya her ot button ko strt me karne ka leya item stat 
      keta he q ka jab flex-col  huta he to item- xn par kam karta he  */}
        <div className='p-14 flex flex-col gap-12 items-start' >
      <h1 className='text-white text-3xl font-bold w-[450px]'>The furniture brand for the future, with timeless designs</h1>
      <button className='py-3 px-7 bg-[#F9F9F926] text-white'><Link href={`/product`}>View collection</Link></button>
    </div>

    {/* peragraf */}

    <div className='pl-14 pt-16  w-500px'>
      <p className='text-white'>A new era in eco friendly furniture with Avelon, the French luxury retail 
      brand with nice fonts, tasteful colors and a beautiful way to display things digitally 
      using modern web technologies.</p>
    </div>

    </div>
  )
}

export default HeroContent
