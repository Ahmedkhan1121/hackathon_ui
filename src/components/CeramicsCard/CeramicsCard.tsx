import { newCeramics } from '@/utils/hepler'
import Image from 'next/image'
import React from 'react'

function CeramicsCard() {
  return (
    <>
     {
      newCeramics.map((e)=>{
        return(
          <div>
             <Image className='w-[305px] h-[375px]'
            src={e.imgUrl}
            alt='Ceramics Img'
            height={200}
            width={200}
            />
            <h4>{e.heading}</h4>
            <p>{e.price}</p>
          </div>
        )
      })
     }

    </>
  )
}

export default CeramicsCard
