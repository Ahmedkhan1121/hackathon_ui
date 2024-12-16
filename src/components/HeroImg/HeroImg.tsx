import Image from 'next/image'
import React from 'react'

function HeroImg() {
  return (
    <div>
      <Image 
        src={`/images/hero/b01e6c4660bc72629bd073b338a795ca.jpeg`}     
        alt='Chair'
        height={100}
        width={400}
      
      />
    </div>
  )
}

export default HeroImg
