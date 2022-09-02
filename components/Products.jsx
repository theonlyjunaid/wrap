import React from 'react'

import Link from 'next/link'
import { getItemsByCategories } from '../service/Data'

function Products(props) {

    const Category = props.category
    const ItemData = getItemsByCategories[Category]


    const Items = ItemData.map((item, index) => {
        return (
            <div className='mb-3 border-red-300 border-2' key={index}>
                <Link href={`/post/product/${1 + 1}`}>
                    <a > <img src={item.Image} /></a>
                </Link>

            </div>)
    })
    return (
        <div className=' grid grid-cols-2 gap-4 p-4 md:grid-cols-3  lg:grid-cols-4 '>
            {Items}
        </div>
    )
}

export default Products