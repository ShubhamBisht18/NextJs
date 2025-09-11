// // H:\NextJS\apiroutes-statemanagment\src\context\CartContext.jsx

// "use client"

// import { createContext, useContext, useState } from "react";

// const CartContext = createContext()

// export function CartProvider({children}){
//     const [cart, setCart] = useState([])

//     const addToCard = (data) =>{
//         setCart((prev) => [...prev, data])
//     }

//     const removeCard = (id) =>{
//         setCart((prev) => prev.filter((item) => item.id !== id))
//     }

//     return(
//         <CartContext.Provider value={{cart,addToCard,removeCard}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export const useCart = () => {
//     return useContext(CartContext);
// };

"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCard = (data) => {
    // Add a unique cartId for each added item
    const newItem = { ...data, cartId: Date.now() + Math.random() };
    setCart((prev) => [...prev, newItem]);
  };

  const removeCard = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCard, removeCard }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};

