import { aboutNavList } from '@/utils/hepler'
import Link from 'next/link'
import React from 'react'

function ListItemAbout() {
  return (
    <ul className='flex gap-4 text-[#726E8D]'>
      {
        aboutNavList.map((e,i)=>{
            return <li key={i}><Link href={e.Link}>{e.List}</Link></li>
        })
      }
    </ul>
  )
}

export default ListItemAbout
