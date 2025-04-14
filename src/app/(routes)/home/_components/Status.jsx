'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Status = () => {
    return (
        <div className='py-10  bg-gray-600 w-[600px] '>
            <div className="flex flex-col justify-center">
                <div className="flex gap-5 overflow-hidden p-2">
                    {/* <div>
                        <ChevronRight />
                    </div> */}
                    <div className='flex gap-2'>
                        {[...Array(10)].map((_, i) => (
                        <div className='text-center min-w-[70px]' key={i}>
                            <Image
                                width={100}
                                height={100}
                                alt=""
                                className="w-12 h-12 rounded-full ring-3 ring-red-500 ring-offset-2 object-contain p-1"
                                src="/logo.png"
                            />
                            <p className="text-xs text-white">Hari .....</p>
                        </div>
                    ))}
                    </div>
                    {/* <div>
                        <ChevronRight />
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Status