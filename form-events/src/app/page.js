import Image from "next/image";
import Login from "@/components/Login";
import Register from "@/components/Register";

export default function Home() {
  return (
    <div>
      <Login/>
      <Register/>
    </div>
  );
}
