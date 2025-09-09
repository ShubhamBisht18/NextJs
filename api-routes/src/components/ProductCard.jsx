"use client"
import Link from "next/link"
import products from '@/app/api/products/route'

const ProductCard = ({id,name,price}) =>{
    return(
        <div>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}

export default ProductCard