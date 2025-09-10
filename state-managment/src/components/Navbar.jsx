"use client"
import { useCart } from "@/context/CartContext"
import Link from "next/link"

const Navbar = () =>{
    const {cart} = useCart()
    return(
        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/cart'}>Cart:🛒{cart.length}</Link>
        </div>
    )
}

export default Navbar