import React from 'react'
import Link from 'next/link'

function Footer() {

    return (
        <>
            <div className='w-full  bg-gray-600 text-center sm:hidden' >
                <div className='text-4xl font-bold first-letter:text-blue-800'>SKINwala</div>
                <div className=''><i class='bx bxl-whatsapp text-4xl' ></i> 7827152956</div>
                <div className='text-3xl justify-evenly flex'><i class='bx bxl-instagram'></i><i class='bx bxl-facebook-circle' ></i><i class='bx bxl-youtube' ></i></div>
                <div className='text-3xl'>How to apply?</div>
                <div className='flex justify-around'>
                    <div className='grid grid-cols-1'>
                        <Link href="/">
                            <a>hello</a>
                        </Link>
                        <Link href="/">
                            <a>hello</a>
                        </Link>
                        <Link href="/">
                            <a>hello</a>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1'>
                        <Link href="/">
                            <a>hello</a>
                        </Link>
                        <Link href="/">
                            <a>hello</a>
                        </Link>
                        <Link href="/">
                            <a>hello</a>
                        </Link>
                    </div>

                </div>
            </div>
            <div className='w-full  bg-gray-600 text-center hidden sm:flex divide-x p-10' >
                <div>
                    <div className='text-4xl font-bold first-letter:text-blue-800'>SKINwala</div>
                    <div className='flex justify-around'>
                        <div className='grid grid-cols-1'>
                            <Link href="/">
                                <a>hello</a>
                            </Link>
                            <Link href="/">
                                <a>hello</a>
                            </Link>
                            <Link href="/">
                                <a>hello</a>
                            </Link>
                        </div>
                        <div className='grid grid-cols-1'>
                            <Link href="/">
                                <a>hello</a>
                            </Link>
                            <Link href="/">
                                <a>hello</a>
                            </Link>
                            <Link href="/">
                                <a>hello</a>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className=''><i class='bx bxl-whatsapp text-4xl' ></i> 7827152956</div>
                <div className='text-3xl justify-evenly flex'><i class='bx bxl-instagram'></i><i class='bx bxl-facebook-circle' ></i><i class='bx bxl-youtube' ></i></div>
                <div className='text-3xl'>How to apply?</div>

            </div>
        </>
    )
}

export default Footer