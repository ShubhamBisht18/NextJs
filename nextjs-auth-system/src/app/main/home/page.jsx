"use client";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome Home</h1>
        <p>This is your dashboard after login.</p>
      </div>
    </ProtectedRoute>
  );
}
