"use client"
import { useCart } from "@/context/CartContext"

const Cart = () => {
  const { cart, removeCard } = useCart()

  if (cart.length === 0) {
    return <h1>Your cart is empty</h1>
  }

  return (
    <div>
      <h1>My Cart</h1>
      {cart.map((item) => (
        <div key={item.cartId}>
          <h2>{item.name}</h2>
          <p>Salary: {item.salary}</p>
          <button onClick={() => removeCard(item.cartId)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart
