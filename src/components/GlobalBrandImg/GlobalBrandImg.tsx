import Image from 'next/image'
import React from 'react'

function GlobalBrandImg() {
  return (
    <div>
      <Image className='h-screen'
      src={`/images/globleBrand/6ec9d1d8cc3cbaace9b398067e11a4af.jpeg`}
      alt='global brand'
      height={100}
      width={720}
      />

    </div>
  )
}

export default GlobalBrandImg
