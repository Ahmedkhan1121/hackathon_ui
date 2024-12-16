import React from 'react'
import SignUpContent from '../SignUpContent/SignUpContent'
import SignUpSearchBar from '../SignUpSearchBar/SignUpSearchBar'

function SignUp() {
  return (
    //is me text ko center  
    <section className='bg-[#F9F9F9]  flex justify-center py-[60px] '>
      
      <div className='bg-white w-[1173px] pt-[50px]'>
      <SignUpContent/>

      <SignUpSearchBar />
      </div>
      
    </section>
  )
}

export default SignUp
