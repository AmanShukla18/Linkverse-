"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)

    return ( <> { showNavbar && <nav className='bg-white w-[80vw] flex justify-between fixed top-10 right-[10vw] rounded-full p-5 px-7'>
            <div className='logo flex gap-20 items-center'>
                <Link href={"/"}>
                    <h1 className='font-serif font-extrabold text-3xl'>Linkverse</h1>
                </Link>

            <ul className='flex gap-10'>
               <Link href="/"><li>Templates</li></Link>
               <Link href="/"><li>Marketplace</li></Link>
               <Link href="/"><li>Discover</li></Link>
               <Link href="/"><li>Pricing</li></Link>
               <Link href="/"><li>Learn</li></Link>
            </ul>
            </div>
            <div className='flex gap-3'>
                <button className='login bg-gray-400 p-4 rounded-lg'>Log in</   button>
                <button className='signUp bg-gray-900 text-white font-semibold p-4 rounded-full'>SignUp Free</button>

            </div>
        </nav> }</>
    )
}


export default Navbar