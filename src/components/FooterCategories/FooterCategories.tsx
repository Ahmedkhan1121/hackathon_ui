import { categoriesFooterlist } from '@/utils/hepler'
import React from 'react'

function FooterCategories() {
  return (
    <div>
      <h4 className='text-white font-bold pb-3'>Categories</h4>
    <ul className='flex flex-col gap-3'>
     {
        categoriesFooterlist.map((e)=>{
            return(<li className='text-white'>{e.list}</li>)
        })
     } 
    </ul>
    </div>
  )
}

export default FooterCategories
