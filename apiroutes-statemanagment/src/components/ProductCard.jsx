"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { addToCard } = useCart();
  return (
    <div className="border p-4">
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <Link href={`/products/${product.id}`}>
        <button>View</button>
      </Link>
      <button onClick={() => addToCard(product)}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
