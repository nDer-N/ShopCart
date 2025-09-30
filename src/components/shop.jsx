import React, { useState, Children } from 'react'
import Cart from './cart'
import Catalogue from './catalogue'
import cam from '../assets/Camera.png'
import lens from '../assets/lens.jpg'
import mic from '../assets/microphone.jpg'
import tripod from '../assets/tripod.jpg'
import ring from '../assets/ring_light.png'

export default function Shop() {
  const [products, setProducts] = useState([
    { name: "Camera", desc: "Professional Video Camera", quantity: 4, id: 1, src: cam },
    { name: "Lens", desc: "Camera Lens", quantity: 4, id: 2, src: lens },
    { name: "Microphone", desc: "Stuido Microphone", quantity: 2, id: 3, src: mic },
    { name: "Tripod", desc: "Tripod camera support", quantity: 4, id: 4, src: tripod },
    { name: "Ring Light", desc: "Ring light compatible with Adroid and Apple phones", quantity: 2, id: 5, src: ring }
  ])

  const [shopping, setShopping] = useState([]);

  const add = (id) => {
    const catalogue = [...products];

    const item = catalogue.find((p) => (p.id == id));

    
    const cart = [...shopping, item];
    setShopping(cart);
    


  }

  const remove = (id) => {
    const cart = [...shopping];
    
    setShopping(cart);
  }

  return (
    <div>
      <Catalogue products={products} onClick={add}></Catalogue>
      <Cart onClick={remove} products={shopping}></Cart>
    </div>
  )
}
