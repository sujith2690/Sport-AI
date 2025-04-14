'use client'
import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'

function WorkSpaceHeader() {
    return (
        <div className='p-2 px-5 flex items-center justify-between shadow-sm block lg:hidden'>
            <div className='flex items-center'>
                <Image src={'/logo.png'} alt='logo' width={100} height={100} className='w-12 h-12 p-2' />
                <p className='text-xl font-bold'>SportAI</p>
            </div>
            <UserButton />
        </div>
    )
}

export default WorkSpaceHeader
