import { productList } from '@/utils/hepler'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductCard() {
  return (
    <div className='flex flex-wrap justify-around px-[35px] py-[20px] '>
     {
        productList.map((e)=>{
            return(
             <Link href={`/product/${e.id}`} key={e.id} >
                <div className='flex flex-col gap-3 pb-[20px]' >
                <div>
                <Image className='h-[375px] w-[305px]'
                src={e.imgUrl}
                alt='Product'
                height={200}
                width={200}
                />
                </div>
                <div className='flex flex-col gap-2'>
                    <h4>{e.name}</h4>
                    <p>{e.price}</p>
                 </div>
                </div>
             </Link>
            )
        })
     }
    </div>
  )
}

export default ProductCard
