"use client"


import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCard = (product) =>{
        const newItems = {...product, cartId: Date.now()}
        setCart((prev) => [...prev, newItems])
    }

    const removeCard = (cartId) =>{
        setCart((prev) => prev.filter((item)=> item.cartId !== cartId))
    }

    return(
        <CartContext.Provider value={{cart, addToCard, removeCard}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}