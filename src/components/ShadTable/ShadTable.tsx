import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import ProductTable from '../ProductTable/ProductTable'
import CartQuantity from '../CartQuantity/CartQuantity'
  
function ShadTable() {
  return (
    <>
      <Table className=' '>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Product</TableHead>
      <TableHead className='text-right'>Quantity</TableHead>
      {/* <TableHead>Method</TableHead> */}
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className=""><ProductTable/></TableCell>
      <TableCell className=' flex justify-end relative top-6 left-7 '><CartQuantity/></TableCell>
      {/* <TableCell>Credit Card</TableCell> */}
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </>
  )
}

export default ShadTable
