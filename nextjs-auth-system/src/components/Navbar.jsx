"use client"

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      {!user ? (
        <>
          <Link href="/auth/login">Sign In</Link>
          <Link href="/auth/register">Sign Up</Link>
        </>
      ) : (
        <>
          <Link href="/main/home">Home</Link>
          <Link href="/main/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
