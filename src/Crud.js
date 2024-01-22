import React, { useState } from 'react'
import './Crud.css';

export default function Crud() {
  const [todo,setTodo] = useState([]);
  const [data,setdata] = useState('');
  const addTodo = () => {
    if(data.trim() !== ''){
      const hello  = {
        id:new Date().getTime(),
        text:data,
      }
      setTodo([...todo,hello])
      setdata('');
    }
  }

  const deleteitem = (id) => {
    const itm = todo.filter((i)=> i.id !== id)
    setTodo(itm);
  }

  return (
    <div className='todo-container'>
      <h1>ToDo List</h1>
      <input type='text' value={data} onChange={(e)=>setdata(e.target.value)} />
      <button onClick={addTodo}>Submit</button>
      <ul>
        {todo.map((i)=>(
         <li key={i.id}>
          <div>
            {i.text}
            <button onClick={()=>deleteitem(i.id)}>Delete</button>
            </div>
          </li>
       
))}
      </ul>
    </div>
  )
}
