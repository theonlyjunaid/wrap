import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle,AiOutlineSearch, AiOutlinePlusCircle, AiOutlineMinusCircle ,AiOutlineMenu} from 'react-icons/ai'
import {FaRegUserCircle,FaUserCircle} from 'react-icons/fa'
const Navbar2 = ({user}) => {
  return (
    <nav className='flex justify-between  align-middle items-center px-5 pl-7 h-[64px] bg-white shadow-lg '>
   <div>
    <Link href="/"><a><h1 className='text-xl cursor-pointer'>Wrap</h1></a></Link>
   </div>
 

   <div className='flex items-center text-2xl gap-6 lg:hidden'>
   <Link href="/cart"><a><AiOutlineShoppingCart className='cursor-pointer'/></a></Link> 
   <AiOutlineSearch className='cursor-pointer'/>
   <AiOutlineMenu className='cursor-pointer'/>
   </div>
    <div className='hidden lg:flex items-center text-2xl gap-6 font-neue'>
    <Link href="/"><a><h1 className='text-xl cursor-pointer'>Home</h1></a></Link>
    <Link href="/skin"><a><h1 className='text-xl cursor-pointer'>Skin</h1></a></Link>
    <Link href="/about"><a><h1 className='text-xl cursor-pointer'>About</h1></a></Link>
    <Link href="/privacy"><a><h1 className='text-xl cursor-pointer'>Privacy</h1></a></Link>
    <Link href="/login"><a><h1 className='text-xl cursor-pointer'>Login</h1></a></Link>
    </div>
    <div className='hidden lg:flex items-center relative gap-4 text-2xl'>   
    <AiOutlineSearch className='cursor-pointer absolute ml-3 text-2xl '/>
    <input type="text"  className='border flex items-center rounded-[100px] py-2 px-[48px] w-[180px] cursor-text h-10 bg-[#f5f5f5] text-lg text-gray-600' placeholder='Search' onClick={()=>alert("clciked")}/>
   {!user.value && <FaRegUserCircle/>}
   {user.value && <FaUserCircle/>}
    <Link href="/cart"><a><AiOutlineShoppingCart className='cursor-pointer'/></a></Link>
    
    </div>
 </nav>
  )
}

export default Navbar2