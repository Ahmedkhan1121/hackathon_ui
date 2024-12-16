import React from 'react'
import Cart from '../Cart/Cart'

function CartSection() {
  return (
    <section  className='px-14 py-10 flex flex-col items-center'>
      <h1 className='text-4xl pb-6'>Your shopping cart</h1>
      <Cart/>
    </section>
  )
}

export default CartSection
