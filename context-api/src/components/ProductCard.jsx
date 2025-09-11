"use client"
import Link from "next/link"
import { useCart } from "@/context/CartContext"


const ProductCard = ({product}) =>{
    const {addToCard} = useCart()
    return(
        <div>
            <h1>{product.id}</h1>
            <h2>{product.name}</h2>
            <p>{product.salary}</p>
            <Link href={`/products/${product.id}`}><button>View</button></Link>
            <button onClick={() => addToCard(product)}>Add To Card</button>
        </div>
    )
}

export default ProductCard