import React from 'react'
import FooterMenu from '../FooterMenu/FooterMenu'
import FooterCategories from '../FooterCategories/FooterCategories'
import FooterOurCompany from '../FooterOurCompany/FooterOurCompany'
import FooterForm from '../FooterForm/FooterForm'
import FooterIcons from '../FooterIcons/FooterIcons'

function Footer() {
  return (
    <footer className='flex flex-col bg-[#2A254B] justify-around  p-[10px]'>
      
        
      
<div className='flex justify-around  py-[45px] px-[35px]'>
          <FooterMenu />
          
          <FooterCategories/>
    
          <FooterOurCompany/>
    
          <FooterForm/>
</div>
      {/* hr */}
     <div>
     <hr className=' border-[#4E4D93] w-[1277px] ' />
     </div>

      {/* parentdiv */}
     <div className='flex text-white items-center justify-between py-[20px] px-[40px]'>
      {/* child div */}
      <div>
        <p>Copyright 2022 Avion LTD</p>
      </div>
      {/* <icons */}
      <FooterIcons/>
     </div>
    </footer>

  )
}

export default Footer
