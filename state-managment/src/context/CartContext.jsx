"use client"

import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCard = (product) => {
        console.log("Adding products: ",product)
        setCart((prev) => [...prev, product])
    }
    return (
        <CartContext.Provider value={{ cart, addToCard }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}