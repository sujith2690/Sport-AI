'use client'
import React from 'react'
import SinglePost from './SinglePost'

const Posts = () => {
    return (
        <div className='grid place-items-center bg-yellow h-full'>
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </div>
    )
}

export default Posts