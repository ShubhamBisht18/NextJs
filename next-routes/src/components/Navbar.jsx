"use client"
import Link from "next/link"
const Navbar = () =>{
    return(
        <div>
            <Link href={'/'} >Home</Link>
            <Link href={'/about'} >About</Link>
            <Link href={'/contact'} >Contact</Link>
        </div>
    )
}
export default Navbar