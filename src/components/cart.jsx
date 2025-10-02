import React from 'react'

export default function Cart({products, onClick}) {
  /*const products = [
    { name: "Camera", desc: "Professional Video Camera", quantity: 4, id: 1, src: cam },
    { name: "Lens", desc: "Camera Lens", quantity: 4, id: 2, src: lens },
    { name: "Microphone", desc: "Stuido Microphone", quantity: 2, id: 3, src: mic },
    { name: "Tripod", desc: "Tripod camera support", quantity: 4, id: 4, src: tripod },
    { name: "Ring Light", desc: "Ring light compatible with Adroid and Apple phones", quantity: 2, id: 5, src: ring }
  ]*/
  return (
    <div className='flex flex-wrap justify-content fixed bottom-0 bg-cyan-950 w-dvw'>
      {products.map((product) => (
        <div className='flex shadow-md shadow-gray-600 bg-white w-2/14 text-center m-2 rounded relative' key={product.id}>
          
          <button onClick={()=>onClick(product.id)}className="w-10 h-10 absolute top-1 right-1 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-[200ms] rounded-full px-1 cursor-pointer ">
            ✕
          </button>
          <div className='p-2'>
          <p className='text-left mx-4'>{product.name}</p>
          <p className="text-center text-gray-400 mx-1"> Q: {product.quantity}</p>
          <img src={product.src} className='w-20 h-20'></img>
          </div>
          
          
        </div>
      ))}

    </div>
  )
}
