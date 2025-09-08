import Image from "next/image";
import HomeImage from '../../public/HomeImage.jpg'
import PersonHome from '../../public/PersonHome.jpg'
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-70px)] flex justify-center items-center">
      <div className="w-[60%] h-full relative">
        <h1 className="down-up w-[400px] h-[100px] text-4xl font-bold text-blue-500 absolute left-0 top-[70px]"><p className="text-3xl font-bold text-black">I'am</p> Shubham Bisht</h1>
        <Image className="left-right w-[40%] h-[70%] absolute left-0 bottom-9 rounded-2xl " src={PersonHome} alt="PersonHome"/>
        <Image className="right-left w-[55%] absolute right-0 top-9 rounded-4xl" src={HomeImage} alt="HomeImage"/>
        <p className="text-[16px] font-medium text-black absolute right-0 bottom-[90px] w-[53%] right-left">Passionate front-end developer skilled in HTML, CSS, JavaScript, and React, with hands-on experience building full-stack applications using Node.js and MongoDB. Continuously expanding backend skills while delivering scalable, interactive web experiences through impactful projects.</p>
        <Button/>
      </div>
    </div>
  );
}
