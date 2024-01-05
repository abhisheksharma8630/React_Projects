import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'


function Home() {
  const [form,setForm] = useState({});
  const [postList,setPostList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/react").then((response)=>{
      console.log(response.data);
      setPostList(response.data);
    });
  },[]);

  const handleInput = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(form);

  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='username' placeholder='name' onChange={handleInput}/>
          <input type="password" name='password' placeholder='password' onChange={handleInput} />
          <button>Submit</button>
        </form>

        <div>{postList.map((value,key)=>{
          return (<div key={value._Id}>
            <p>{value.title}</p>
            <p>{value.description}</p>
            <p>{value.owner}</p>
          </div>)
        })}</div>
    </div>
  )
}

export default Home;