import React from 'react'
import NavLogoProduct from '../NavLogoProduct/NavLogoProduct'
import ListItem from '../ListItem/ListItem'
import ListItemAbout from '../ListItemAbout/ListItemAbout'
import NavIcons from '../NavIcons/NavIcons'

function NavbarAbout() {
  return (
    <nav className=''>
    {/* div 1 */}
    <div className='flex justify-between items-center py-[20px] px-[30px]'>
        <NavLogoProduct/>
       <div className='flex items-center gap-6'>
        <ListItemAbout/>
        <NavIcons/>
       </div>
    </div>
    {/* div 2 */}
    <div className='bg-[#F9F9F9] py-[8px]' >
      <ListItem/>
    </div> 
    </nav>
    //   <NavIcons/>
  )
}

export default NavbarAbout
