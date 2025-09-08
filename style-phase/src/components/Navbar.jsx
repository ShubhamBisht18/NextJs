"use client"

import Link from "next/link"
import Image from "next/image"
import Logo from '../../public/Logo.png'

const Navbar = () => {
    return (
        <div className="w-screen h-[70px] flex justify-center items-center">
            <div className="w-[60%] h-[90%] flex justify-between items-center">
                <div className="w-[50px]">
                <Image alt="Logo" src={Logo} />
            </div>
            <div className="w-[40%] h-full flex justify-between items-center">
                <Link className="text-black font-semibold text-[18px]" href={'/'}>Home</Link>
                <Link className="text-black font-semibold text-[18px]" href={'/about'}>About</Link>
                <Link className="text-black font-semibold text-[18px]" href={'/projects'}>Projects</Link>
                <Link className="text-black font-semibold text-[18px]" href={'/contact'}>Contact</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar