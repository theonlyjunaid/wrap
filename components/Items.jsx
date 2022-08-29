import React from 'react'
import Link from 'next/link'

function Items() {
    return (
        <div className=' grid grid-cols-2 gap-4 p-4 md:grid-cols-3'>

            <div className='mb-3'>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
            </div>

        </div>
    )
}

export default Items