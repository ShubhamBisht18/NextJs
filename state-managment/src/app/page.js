"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('/api/products')
    .then((res) => res.json())
    .then((data) => setProducts(data));
  },[])
  return (
    <div>
      {products.map((product)=>(
        <ProductCard 
        key={product.id}
        product={product}/>
      ))}
    </div>
  );
}
