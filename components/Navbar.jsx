import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between text-3xl h-[55px] bg-gray-400 items-center'>
            <div>
                <i class='bx bx-menu' onClick={() => alert("hello")} ></i>
            </div>
            <div className='text-bold first-letter:text-blue-600'>SKINwala</div>
            <div className='hidden'>
                <button>Home</button>
                <button>About Us</button>
                <button><i class='bx bxl-whatsapp' ></i></button>
            </div>
            <div><i class='bx bxl-whatsapp' ></i></div>
        </nav>

    )
}

export default Navbar