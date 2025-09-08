"use client";

import Image from "next/image";
import AboutImage from '../../../public/AboutImage.jpg'

export default function About() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 down-up">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full">
        {/* Image */}
        <div className="infinite-up-down w-full md:w-1/3 mb-6 md:mb-0 md:mr-6 relative h-64 md:h-80">
          <Image 
            src={AboutImage} 
            alt="About Image" 
            fill 
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-2/3 right-left">
          <p className="text-lg text-gray-700 mb-4">
            Hi, I'm Shubham Bisht, a passionate front-end developer with experience in HTML, CSS, JavaScript, and React. I enjoy creating beautiful, responsive, and interactive web applications.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Over time, I have learned full-stack development using Node.js and MongoDB, building scalable projects that deliver seamless user experiences.
          </p>
          <p className="text-lg text-gray-700">
            I love learning new technologies, improving my coding skills, and contributing to projects that make a real impact.
          </p>
        </div>
      </div>
    </div>
  );
}
