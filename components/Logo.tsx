"use client"

import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/" className='p-4'>
            <h2 className=" text-lg lg:font-semibold lg:text-2xl tracking-wider">
                Spend<span className='text-green-400'>Wise</span>
            </h2>
        </Link>
    )
}

export default Logo