import { menuFooterlist } from '@/utils/hepler'
import React from 'react'

function FooterMenu() {
  return (
   <div>
     <h4 className='text-white font-bold pb-3 '>Menu</h4>
     <ul className='flex flex-col gap-3' >
      {
        menuFooterlist.map((e)=>{
            return(<li className='text-white' key={e.id}>{e.list}</li>  )
        })
      }
    </ul>
   </div>
  )
}

export default FooterMenu
