"use client"

import React from 'react'
import { Button } from '../ui/button'
import Logo from '../Logo'
import Link from 'next/link'

const Navbar = () => {

    return (
        <div className="px-3 flex justify-between items-center bg-transparent">
            {/* <div className='p-4'>
                <h2 className=" text-lg lg:font-semibold lg:text-2xl tracking-wider">
                    Spend<span className='text-green-400'>Wise</span>
                </h2>
            </div> */}
            <Logo />
            <div className='p-4'>
                <Button
                    asChild
                    variant={'outline'}
                    className='p-2 sm:py-6 text-sm sm:text-lg text-slate-700 lg:font-semibold '
                    size={"sm"}
                >
                    <Link href={"/auth/login"}>
                        Get Started
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Navbar