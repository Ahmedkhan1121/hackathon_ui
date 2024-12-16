import Form from 'next/form'
import React from 'react'

function H2SignUpSearchBar() {
  return (
    <>
  {/* <form action="" className='flex justify-center items-center pt-[55px] pb-[65px]'>

      <input className='bg-[#F9F9F9] p-5 w-[354px] py-4 ' type="text" name="" id="" placeholder='your@email.com'/>
  
    
      <button className='bg-[#2A254B] text-white py-4 px-[18px] '>Sign up</button>
    
  </form> */}

    <Form action=''  className='flex justify-center items-center pt-[55px] pb-[65px]'>
      <input className='bg-[#F9F9F9] p-5 w-[354px] py-4 outline-none '  required type="text" name="" id="" placeholder='your@email.com'/>
      <button type='submit' className='bg-[#2A254B] text-white py-3 px-[18px] '>Sign up</button>
      </Form>
  </>
  )
}

export default H2SignUpSearchBar
