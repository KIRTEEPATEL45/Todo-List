import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
    const [Data,setData] = useState({
      name:'',
      email:'',
      phone:''
    })

    const handeldata = (e) => {
      setData({...Data,[e.target.name]:e.target.value})
    }

    const handelsubmit= (e) =>{
      e.preventDefault();
    }
    console.log(Data);
  return (
    <div className="App">
     <h1>Hello Everyone</h1>
     <div className='kp'>
     <form onSubmit={handelsubmit}>
      <label>Name:</label><br />
      <input type='text' placeholder="Enter Your Name" name='name' value={Data.name} onChange={handeldata} /><br />
      <label>Email:</label><br />
      <input type='email' placeholder="Enter Your Email" name='email' value={Data.email}  onChange={handeldata} /><br />
      <label>Phone:</label><br />
      <input type='number' placeholder="Enter Your Number" name='phone' value={Data.phone}  onChange={handeldata} /><br /><br />
      <input type='submit' />
     </form>
     </div>
    </div>
  );
}

export default App;
