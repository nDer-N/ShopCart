import React from 'react'

export default function Catalogue({products, onClick}) {

 /* const products = [
    { name: "Camera", desc: "Professional Video Camera", quantity: 4, id: 1, src: cam },
    { name: "Lens", desc: "Camera Lens", quantity: 4, id: 2, src: lens },
    { name: "Microphone", desc: "Stuido Microphone", quantity: 2, id: 3, src: mic },
    { name: "Tripod", desc: "Tripod camera support", quantity: 4, id: 4, src: tripod },
    { name: "Ring Light", desc: "Ring light compatible with Adroid and Apple phones", quantity: 2, id: 5, src: ring }
  ]*/

  return (
    <div className='flex flex-wrap justify-around  align-baseline m-4'>
      {products.map((product) => (

        <div className='flex justify-center shadow-md shadow-gray-500 border-0 rounded-3x1 w-3/12 text-center hover:cursor-pointer m-1 p-2 rounded gap-2' key={product.id}>
          <div className='text-justify m-3'>
            <h1 className='my-5 font-bold'>{product.name}</h1>
            <p className='text-gray-400'>{product.desc}</p>
            <p className='text-gray-600'>Cantidad:</p>
            <p className='text-blue-600'>{product.quantity}</p>
            <button onClick ={()=>onClick(product.id)}className="m-2 bg-yellow-400 hover:bg-yellow-500 active:scale-95 active:bg-orange-400 text-white font-bold py-2 px-4 rounded transition-all duration-[190ms] ease-in-out mt-2">
              Add to cart
            </button>

          </div>
          <div >
            <img src={product.src} className='w-60 h-60'></img>
          </div>

        </div>

      ))}


    </div>
  )
}
