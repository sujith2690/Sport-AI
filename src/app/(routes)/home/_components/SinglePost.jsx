'use client'
import { Bookmark, EllipsisVerticalIcon, Heart, MessagesSquare, Share, Share2, Share2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SinglePost = () => {
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className='flex justify-between'>
                <div className="flex space-x-4 cursor-pointer items-center ">
                    <Image width={100} height={100} alt="user Profile" src="/messi.webp" className="object-cover w-10 h-10 sm:w-8 sm:h-8 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                        <span className="text-xs dark:text-gray-600">4 hours ago</span>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <EllipsisVerticalIcon />
                </div>
            </div>
            <div className=' '>
                <Image
                    src="/messi.webp"
                    alt="user Profile"
                    width={100}
                    height={100}
                    unoptimized
                    className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 border border-white"
                />
                {/* <img src="/messi.webp" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" /> */}
                <p className="text-sm dark:text-gray-600">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
            </div>
            <div className="flex flex-wrap justify-between border-b  py-2 ">
                <button type="button" className="flex items-center p-1 space-x-1.5 cursor-pointer">
                    <Heart className="w-6 h-6 fill-red-600" />
                    <span>283</span>
                </button>
                <div className="flex space-x-2 text-sm dark:text-gray-600 ">
                    <button type="button" className="flex items-center p-1 space-x-1.5 cursor-pointer">
                        <MessagesSquare className="w-4 h-4" />
                        <span>30</span>
                    </button>

                </div>
                <div className="space-x-2">
                    <button aria-label="Share this post" type="button" className="p-2 text-center cursor-pointer   ">
                        <Share2 className='w-4 h-4' />
                    </button>
                    <button aria-label="Bookmark this post" type="button" className="p-2 cursor-pointer">
                        <Bookmark className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SinglePost