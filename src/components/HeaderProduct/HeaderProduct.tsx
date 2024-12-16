'use client';
import NavbarProduct from '../NavbarProduct/NavbarProduct'
import { usePathname } from 'next/navigation'

function HeaderProduct() {
  const  topBarPath  = usePathname()
  return (
    <div className={` `}>
      <NavbarProduct/>
    </div>
  )
}

export default HeaderProduct
