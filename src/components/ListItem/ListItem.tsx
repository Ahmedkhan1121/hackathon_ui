import { navList } from '@/utils/hepler'
import Link from 'next/link'
import React from 'react'

function ListItem() {
  return (
    <ul className='flex items-center justify-center p-4 gap-6 text-[#726E8D]'>
     {
    navList.map((e,i)=>{
        return(<li key={i} className='capitalize hover:cursor-pointer'> <Link href={e.Link}>{e.List}</Link></li>)
    })
     }

    </ul>
  )
}

export default ListItem
