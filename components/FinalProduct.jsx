import React from 'react'
import Link from 'next/link'

function FinalProduct() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7 m-8'>
            <div className=''>
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60 h-full w-full' />
            </div>
            <div>
                <p className='text-xl font-semibold md:text-3xl'>Matte Orange</p>
                <div className='flex'><p className='mr-2 font-semibold w-20px h-10px bg-red-300 px-2'>4.4 </p> 10 Rating &amp; 4 Reviews</div>
                <div className='flex items-center md:my-5 '>
                    <p className=' px-2 text-md md:text-xl line-through'>&#8377; 450 </p>
                    <p className=' px-2 text-lg md:text-2xl '>&#8377; 250 </p>
                </div>
                <div>
                    <ul>
                        <li>Polymer based</li>
                        <li>Polymer based</li>
                        <li>Polymer based</li>
                        <li>Polymer based</li>
                    </ul>
                </div>

                <a href='https://wa.me/p/4813941492040861/918799796185' target="_blank" >
                    <div className='text-3xl w-100% bg-gray-500 hover:bg-gray-700 p-1 text-center  items-center my-4 md:font-semibold md:my-5'> Buy Now <i className='bx bxl-whatsapp px-4 text-4xl' ></i>  </div>
                </a>
            </div>
        </div>
    )
}

export default FinalProduct