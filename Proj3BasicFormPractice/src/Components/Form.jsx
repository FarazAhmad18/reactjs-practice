import React, { useState } from 'react'

const Form = () => {
let [inp,setInp]=useState({Fname:"",username:""})
let handleInput=(e)=>{
setInp((curData)=>{
return{...curData, [e.target.name]:e.target.value};
})
}
let handleSubmit=(e)=>{
e.preventDefault();
setInp({Fname:"",username:""})
}
  return (
    <form onSubmit={handleSubmit}className='flex justify-center items-center'>
        <label htmlFor="Fname">Enter Name Here:</label>
        <input type="text" name="Fname" id="Fname" placeholder='enter name' value={inp.Fname}onChange={handleInput} />
        <label htmlFor="username">Enter UserName Here:</label>
        <input type="text" name="username" id="username" placeholder='enter username' value={inp.username}onChange={handleInput} />
        <button>Submit</button>
    </form>
  )
}

export default Form
