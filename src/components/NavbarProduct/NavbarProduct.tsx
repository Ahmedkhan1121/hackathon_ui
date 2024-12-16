import React from 'react';
import NavLogoProduct from '../NavLogoProduct/NavLogoProduct';
import NavListProduct from '../NavListproduct/NavListProduct';
import NavIcons from '../NavIcons/NavIcons';
// Delivery
import { TbTruckDelivery } from "react-icons/tb";
// close
// import { IoCloseOutline } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";



function NavbarProduct() {
  return (
   <>
   
    <nav className='flex items-center justify-between py-[10px] px-[75px] border-b-2'>
      <NavLogoProduct/>
      <NavListProduct/>
      <NavIcons/>
    </nav>
   </>
  )
}

export default NavbarProduct
