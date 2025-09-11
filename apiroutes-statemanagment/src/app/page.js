"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import api from "@/utils/axios";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data)).catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
