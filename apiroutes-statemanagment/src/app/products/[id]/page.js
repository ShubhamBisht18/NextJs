"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeCard } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h1>Cart Items</h1>
      {cart.map((item) => (
        <div key={item.cartId}>
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>
          <button onClick={() => removeCard(item.cartId)}>Remove</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
