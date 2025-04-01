"use client";

import React from 'react';
import Image from 'next/image';
import MenuButton from '@/app/components/MenuButton/menuButton';
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 80, damping: 15 }}
            className="w-screen p-4 fixed">
            <div className="container mx-auto flex justify-between items-center">

                {/* Left side: Icon and Name */}
                <div className="flex ml-[-15] sm:ml-0 items-center">
                    <Image
                        src="/Icon.png"
                        alt="Icon image"
                        width={60}
                        height={60}
                        unoptimized
                    />
                    <span className="text-black text-xl ml-[-9] sm:ml-0">Ritesh</span>
                </div>

                {/* Middle: About and Work */}
                <div className="hidden md:flex space-x-4">
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="#about" className="text-black text-xl">About</motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="#work" className="text-black text-xl">Work</motion.a>
                </div>

                {/* Right side: Contact Me */}
                <div className='flex'>
                    <motion.a
                    href="#contact" className="text-black text-xl hidden md:flex" >
                            <span className="mr-2 transform scale-x-150">→</span>
                            <div className='relative w-30 group flex flex-col overflow-hidden'>
                                <h3 className='absolute group-hover:-translate-y-7 transition-all duration-500 ease-out'>Contact Me</h3>
                                <h3 className='absolute translate-y-7 group-hover:translate-y-0 transition-all duration-500 ease-out'>Lets Talk</h3>
                                </div></motion.a>
                <MenuButton />
            </div>

        </div>
        </motion.nav >
    );
};

export default Navbar;