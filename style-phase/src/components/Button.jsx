"use client";
import { useRouter } from "next/navigation"; 

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    try {
      router.push("/projects"); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="right-left w-[200px] h-[40px] absolute right-0 bottom-[35px] text-lg font-semibold rounded-[5px] bg-blue-500 text-white cursor-pointer"
      >
        Checkout
      </button>
    </div>
  );
};

export default Button;
