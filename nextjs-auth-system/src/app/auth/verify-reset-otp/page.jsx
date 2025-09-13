"use client";

import { useForm } from "react-hook-form";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function VerifyResetOtpPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/verify-reset-otp", data);
      router.push("/auth/reset-password");
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Verify Reset OTP</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} placeholder="Email" type="email" />
        <br />
        <input {...register("otp", { required: true })} placeholder="OTP" />
        <br />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}
