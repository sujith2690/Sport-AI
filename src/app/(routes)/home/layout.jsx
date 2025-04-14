import React from 'react'
import Sidebar from './_components/Sidebar'
import WorkSpaceHeader from './_components/WorkSpaceHeader'
import Status from './_components/Status'
import Posts from './_components/Posts'
import UserFollowers from './_components/UserFollowers'

function WorkSpaceLayout({ children }) {
    return (
        <div className="h-screen overflow-hidden flex flex-col bg-black text-white">
            <WorkSpaceHeader />
            <div className='flex flex-1 overflow-hidden'>
                <Sidebar />
                {/* Scrollable main content */}
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>

    )
}

export default WorkSpaceLayout
