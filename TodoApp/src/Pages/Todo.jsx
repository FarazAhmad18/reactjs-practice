import React, { useState } from 'react'

const Todo = () => {
   const [inp,setInp]=useState("")
   const [todos,setTodo]=useState([])
   const [error,setError]=useState('')
   const [editId,setEditId]=useState(null)
  //  const [done,setDone]=useState([])
   const addTodo=()=>{
    if(inp.trim()==="")
    {
        setError("write something")
        return
    }
    if(todos.find(todo=>todo.data===inp&&todo.id!==editId&&!todo.done))
    {
        setError("already exist")
         setInp('')
         return
    }
    if(editId){
      setTodo(todos.map(todo=>todo.id===editId?{...todo,data:inp}:todo
      )
    )
    setError('')
  setEditId(null)
setInp('')
return
    }
    const newTodo=
    {
      id:Date.now(),
      data:inp,
      done:false
    }
    
    setTodo([newTodo,...todos])
  setInp('')
  setError('')
   }
   const handleDelete=(id)=>{
    setTodo(todos.filter(todo=>todo.id!==id))
   }
   const handleEdit=(todo)=>{
    setInp(todo.data)
    setEditId(todo.id)
   }
const handleDone=(id)=>{
setTodo(todos.map(todo=>todo.id===id?{...todo,done:!todo.done}:todo))
}

 return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="mb-4 text-2xl font-bold text-center text-blue-600">
          Todo App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            onChange={(e) => setInp(e.target.value)}
            value={inp}
            placeholder="Write here..."
             onKeyDown={(e)=>{if(e.key==='Enter')addTodo()}}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}

        {/* Active Tasks */}
        {
          todos.some(todo=>!todo.done)?<> <h2 className="mt-5 mb-2 text-lg font-semibold text-gray-700">
          Active Tasks
        </h2>
        <ul className="space-y-3">
          {todos.filter(todo => !todo.done).map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between px-3 py-2 border rounded-lg shadow-sm bg-gray-50"
            >
              <span className="font-medium text-gray-800">{todo.data}</span>
              <div className="flex gap-2">
                <button
                disabled={!!editId}
                  className="px-2 py-1 text-white bg-yellow-400 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-yellow-500"
                  onClick={() => handleEdit(todo)}
                >
                  Edit
                </button>
                <button
                disabled={!!editId}
                  className="px-2 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
                <button
                disabled={!!editId}
                  className="px-2 py-1 text-white bg-green-500 rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => handleDone(todo.id)}
                >
                  Done
                </button>
              </div>
            </li>
          ))}
        </ul>
</>: <h1>No Todos Yet</h1>
        }
       
        {/* Done Tasks */}
       {todos.some(todo=>todo.done)&&
       <>
       <h2 className="mt-6 mb-2 text-lg font-semibold text-gray-700">
          Done Tasks
        </h2>
        <ul className="space-y-3">
          {todos.filter(todo => todo.done).map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between px-3 py-2 border rounded-lg shadow-sm bg-green-50"
            >
              <span className="font-medium text-gray-600 line-through">{todo.data}</span>
              <div className='flex gap-2'>
             <button
                  className="px-2 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              <button onClick={()=>handleDone(todo.id)}   className="px-2 py-1 text-white bg-blue-500 rounded-lg hover:bg-red-600">Undo</button>
              </div>
            </li>
          ))}
        </ul>
        </>
      } 
    </div>
    </div>
  );
}

export default Todo
