import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import React from 'react'
  
  function SelectBar() {
    return (
      <nav className="bg-white flex justify-between py-[16px] px-[25px]" >
        <div className="flex gap-1">
        <Select>
        <SelectTrigger className="w-[130px] border-none">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      {/* Product type */}
      <Select>
        <SelectTrigger className="w-[130px] border-none"> 
          <SelectValue placeholder='Product type'  />
        </SelectTrigger>
      <SelectContent>
        <SelectItem value="sofa">Sofa</SelectItem>
        <SelectItem value="chair">Chair</SelectItem>
      </SelectContent>
      </Select>
      {/* Price */}
      <Select>
        <SelectTrigger className="w-[130px] border-none"> 
          <SelectValue placeholder='Price'  />
        </SelectTrigger>
      <SelectContent>
        <SelectItem value="100$ To 300$">100$ To 300$</SelectItem>
        <SelectItem value="300$ To 600$">300$ To 600$</SelectItem>
      </SelectContent>
      </Select>
      {/* Brand */}
      <Select>
        <SelectTrigger className="w-[130px] border-none"> 
          <SelectValue placeholder='Brand'  />
        </SelectTrigger>
      <SelectContent>
        <SelectItem value="nike">Nike</SelectItem>
        <SelectItem value="addidas">Addidas</SelectItem>
      </SelectContent>
      </Select>
        </div>

        <div className="flex items-center">
          <h4>Sorting by:</h4>
          {/* Date added */}
          <Select>
        <SelectTrigger className="w-[140px] border-none"> 
          <SelectValue placeholder='Date added'  />
        </SelectTrigger>
      <SelectContent>
        <SelectItem value="nike">Nike</SelectItem>
        <SelectItem value="addidas">Addidas</SelectItem>
      </SelectContent>
      </Select>
        </div>
      </nav>
    )
  }
  
  export default SelectBar
  

  