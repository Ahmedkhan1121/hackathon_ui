import React from 'react'
import OurPopularProductsCard from '../OurPopularProductsCard/OurPopularProductsCard'

function OurPopularProducts() {
  return (
    <section className='flex flex-col gap-7 p-[40px] py-[30px]'>

    <div className='pl-[30px]'>
      <h2 className='text-2xl font-bold'>Our popular products</h2>
  </div>
  {/* New ceramics card */}

    <div className='flex justify-around '>
      <OurPopularProductsCard/>
    </div>
    {/* button */}
    <div className='text-center'>
      <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'>View collection</button>
    </div>
  </section>
  )
}

export default OurPopularProducts
