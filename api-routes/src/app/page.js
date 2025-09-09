// // import Image from "next/image";
// // import styles from "./page.module.css";
// // import ProductCard from "@/components/ProductCard";
// // import products from '@/app/api/products/route'

// // export default function Home() {
// //   return (
// //     <div>
// //       {products.map((product)=>(
// //         <ProductCard
// //         key={product.id}
// //         name={product.name}
// //         price={product.price}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// "use client"
// import { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   // Fetch products from API on mount
//   useEffect(() => {
//     fetch("/api/products")
//       .then(res => res.json())
//       .then(data => {
//         if(data.success){
//           setProducts(data.data);
//         }
//       });
//   }, []);

//   return (
//     <div>
//       {products.map(product => (
//         <ProductCard
//           key={product.id}
//           name={product.name}
//           price={product.price}
//         />
//       ))}
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Fetch products on mount
  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        if (data.success) setProducts(data.data);
      });
  }, []);

  // Handle form submit
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price: Number(price) }),
    });
    const data = await res.json();
    if (data.success) {
      setProducts([...products, data.data]); // Add new product to state
      setName("");
      setPrice("");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="p-4">
      {/* Form to add product */}
      <form onSubmit={handleAddProduct} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>

      {/* Display products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

