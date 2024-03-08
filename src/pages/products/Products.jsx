import React, { useEffect, useState } from 'react';
import axios from 'axios';
import noImage from "../../assets/noImage.jpg";
import {Link} from "react-router-dom";

const Products = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    const fetchAllProducts= async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/api/products/");
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchAllProducts();
  },[]);

  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8800/api/products/"+id)
      window.location.reload();
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='products-container'>
      <h1>Products</h1>
      <div className="products">
        {
          products.map(product=>(
            <div className="product" key={product.id}>
              {product.image ? <img src={product.image}  className='product-img' alt=""/> : <img src={noImage} className='product-img' alt=""/>}
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button className='update'> <Link to={`/update/${product.id}`}>Update</Link> </button>
              <button className='delete' onClick={()=>handleDelete(product.id)}> Delete </button>

            </div>
          ))
        }
      </div>
      <button className='add'><Link to="/add" >Add new Product</Link></button>
    </div>
  )
}

export default Products;
