import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { Menu, X } from 'lucide-react'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className='bg-amber-950 shadow-lg px-4 md:px-8 fixed z-50 w-full top-0'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-3'>
                {/* Logo Section */}
                <div className='flex items-center gap-2'>
                    <img src={Logo} alt="BeanCraft" className='w-10 h-10' />
                    <h1 className='text-2xl text-white font-cursive'>BeanCraft</h1>
                </div>

                {/* Desktop Menu */}
                <nav className='hidden md:flex items-center gap-8'>
                    <ul className='flex gap-6 items-center text-lg font-semibold text-white'>
                        <li><a href="/" className='hover:text-amber-400 transition duration-200'>Home</a></li>
                        <li><a href="#menu" className='hover:text-amber-400 transition duration-200'>Menu</a></li>
                        <li><a href="#about" className='hover:text-amber-400 transition duration-200'>About</a></li>
                        <li><a href="#testimonial" className='hover:text-amber-400 transition duration-200'>Testimonial</a></li>
                    </ul>
                    <a href="#contact">
                        <button className='bg-amber-800 text-white hover:bg-amber-700 transition duration-200 px-4 py-1.5 rounded-md shadow-md'>
                            Contact
                        </button>
                    </a>
                </nav>

                {/* Mobile Toggle Button */}
                <div className='md:hidden'>
                    {open
                        ? <X onClick={() => setOpen(false)} className='text-white w-7 h-7 cursor-pointer' />
                        : <Menu onClick={() => setOpen(true)} className='text-white w-7 h-7 cursor-pointer' />
                    }
                </div>
            </div>

            {/* Mobile Menu */}
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </header>
    )
}

export default Navbar
