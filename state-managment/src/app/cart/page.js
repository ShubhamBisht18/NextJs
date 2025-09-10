"use client"
import { useCart } from "@/context/CartContext"

const CartPage = () =>{
     const {cart} = useCart()
    return(
        <div>
            <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li
              key={index}
            >
              <img className="w-[150px] h-[150px]"
                src={item.image}
                alt={item.name}
              />
              <div>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
        </div>
    )
}

export default CartPage