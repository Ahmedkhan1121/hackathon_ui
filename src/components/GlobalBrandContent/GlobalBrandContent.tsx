import React from 'react'

function GlobalBrandContent() {
  return (
    <div className='p-[70px] flex flex-col justify-between'>
        {/* content div */}
        <div className='flex flex-col gap-6'>
        
            <h1  className=' text-3xl  w-[536px]'>From a studio in London to a global brand with
            over 400 outlets</h1>
        
         {/* Peragraf div */}
        
         <p  className='w-[536px] text-[#505977]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
         <p  className='w-[536px] text-[#505977]'> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
         
        </div>
        {/* button */}
        <div>
       <button className='py-3 px-7 bg-[#F9F9F9] text-[#2A254B]'>View collection</button>
        </div>
    </div>
  )
}

export default GlobalBrandContent
