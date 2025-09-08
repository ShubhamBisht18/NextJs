"use client";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ id, name, price, image, description }) => {
  return (
    <div className="w-[300px] h-auto border-2 border-black p-3 rounded">
      <div className="w-full h-[180px] relative">
        <Image
          src={image}
          alt={name}
          width={300}
          height={180}
          className="object-cover rounded"
        />
      </div>
      <div className="mt-2">
        <h2 className="font-bold text-lg">{name}</h2>
        <h1 className="text-green-600 font-semibold">₹{price}</h1>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Check / Details button */}
      <Link href={`/details/${id}`}>
        <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
          Check
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
