import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList()
{
    let [todos,setTodos]=useState([{task:"sample",id:uuidv4()}]);
    let [newTodo,setNewTodo]=useState("");
    function getTodo(event)
    {
        setNewTodo(event.target.value)
    }
    function setTodo()
    {
            if (newTodo.trim() !== "") {
                // setTodos([... todos, {task:newTodo,id:uuidv4()}])
                setTodos((prevTodo)=>{
                    return [... prevTodo, {task:newTodo,id:uuidv4()}]
                })
                setNewTodo("")
                }
                else {
                    alert("Please enter a valid task.");  // Optionally, show an alert if input is empty
                  }
       
       
    }
    function delTodo(todoId)
    {
        // let copy= todos.filter((todo)=>todo.id!=todoId);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

        // console.log(copy)
    }
    let upperCaseAll=()=>
    {
        setTodos(
        (prevTodo)=>{
           return prevTodo.map((todo)=>{
                return{
                    ... todo,
                    task:todo.task.toUpperCase(),
                } 
                })
        })
    }
    let lowerCaseAll=()=>
    {
        setTodos(
        todos.map((todo)=>
        {
return{
    ...todo,
    task:todo.task.toLowerCase(),
}
        }))
    }
    let deleteAll = () => {
        setTodos([]); 
    };
    return(
        <>
        <h2>ToDo List</h2>
        <input type="text" placeholder="Type todo here" value={newTodo} onChange={getTodo} />
        <button onClick={setTodo}>Add</button>
        <hr />
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.task}
                <button onClick={() => delTodo(todo.id)}>Delete</button>
                </li>
                
                ))}
        </ul>
        <button onClick={upperCaseAll}>UpperCase All</button>
        <button onClick={lowerCaseAll}>LowerCase All</button>
        <br />
        <button onClick={deleteAll}>Delete All</button>
        </>
    )
}


