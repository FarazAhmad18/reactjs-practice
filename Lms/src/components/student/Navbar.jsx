import React from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const Navbar = () => {
  const isCourseListPage=location.pathname.includes('/course-list')

  const {openSignIn}=useClerk()
  const {user} =useUser()
  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4
    ${isCourseListPage? 'bg:white':'bg-cyan-100/70'}`}>
      <img src={assets.logo} alt="logo" className='w-28 lg:w-32 cursor-pointer' />
     {/* for desktop view */}
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        <div className='flex items-center gap-5'>
          {
            user && <>
          <button>Become Educator</button>
          | 
          <Link to='/my-enrollments'>My Enrollments</Link>
          </>}
          {user? <UserButton/>:
          <button className='bg-blue-600 px-2 py-1.5 text-white border-none rounded-md'
          onClick={()=>openSignIn()}>Create Account</button>}
          
        </div>
      </div>
      {/* for mobile view */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
      <div className='flex items-center gap-1 max-sm:text-xs'>
      {
            user && <>
          <button>Become Educator</button>
          | 
          <Link to='/my-enrollments'>My Enrollments</Link>
          </>}
          </div>
          {
            user? <UserButton/>:<button ><img src={assets.user_icon} alt="" /></button>
          }
          
        
      </div>
    </div>
  )
}

export default Navbar
