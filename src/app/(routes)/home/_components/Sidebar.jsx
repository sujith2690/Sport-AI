

'use client'
import { SidebarMenu } from '@/services/Options'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Bell, Home, Plus, Search, User } from "lucide-react";

function Sidebar() {
    const path = usePathname()
    console.log(path, '----opath')

    return (
        <>
            {/* Desktop & Tablet Sidebar */}
            <div className="hidden md:flex flex-col w-[240px] md:w-[100px] lg:w-[240px] h-screen shrink-0 border-r- shadow-sm overflow-hidden gap-5 p-5">
                {/* Logo */}
                <div className="flex items-center justify-center lg:justify-start p-2">
                    <Image src="/logo.png" alt="logo" width={60} height={60} className="w-8 h-10" />
                    <p className="text-xl font-bold hidden lg:block ml-2">SportAI</p>
                </div>

                {/* Sidebar Items */}
                <div className=" flex flex-col gap-4 py-2">
                    {SidebarMenu.map((item, i) => (
                        <div
                            key={i}
                            className={`flex items-center lg:justify-normal md:justify-center  gap-3 cursor-pointer group hover:bg-gray-500 px-1 py-2 rounded-md transition-all duration-300 ease-in-out 
                            ${item.path === path ? 'bg-gray-500' : ''}`}>
                            <div className=' p-2 '>
                                <item.icon className="w-5 md:w-10 h-5 hidden md:block" />
                            </div>
                            <h2 className={`group-hover:font-bold text-sm hidden lg:block ${item.path === path ? 'font-bold' : ''}`}>
                                {item.name}
                            </h2>
                        </div>
                    ))}
                    {/* <div className='block lg:bg-yellow-300 md:bg-blue-800 sm:bg-red-800'>
                        <Bell />
                    </div> */}
                </div>
            </div>

            {/* Mobile Bottom Navbar */}
            <div className="fixed md:hidden bottom-0 w-full bg-white shadow-md border-t-2 flex justify-around py-1 z-50">
                {SidebarMenu.map((item, i) => (
                    <div key={i} className={`flex flex-col items-center justify-center cursor-pointer p-2 ${item.path === path ? 'bg-gray-300 rounded-full' : ''}`}>
                        <item.icon className={`w-5 h-5 font-extrabold ${item.path === path ? 'text-black bg-gray-300' : 'text-gray-500'}`} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Sidebar
