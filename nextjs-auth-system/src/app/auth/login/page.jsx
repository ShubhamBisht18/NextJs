"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth(); 
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password); 
      router.push("/main/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} placeholder="Email" type="email" />
      <input {...register("password", { required: true })} placeholder="Password" type="password" />
      <button type="submit">Login</button>
      <Link href={'/auth/forgot-password'}><p>forgot-password</p></Link>
    </form>
  );
}
