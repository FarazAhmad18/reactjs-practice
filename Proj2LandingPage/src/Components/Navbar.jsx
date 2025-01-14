import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    let [nav,setNav]=useState(false)
    let handleNav=()=>{
        setNav(!nav);
    }
  return (
    <>
     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 font-medium'>Home</li>
        <li className='p-4 font-medium'>Company</li>
        <li className='p-4 font-medium'>Resources</li>
        <li className='p-4 font-medium'>About</li>
        <li className='p-4 font-medium'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu/>:<AiOutlineClose/>}
        </div>
<ul className={nav?'fixed left-0 top-20 w-[50%] md:hidden ease-in-out duration-100':'ease-in-out duration-100 hidden'}>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Contact</li> 
</ul>
</div>
    </>
  )
}

export default Navbar
