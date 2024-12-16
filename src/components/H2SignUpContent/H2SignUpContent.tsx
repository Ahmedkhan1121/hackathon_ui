import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";

function H2SignUpContent() {
  return (
    <div className='flex flex-col gap-9 items-center text-center text-white'>
     <div className='flex flex-col gap-4 items-center  ' >
     <h2 className='w-[494px] text-3xl '>Join the club and get the benefits</h2>
      <p className='w-[410px] '>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
    </div> 
     <ul className='flex justify-center gap-6'>
       <li className='flex items-center gap-3 '><IoIosCheckmarkCircle /> Exclusive offers  </li>
       <li className='flex items-center gap-3 '><IoIosCheckmarkCircle /> Free events      </li>
       <li className='flex items-center gap-3 '><IoIosCheckmarkCircle /> Large discounts   </li>
    </ul> 
    </div>
  )
}

export default H2SignUpContent
