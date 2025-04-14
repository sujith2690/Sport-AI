'use client'
import React from 'react'
import Status from './Status'
import Posts from './Posts'
import UserFollowers from './UserFollowers'

const UserContents = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col gap-4'>
                {/* <Status /> */}
                <Posts />
            </div>
            <UserFollowers />
        </div>
    )
}

export default UserContents