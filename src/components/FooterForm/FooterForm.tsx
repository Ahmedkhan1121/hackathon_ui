import Form from 'next/form'
import React from 'react'

function FooterForm() {
  return (
    <>
     {/* <form action="" >
        <h4 className='text-white pb-[20px]'>Join our mailing list</h4>
    <input className='py-3 p-5 w-[509px] bg-[#4a4666] text-white' type="text" name="" id="" placeholder='your@email.com' />   
    <button className='text-[#2A254B] bg-white py-3 px-[18px] '>Sign up</button>
    </form>  */}

      <Form action=''>
      <h4 className='text-white pb-[20px]'>Join our mailing list</h4>
          <input className='py-3 p-5 w-[509px] bg-[#4a4666] text-white outline-none'  required type="text" name="" id="" placeholder='your@email.com'/>
          <button type='submit' className='text-[#2A254B] bg-white py-3 px-[18px] '>Sign up</button>
      </Form>
    </>
  )
}

export default FooterForm
