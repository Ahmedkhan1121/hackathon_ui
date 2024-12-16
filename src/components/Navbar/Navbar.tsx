import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import NavList from '../NavList/NavList';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className=''>
      {/* SearchIcon */}
    <div className='flex justify-between p-4  border-b-2 border-[#e8e8e8]'>
    <div className='flex items-center hover:cursor-pointer'><IoIosSearch /></div>

      {/* logoName */}
      <div>
      <h2 className='text-2xl hover:cursor-pointer'><Link href={`/`}>Avion</Link></h2>  
      </div>

     {/* icons */}
      <div className='flex items-center gap-4  hover:cursor-pointer '>
      <RiShoppingCart2Line />
      <CgProfile />
      </div>

    </div>

    {/* navList2 */}
    
    <NavList/>
    
    </nav>
  )
}

export default Navbar
