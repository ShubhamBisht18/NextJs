import { useCart } from "@/context/CartContext"
import Image from "next/image"

const ProductCard = ({product}) =>{
    const {addToCard} = useCart()
    return(
        <div>
            <div>
                <img src={product.image} alt="Image" className="w-[150px] h-[150px]" />
            </div>
            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
            <button onClick={() => addToCard(product)}>Add to Card</button>
        </div>
    )
}

export default ProductCard