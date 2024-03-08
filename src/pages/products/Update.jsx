import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Update = () => {
  const navigate=useNavigate();
  const location=useLocation();

  const productId=location.pathname.split("/")[2];


  const [product,setProduct]=useState([]);

  useEffect(()=>{
    const getProductById= async (id)=>{
      try{
        const res = await axios.get("http://localhost:8800/api/products/"+id);
        setProduct(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getProductById(productId);
  },[]);

  const handleChange=(e)=>{
    setProduct(prev=>({...prev,[e.target.name]: e.target.value}));
  };

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.put("http://localhost:8800/api/products/"+productId,product);
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }
  console.log(product);
  return (
    <div className='form'>
      <h1>Update Product</h1>
      <input type='text' placeholder='image' onChange={handleChange} name="image" value={product.image}/>
      <input type='text' placeholder='name' onChange={handleChange} name="name" value={product.name}/>
      <input type='text' placeholder='description' onChange={handleChange} name="description" value={product.description} />
      <input type='number' placeholder='price' onChange={handleChange} name="price" value={product.price}/>

      <button className='update' onClick={handleClick}>Update</button> 
    </div>
  )
}

export default Update;

