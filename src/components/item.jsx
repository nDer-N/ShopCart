import React, { useState } from 'react'
import chevron from '../assets/chevron.png'
import ex from '../assets/remove.png'

export default function Item({onClick, change}) {

    const [visible, setVisible] = useState(false);
    return (
        <div className='flex justify-center'>
            <div className='flex  flex-wrap justify-center border bg-white w-8/12 text-center m-2 rounded gap-2'>
                <div className='w-dvh flex justify-center'>
                    <h1 className='flex justify-center'>Josh's black?!?!?!?!</h1>
                </div>
                <button onClick={() => setVisible(!visible)} className='hover:cursor-pointer w-5 h-5 hover:bg-gray-200 rounded transition-all duration-[190ms]'>
                    {visible ? (<img src={ex}></img>) : (<img src={chevron}></img>)}

                </button>
                <div className='flex'>
                    {visible && (

                        <form className='flex flex-col gap-3' action="" onSubmit={onClick}>
                            <div className="flex items-center gap-2">
                                <label htmlFor='name' className="w-24 text-right">Name:</label>
                                <input type='text' placeholder='name' id='name' className="flex-1 border rounded px-2 py-1" onChange={change} />
                            </div>

                            <div className="flex items-center gap-2">
                                <label htmlFor='quantity' className="w-24 text-right">Quantity:</label>
                                <input type='number' placeholder='quantity' id='quantity' className="flex-1 border rounded px-2 py-1" onChange={change} />
                            </div>

                            <div className="flex items-center gap-2">
                                <label htmlFor='desc' className="w-24 text-right">Description:</label>
                                <input type='text' placeholder='desc' id='desc' className="flex-1 border rounded px-2 py-1" onChange={change} />
                            </div>

                            <div className="flex items-center gap-2">
                                <label htmlFor='img' className="w-24 text-right">Image:</label>
                                <input type='file' id='img' className="flex-1" onChange={change} />
                            </div>
                            <button onClick={()=>(onClick())}>SEND</button>
                        </form>

                        

                    )}
                </div>

            </div>
        </div>
    )
}
