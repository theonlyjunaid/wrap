import React, { useEffect } from 'react'
import Link from 'next/link'
import { getItemCategories } from '../service/Data'




function Items() {
    const Catogary = getItemCategories.map((item, index) => {
        return (
            <div className='mb-3' key={index}>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src={item.Image} alt={item.Name}
                        className='hover:-hue-rotate-60' /></a>
                </Link>
            </div>
        )
    })
    console.log(getItemCategories)

    return (
        <div className=' grid grid-cols-2 gap-4 p-4 md:grid-cols-3 md:m-6'>
            {Catogary}
        </div>
    )
}

export default Items