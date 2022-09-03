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
                    <img src="https://riggear-web-images.s3.ap-south-1.amazonaws.com/UploadImages/Realme-Realme%207-Skins-4452b2d4-0b06-492e-a09d-83d054d1f68c_big.jpg" alt="" className='h-full w-full' />
                </div>

                <div className={`h-[260px] sm:h-[360px] md:h-[400px] lg:h-[490px] w-screen ${show === 2 ? "" : "hidden"}`}>
                    <img src="https://www.androidauthority.com/wp-content/uploads/2020/08/gadgetshieldz-skinnova.jpg" alt="" className='h-full w-full' />
                </div>

                <div className={`h-[260px] sm:h-[360px] md:h-[400px] lg:h-[490px] w-screen ${show === 3 ? "" : "hidden"}`}>
                    <img src="https://skinsy.in/wp-content/uploads/2022/05/Samsung-Galaxy-S21-Ultra-Black-Hive-Skin.webp" alt="" className='h-full w-full' />
                </div>
            </div>

            <button className="absolute top-0 left-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none" >

                <i className='bx bxs-chevron-left text-5xl text-gray-500 hover:text-black' onClick={slidePrev} ></i>

            </button>
            <button className="absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none" >

                <i className='bx bxs-chevron-right text-5xl text-gray-500 hover:text-black' onClick={slideNext}  ></i>


            </button>

        </div>

    )
}

export default Slide