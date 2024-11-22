"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { HiBars3BottomRight } from 'react-icons/hi2'

import { navLinks } from '@/app/constants/constant'

type Props = {
    openNav: () => void
}


const Nav = ({ openNav }: Props) => {

    const [navBg, setNavBg] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true)
            } if (window.scrollY < 90) {
                setNavBg(false)
            }
        };
        window.addEventListener("scroll", handler);
        return () => {
            window.removeEventListener("scroll", handler)
        }
    }, []);

    return (
        <div className={`fixed ${navBg ? 'bg-supportBlack' : "fixed"} h-[12vh] z-[99]  w-full transition-all duration-300`}>
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="ml-[-0.5rem] sm:ml-0"
                />
                <div className="flex items-center space-x-10">
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((navlink) => {
                            return <Link key={navlink.id} href={navlink.url}>
                                <p className="nav__link">{navlink.label}</p>
                            </Link>
                        })}
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href={'/cadastro'}>
                            <button className="md:px-10 md:py-3 px-8 py-3 text-white font-semibold sm:text-base text-sm bg-gradient-to-r from-gradientStart to-gradientEnd rounded-lg">
                                Cadastrar
                            </button>
                        </Link>
                        <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-primaryBase lg:hidden'></HiBars3BottomRight>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
