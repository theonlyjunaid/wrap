import React from 'react'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
function Recommend() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 640 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
        },
    };
    const post = [

    ]
    return (
        <div className='flex overflow-auto '>
            <div className='mb-3 border-red-300 border-2 '>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
                <div>
                    <p className='px-2 text-sm'></p>
                    <div className='flex items-center'>
                        <p className=' px-2 text-xs line-through'>&#8377; 450 </p>
                        <p className=' px-2 text-sm '>&#8377; 250 </p></div>
                </div>
            </div>
            <div className='mb-3 border-red-300 border-2 '>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
                <div>
                    <p className='px-2 text-sm'></p>
                    <div className='flex items-center'>
                        <p className=' px-2 text-xs line-through'>&#8377; 450 </p>
                        <p className=' px-2 text-sm '>&#8377; 250 </p></div>
                </div>
            </div>
            <div className='mb-3 border-red-300 border-2 '>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
                <div>
                    <p className='px-2 text-sm'></p>
                    <div className='flex items-center'>
                        <p className=' px-2 text-xs line-through'>&#8377; 450 </p>
                        <p className=' px-2 text-sm '>&#8377; 250 </p></div>
                </div>
            </div>
            <div className='mb-3 border-red-300 border-2 '>
                <Link href={`/post/${1 + 1}`}>
                    <a > <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" className='hover:-hue-rotate-60' /></a>
                </Link>
                <div>
                    <p className='px-2 text-sm'></p>
                    <div className='flex items-center'>
                        <p className=' px-2 text-xs line-through'>&#8377; 450 </p>
                        <p className=' px-2 text-sm '>&#8377; 250 </p></div>
                </div>
            </div>

        </div>
    )
}

export default Recommend