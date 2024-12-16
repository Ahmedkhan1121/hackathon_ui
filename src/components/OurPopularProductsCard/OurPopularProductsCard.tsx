import { ourPopularProducts } from '@/utils/hepler'
import Image from 'next/image'
import React from 'react'

function OurPopularProductsCard() {
  return (
    <>
    {
      ourPopularProducts.map((e)=>{
        return(

        
    
            <div className='flex flex-col gap-3'>
                
                {/* <Image className='w-[505px] h-[375px]'
                src={`/images/Ourpopularproducts/b19dc98ccde98dc5e1e2fb1bd0dc3b72.jpeg`}
                alt='The Poplar suede sofa'
                height={200}
                width={200}
                
                /> */}
                {/* w-[305px] */}
             <Image className={`  h-[375px] `}
             style={{width:e.with}}
            src={e.imgUrl}
            alt='Ceramics Img'
            height={200}
            width={200}
            
            />
            <h5>{e.heading}</h5>
            <p>{e.price}</p>
           
          </div>
          
        )
      })
     }  
    </>
  )
}

export default OurPopularProductsCard
