import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router';

const Home = () => {
    const [title,setTitle]=useState('');
    const [value,setValue]=useState('')
    const[params,setParams]=useSearchParams();
    const pasteId=params.get("pasteId")
    const dispatch=useDispatch()
    function createPaste(){
        const paste={
            title:title,
            value:value,
            _id:pasteId ||
            Date.now.toString(36),
            createdAt: new Date.toISOSstring
        }
if(pasteId)
{
    //update
    dispatch(updateToPastes(paste))
}
else{
    //create
    dispatch(addToPastes(paste))
}
//after creation or updation
setTitle('')
setValue('')
setParams({})
    }
  return (
    <div className="max-w-screen-md mx-auto px-4">
    <div className="flex flex-wrap justify-center mt-9 gap-2">
        <input 
            className="p-2 border-2 rounded-lg border-gray-500 text-lg font-medium w-full sm:w-auto"
            type="text"
            placeholder="Enter title here" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-orange-400 px-4 py-2 border rounded-lg text-lg text-white font-medium">
            {pasteId ? "Update Paste" : "Create Paste"}
        </button>
    </div>

    {/* Textarea Section */}
    <div className="flex justify-center mt-8">
        <textarea
            className="p-2 border-2 rounded-lg border-gray-500 text-lg font-medium w-full max-w-lg placeholder:text-black"
            placeholder="Enter Content here" 
            rows={10}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        ></textarea>
    </div>
</div>

  )
}

export default Home
