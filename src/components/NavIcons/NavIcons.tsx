import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

function NavIcons() {
  return (
    <div className='flex gap-3'>
      <IoIosSearch />
      <RiShoppingCart2Line />
      <CgProfile />
    </div>
  )
}

export default NavIcons
