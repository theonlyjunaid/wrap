import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [show, setShow] = useState("hidden");
    const hide = () => {
        if (show === "hidden") {
            setShow("")
        } else {
            setShow("hidden")
        }
    }
    return (
        <>
            <nav className='flex justify-between text-3xl h-[55px] bg-gray-400 items-center md:h-auto'>
                <div className='pl-2 text-4xl md:hidden' onClick={hide}>
                    {show === "hidden" ? <i class='bx bx-menu'></i> : <i class='bx bxs-chevrons-up'></i>}
                </div>
                <div className='text-bold first-letter:text-blue-600 md:text-4xl md:font-bold md:p-4'>SKINwala</div>
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
                <div className='pr-2 text-5xl md:hidden'><i class='bx bxl-whatsapp' ></i></div>
            </nav>
            <div className={` ${show}  front`}>
                <ul className='w-[100%]  bg-red-300 text-2xl  pl-4  '>

                    <li className='p-3' >
                        <Link href="/">
                            <a><i class='bx bx-home' ></i> Home</a>
                        </Link>
                    </li>
                    <hr />
                    <li className='p-3'>
                        <Link href="/">
                            <a><i class='bx bx-user' ></i> About Us</a>
                        </Link>
                    </li>
                    <hr />
                    <li className='p-3'>
                        <Link href="/">
                            <a><i class='bx bxl-whatsapp' ></i> Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Navbar