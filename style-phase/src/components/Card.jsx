"use client";

import { useRouter } from "next/navigation";

const Card = ({ projectName, description, link }) => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push(link); // navigate to project page
  };

  return (
    <div className="w-full h-[300px] max-w-sm bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      <h2 className="text-2xl font-bold mb-2 text-blue-600">{projectName}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button
        onClick={handleCheckout}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Checkout
      </button>
    </div>
  );
};

export default Card;
