import React, {Children } from 'react'
import Cart from './cart'
import Catalogue from './catalogue'
import Item from './item'

import { Routes, Route } from "react-router";

export default function Shop() {
  

  return (
    <div>
      <Routes>
        <Route path="/addItem" element={<Item ></Item>}/>
        <Route path="/" element={<Catalogue ></Catalogue>} />
        <Route path="/cart" element={<Cart ></Cart>} />
      </Routes>
    </div>
  )
}
