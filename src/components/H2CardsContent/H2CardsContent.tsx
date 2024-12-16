import Link from 'next/link'
import React from 'react'

function H2CardsContent() {
  return (
    // parent div
    <div className='flex flex-col justify-between w-[634px] h-[478px] bg-[#2A254B] text-white p-[60px]'>
        <div className='flex flex-col gap-4'>
        <h2 className='text-3xl w-[383px]'>It started with a small idea</h2>
        <p className='w-[495px]'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
      </div>
        {/* button */}
      <div>
      <button className='py-3 px-7 bg-[#F9F9F926] text-white'> <Link href={`/product`}>View collection</Link> </button>
      </div>
    </div>
  )
}

export default H2CardsContent
