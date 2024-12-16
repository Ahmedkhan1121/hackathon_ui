import Image from 'next/image'
import React from 'react'

function AboutGlobalBrandImg() {
  return (
     <div>
          <Image className='h-screen'
          src={`/images/globleBrand/9e782fdeef5f60eca5a47456ecfd4df1.jpeg`}
          alt='global brand'
          height={100}
          width={720}
          />
    
        </div>
  )
}

export default AboutGlobalBrandImg
