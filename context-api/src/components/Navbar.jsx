"use client"
import Link from "next/link"
import { useCart } from "@/context/CartContext"

const Navbar = () =>{
    const {cart} = useCart()
    return(
        <div>
            <Link href={'/'}></Link>
            <Link href={'/products/${id}'}>Card Details</Link>
            <Link href={'/cart'}>Added Cards: {cart.length}</Link>
        </div>
    )
}

export default Navbar