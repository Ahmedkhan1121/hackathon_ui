import { Link } from 'lucide-react'
import React from 'react'

function HeroAboutButton({btn}:{btn:string}) {
  return (
    <div className=''>
      <button className='py-[18px] px-[26px] text-[#2A254B] bg-[#F9F9F9]'><Link href={`/product`}>{btn}</Link></button>
    </div>
  )
}

export default HeroAboutButton
