import React from 'react'
import HeroImgProductList from '../HeroImgProductList/HeroImgProductList'
import HeroContentProductList from '../HeroContentProductList/HeroContentProductList'

function HeroProductList({img,name,price}:{img:string,name:string,price:string}) {
  return (
    <section className='flex justify-between items-center'>
      <HeroImgProductList img={img}/>
      <HeroContentProductList name={name}  price={price} />
    </section>
  )
}

export default HeroProductList
