import React from 'react'
import { useNavigate } from 'react-router';

export default function Navbar() {
  const nav = useNavigate();
  return (
    <div className='flex flex-wrap justify-center bg-cyan-950 text-white p-10'>
      <a onClick={() => nav("/cart")}><p className='font-bold text-9x1'>Shopping Cart</p></a>
      <a onClick={() => nav("/")}><p className='font-bold text-9x1'>Catalogue</p></a>
      <a onClick={() => nav("/addItem")}><p className='font-bold text-9x1'>Add Item</p></a>
    </div>
  )
}

