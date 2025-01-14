import React from 'react'
import Single from '../assets/single.png'

const Card = (props) => {
  return (
    <div className='h-[90vh]'>
      <div className='bg-slate-100 shadow-xl mx-10 my-10 py-10 rounded-lg flex flex-col items-center hover:scale-105 hover:bg-slate-300'>
        <img src={Single} className='w-[80px]'alt="" />
        <p className='font-bold text-1.5xl py-3'>{props.pkg}</p>
        <p className='font-bold text-2xl pb-3 '>${props.price}</p>
        <p className='pb-2 font-normal'>Storage {props.storage}</p>
        <p className='pb-2 font-normal'>{props.users} Users Allocated</p>
        <p className='pb-2 font-normal'>Send upto {props.data} Gb</p>
        
        <button className='bg-[#00df9a] text-black font-medium py-2 px-4 rounded-md w-[130px] '>Get Started</button>

      </div>

      
    </div>
  )
}

export default Card
