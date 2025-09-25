import React from 'react'

export default function Catalogue() {

  const products = [
    {name: "Camera", quantity:4, id: 1234 },
    {name: "Lens", quantity:4, id: 1432},
    {name: "Microphone", quantity:2, id: 1322}
  ]

  return (
    <div className='flex flex-wrap justify-center align-baseline'>
      {products.map((product)=>(
         <div className='flex justify-center shadow-md shadow-gray-500 border rounded-2xl w-4/12 text-center hover:cursor-pointer' id={product.id}>
            <p>{product.name}</p>
        </div>
      )) }
       

    </div>
  )
}
