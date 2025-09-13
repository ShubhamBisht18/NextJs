// "use client";

// import { useForm } from "react-hook-form";
// import api from "@/lib/api";
// import { useRouter } from "next/navigation";

// export default function VerifyOtpPage() {
//   const { register, handleSubmit } = useForm();
//   const router = useRouter();

//   const onSubmit = async (data) => {
//     try {
//       await api.post("/auth/verify-otp", data);
//       router.push("/main/home");
//     } catch (err) {
//       alert(err.response?.data?.message || "Error occurred");
//     }
//   };

//   return (
//     <div>
//       <h2>Verify OTP</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input {...register("email", { required: true })} placeholder="Email" type="email" />
//         <br />
//         <input {...register("otp", { required: true })} placeholder="OTP" />
//         <br />
//         <button type="submit">Verify</button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function VerifyOtpPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { getUser } = useAuth(); 

  const onSubmit = async (data) => {
    try {
      await api.post("/auth/verify-otp", data);
      await getUser();
      router.push("/main/home");
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} placeholder="Email" type="email" />
        <br />
        <input {...register("otp", { required: true })} placeholder="OTP" />
        <br />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}
