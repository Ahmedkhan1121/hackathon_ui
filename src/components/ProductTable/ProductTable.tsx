import Image from 'next/image'
import React from 'react'

function ProductTable() {
  return (
    <div className='flex gap-3'>
      <Image src='/images/productList/842fec031ef0c247df24214e05b47e70.jpeg' alt='productimg' height={10} width={70}/>
      <div className="flex flex-col gap-4 justify-center">
        <h4>Graystone vase</h4>
        <h6>£85</h6>
      </div>
    </div>
  );
};
export default ProductTable;