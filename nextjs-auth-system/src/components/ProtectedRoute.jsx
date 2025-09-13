"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!loading && mounted && !user) {
      router.push("/auth/login"); 
    }
  }, [user, loading, mounted, router]);

  if (!mounted || loading) return <p>Loading...</p>;
  if (!user) return null;

  return children;
}
