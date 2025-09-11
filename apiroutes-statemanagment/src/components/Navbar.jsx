"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="p-4 bg-gray-200 flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}
