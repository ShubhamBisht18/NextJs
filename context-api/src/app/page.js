"use client"

import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import products from '@/data/products.json'

export default function Home() {
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
