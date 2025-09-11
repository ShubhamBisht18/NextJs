import products from '@/data/products.json'

const CardView = ({params}) =>{

    const {id} = params
    const product = products.find((p) => p.id.toString() === id)

    if (!product) {
    return <h1>Product not found</h1>;
  }
    return(
        <div>
            <h1>Product Details</h1>
            <h2>{product.name}</h2>
            <h3>{product.salary}</h3>
        </div>
    )
}

export default CardView