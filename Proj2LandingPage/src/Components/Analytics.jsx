import React from 'react'
import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[350px] 'src={Laptop} alt="" />
    <div className='flex flex-col justify-center pl-10'>
        <p className='text-[#00df9a] font-medium '>DATA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p className='font-medium'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
</p>
<button className='text-[#00df9a] bg-black font-medium mt-8 py-2 px-4 rounded-md w-[200px]'>Get Started</button>
    
    </div>
    </div>
    </div>
  )
}

export default Analytics
