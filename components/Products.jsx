import React from 'react'
import Link from 'next/link'

function Products() {
    return (
        <div className=' grid grid-cols-2 gap-4 p-4 md:grid-cols-3  lg:grid-cols-4 '>

            <div className='mb-3 border-red-300 border-2'>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
                <div>
                    <p className='px-2 text-sm'>Mate Black</p>
                    <div className='flex items-center'>
                        <p className=' px-2 text-xs line-through'>&#8377; 450 </p>
                        <p className=' px-2 text-sm '>&#8377; 250 </p></div>


                </div>
            </div>

        </div>
    )
}

export default Products