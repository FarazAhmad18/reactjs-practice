import React from 'react'
import { useState } from 'react'

const CommentForm = () => {
    let [inp,setInp]=useState({userName:'',remarks:'',rating:''})
    let handleInput=(e)=>
    {
        setInp((currData)=>{
            return{...currData,[e.target.name]:e.target.value};
        })
    }
    let handleSubmit=(e)=>
    {
        e.preventDefault();
        setInp({userName:'',remarks:'',rating:''})
    }
  return (
      <div className='bg-slate-500 h-screen flex flex-col justify-center items-center'>
        <h1 className='font-bold text-2xl text-white '>Give a comment!</h1>
      
        <form onSubmit={handleSubmit} action="" className='bg-slate-700 rounded-lg h-[70%] w-[40%] flex flex-col items-center justify-evenly'>
<div className='flex flex-col justify-between h-[50%] w-[70%] items-center'>
           <div >
            <label htmlFor="userName" className='text-white text-xl ml'>Username</label>
            <input type="text" id='userName' value={inp.userName}onChange={handleInput} name='userName' className='bg-gray-50 border border-gray-300 rounded focus:border-blue-500'/>
            </div>
           <div>
            <label htmlFor="remarks" className='text-white text-xl ml'>Remarks</label>
            <textarea name="remarks" id="remarks" value={inp.remarks} onChange={handleInput} className='bg-gray-50 border rounded border-gray-300 focus:border-blue-500'></textarea>
            </div>
            <div><label htmlFor="rating" className='text-white text-xl ml'>Rating</label>
            <input type="number" name='rating' id='rating' value={inp.rating} onChange={handleInput} className='bg-gray-50 border border-gray-300 rounded focus:border-blue-500' />
            </div>
            </div>
            <button className='bg-orange-500 px-2 py-3 rounded text-white font-medium focus:border-blue-500'>Submit Comment</button>
        </form>

      </div>
  )
}

export default CommentForm
