import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [product,setproduct]=useState({
    name:"",
    description:"",
    image:"",
    price:"",
  })

  const navigate=useNavigate();

  const handleChange=(e)=>{
    setproduct(prev=>({...prev,[e.target.name]: e.target.value}));
  };

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/api/products/",product);
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }
  console.log(product);
  return (
    <div className='form'>
      <h1>Add new Product</h1>
      <input type='text' placeholder='name' onChange={handleChange} name="name"/>
      <input type='text' placeholder='image' onChange={handleChange} name="image"/>
      <input type='text' placeholder='description' onChange={handleChange} name="description" />
      <input type='number' placeholder='price' onChange={handleChange} name="price" />

      <button onClick={handleClick} className='add'>Add</button> 
    </div>
  )
}

export default Add