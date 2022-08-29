import React, { useState, useEffect } from 'react'

function Slide() {

    const [show, setShow] = useState(2);
    const slideNext = () => {
        if (show < 3) {
            setShow(show + 1)
        } else {
            setShow(1)
        }
    }
    const slidePrev = () => {
        if (show > 1) {
            setShow(show - 1)
        }
        else {
            setShow(3)
        }

    }


    return (

        <div className=' relative'>
            <div>
                <div className={`h-[260px] sm:h-[360px] md:h-[400px] lg:h-[490px] w-screen ${show === 1 ? "" : "hidden"}`} >
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" className='h-full w-full' />
                </div>

                <div className={`h-[260px] sm:h-[360px] md:h-[400px] lg:h-[490px] w-screen ${show === 2 ? "" : "hidden"}`}>
                    <img src="https://media.istockphoto.com/id/1254532152/photo/beautiful-single-tree-in-countryside-sunset.webp?s=2048x2048&w=is&k=20&c=cn_6Z37EIPPQ6Yek2GX4M-j8uZdlzd9bIABtz8WeVuY=" alt="" className='h-full w-full' />
                </div>

                <div className={`h-[260px] sm:h-[360px] md:h-[400px] lg:h-[490px] w-screen ${show === 3 ? "" : "hidden"}`}>
                    <img src="https://media.istockphoto.com/id/927859918/photo/sunset-in-autumn-with-tree.webp?s=2048x2048&w=is&k=20&c=GZUfEczkKHKYaKde3jhMy-cYLP8MBGXsnfS7u3PSvcI=" alt="" className='h-full w-full' />
                </div>
            </div>

            <button class="absolute top-0 left-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none" >

                <i class='bx bxs-chevron-left text-5xl text-gray-500 hover:text-black' onClick={slidePrev} ></i>

            </button>
            <button class="absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none" >

                <i class='bx bxs-chevron-right text-5xl text-gray-500 hover:text-black' onClick={slideNext}  ></i>


            </button>

        </div>

    )
}

export default Slide