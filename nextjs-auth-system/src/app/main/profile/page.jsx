"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Profile</h1>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
    </ProtectedRoute>
  );
}
