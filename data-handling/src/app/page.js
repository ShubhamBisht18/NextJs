import Image from "next/image";
import products from './data/products.json'
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>All Products!!!</h1>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description} />
        ))}
      </div>
    </div>
  );
}
