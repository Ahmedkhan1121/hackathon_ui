import Image from 'next/image'
import React from 'react'

function HeroImgProductList({img}:{img:string}) {
  console.log(img)
  return (
    <div>
      <Image className='w-[600px] h-[600px]'
      // 46e4914903f11d10ddf03117c8cfe3b6.jpeg
      // src={`/images/hero/46e4914903f11d10ddf03117c8cfe3b6.jpeg`}
      src={img}
      alt='Hero Img'
      height={200}
      width={200}
      />
    </div>
  )
}

export default HeroImgProductList
