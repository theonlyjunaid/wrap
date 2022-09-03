import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [show, setShow] = useState("hidden");
    const [showb, setShowb] = useState("bg-gray-200");
    const hide = () => {
        if (show === "hidden") {
            setShow("")
            setShowb("bg-white")

        } else {
            setShowb("bg-gray-200")
            setShow("hidden")
        }
    }
    return (
        <>
            <nav className={`flex justify-between text-3xl h-[55px] ${showb} items-center md:h-auto`}>
                <div className='pl-2 text-4xl md:hidden' onClick={hide}>
                    {show === "hidden" ? <i className='bx bx-menu'></i> : <i className='bx bxs-chevrons-up'></i>}
                </div>
                <Link href="/">
                    <a> <div className='text-bold first-letter:text-blue-600 md:text-4xl md:font-bold md:p-4'>SKINwala</div></a>
                </Link>
                <div className='hidden md:flex list-none	'>
                    <li className='p-3' >
                        <Link href="/">
                            <a> Home</a>
                        </Link>
                    </li>
                    <hr />
                    <li className='p-3'>
                        <Link href="/">
                            <a> About Us</a>
                        </Link>
                    </li>
                    <hr />
                    <li className='p-3'>
                        <Link href="/">
                            <a> Contact</a>
                        </Link>
                    </li>
                </div>
                <div className='pr-2 text-5xl md:hidden'><i className='bx bxl-whatsapp' ></i></div>
            </nav>
            <div className={` ${show}  front`}>
                <ul className='w-[100%]  bg-white text-2xl  pl-4 pr-4 divide-y text-center cursor-pointer'>

                    <Link href="/">
                        <li className='p-3' >
                            <a><i className='bx bx-home' ></i> Home</a>
                        </li>

                    </Link>
                    <Link href="/">
                        <li className='p-3'>
                            <a><i className='bx bx-user' ></i> About Us</a>
                        </li>
                    </Link>

                    <Link href="/">
                        <li className='p-3'>
                            <a><i className='bx bxl-whatsapp' ></i> Contact</a>
                        </li>
                    </Link>
                </ul>
            </div>
        </>

    )
}

export default Navbar