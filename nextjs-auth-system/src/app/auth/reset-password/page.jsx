"use client";

import { useForm } from "react-hook-form";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/reset-password", data);
      router.push("/auth/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} placeholder="Email" type="email" />
        <br />
        <input {...register("newPassword", { required: true })} placeholder="New Password" type="password" />
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
