'use client'
import { Button } from '@/components/ui/button'
import { UserDetailContext } from '@/context/UserDetailContext'
import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React, { useContext } from 'react'

const UserFollowers = () => {
    const { userDetail } = useContext(UserDetailContext)
    console.log(userDetail, '----------------userDetail from the context ')

    return (
        <div className='hidden lg:flex w-[360px] h-1/2 shrink-0 px-2 py-5 space-y-3 justify-end'>
            <div className='w-[280px] flex flex-col gap-2.5'>
                <div className='flex items-center gap-2 hover:bg-gray-500 p-3 rounded-md transition-all duration-300 ease-in-out'>
                    <UserButton />
                    <p className='lowercase font-bold'>{userDetail?.name}</p>
                </div>

                <div>
                    <p className='text-sm text-gray-400 font-semibold'>Suggested for you</p>
                </div>

                <div className='grid gap-2'>
                    
                    <div className='flex justify-between items-center hover:bg-gray-300 p-2 rounded-md transition-all duration-300 ease-in-out shadow'>
                        <div className='flex items-center gap-2'>
                            <Image width={100} height={100} alt="" className="w-8 h-8 rounded-full object-contain p-1" src="/logo.png" />
                            <p className='text-sm'>Hari .....</p>
                        </div>
                        <p className='text-xs font-bold text-blue-800 cursor-pointer'>Follow</p>
                    </div>
                    <div className='flex justify-between items-center hover:bg-gray-500 p-2 rounded-md transition-all duration-300 ease-in-out shadow'>
                        <div className='flex items-center gap-2'>
                            <Image width={100} height={100} alt="" className="w-8 h-8 rounded-full object-contain p-1" src="/logo.png" />
                            <p className='text-sm'>Hari .....</p>
                        </div>
                        <p className='text-xs font-bold text-blue-800 cursor-pointer'>Follow</p>
                    </div>
                    <div className='flex justify-between items-center hover:bg-gray-500 p-2 rounded-md transition-all duration-300 ease-in-out shadow'>
                        <div className='flex items-center gap-2'>
                            <Image width={100} height={100} alt="" className="w-8 h-8 rounded-full object-contain p-1" src="/logo.png" />
                            <p className='text-sm'>Hari .....</p>
                        </div>
                        <p className='text-xs font-bold text-blue-800 cursor-pointer'>Follow</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserFollowers
