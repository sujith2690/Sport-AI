'use client'

import { UserDetailContext } from '@/context/UserDetailContext';
import { api } from '../../convex/_generated/api';
import { useUser } from '@stackframe/stack'
import { useMutation } from 'convex/react';
import React, { useEffect, useState } from 'react'

export default function Provider({ children }) {


    const user = useUser();
    const createNewUserMutation = useMutation(api.users.CreateNewUser);
    const [userDetail, setUserDetail] = useState(null)

    useEffect(() => {
        user && CreateUser()
    }, [user])

    const CreateUser = async () => {
        const data = {
            name: user?.displayName,
            email: user?.primaryEmail,
            picture: user?.profileImageUrl
        }
        const result = await createNewUserMutation({ ...data })
        setUserDetail(result)
        console.log(result, '---user')

    }
    return (
        <div>
            <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
                {children}
            </UserDetailContext.Provider>
        </div>
    )
}
