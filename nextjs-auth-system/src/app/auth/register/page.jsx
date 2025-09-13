"use client";

import { useForm } from "react-hook-form";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/register", data);
      router.push("/auth/verify-otp");
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="Name" />
        <br />
        <input {...register("email", { required: true })} placeholder="Email" type="email" />
        <br />
        <input {...register("password", { required: true })} placeholder="Password" type="password" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
