import React, { useState, Children } from 'react'
import Cart from './cart'
import Catalogue from './catalogue'
import Item from './item'
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

  const [item, setItem] = useState({
    name: "",
    quantity: 0,
    desc: "",
    src: null,
    id:Date.now()
  });

  const update = (e) => {
    const { id, value, files } = e.target;
    setItem({
      ...item,
      [id]: files ? URL.createObjectURL(files[0]) : value,
    });


  };
  const addNewItem = (item) => {
    //const current = [...products];

    //const Item = { name: item.name, desc: item.desc, quantity: item.quantity, src: URL.createObjectURL(item.src), id: (current.length + 1) }
    console.log(item)
    const newInv = [...products, item];
    setProducts(newInv);
    console.log(products)
    setItem({
    name: "",
    quantity: 0,
    desc: "",
    src: null,
    id:Date.now()
  })
  }

  const Event = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", item);
    addNewItem(item);

  }
  const [shopping, setShopping] = useState([]);

  const add = (id) => {
    const catalogue = [...products];

    const item = catalogue.find((p) => (p.id == id));

    if (shopping.length < 1 && item.quantity > 0) {
      const cart = [...shopping, { ...item, quantity: 1 }];
      setShopping(cart);
      catalogue.map((p) => (p.id == id ? p.quantity = p.quantity - 1 : p));

    } else if (item.quantity > 0) {
      const y = shopping.find((p) => (p.id == id));
      if (y) {
        const cart = [...shopping];
        cart.map((p) => (p.id == id) ? p.quantity = p.quantity + 1 : p)
        setShopping(cart);
        catalogue.map((p) => (p.id == id ? p.quantity = p.quantity - 1 : p));
      } else {
        const cart = [...shopping, { ...item, quantity: 1 }];
        setShopping(cart);
        catalogue.map((p) => (p.id == id ? p.quantity = p.quantity - 1 : p));
      }


    }


    setProducts(catalogue);

  }

  const remove = (id) => {
    const cat = [...products];
    const cart = [...shopping];
    const cart2 = cart.filter((p) => (p.id != id));
    const item = cart.find((p) => (p.id == id));
    cat.map((p) => (p.id == id ? p.quantity = p.quantity + item.quantity : p))
    setShopping(cart2);
    setProducts(cat);
  }

  return (
    <div>
      <Item onClick={Event} change={update}></Item>
      <Catalogue products={products} onClick={add}></Catalogue>
      <Cart onClick={remove} products={shopping} ></Cart>
    </div>
  )
}
