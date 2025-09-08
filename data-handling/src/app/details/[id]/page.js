import products from '@/app/data/products.json'

const Details = ({params}) => {
    const { id } = params

    const product = products[id]
    if (!product) {
        <p className='text-red-500'>Details not found!!!</p>
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
                className="w-[400px] h-[300px] object-cover rounded mb-4"
            />
            <p className="text-lg">Price: ₹{product.price}</p>
            <p className="text-gray-700">{product.description}</p>
            <p className="mt-2">Category: {product.category}</p>
            <p>Sizes: {product.size.join(", ")}</p>
            <p>Stock: {product.stock}</p>
            <p>⭐ {product.rating}</p>
        </div>
    )
}

export default Details