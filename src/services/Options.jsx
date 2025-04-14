'use client'
import { UserButton } from "@stackframe/stack";
import { Bell, Home, Plus, Search, User } from "lucide-react";

export const SidebarMenu = [
    {
        name: 'Home',
        icon: Home,
        path: '/home'
    },
    {
        name: 'Search',
        icon: Search,
        path: '/home/Search'
    },
    {
        name: 'Create',
        icon: Plus,
        path: '/home/create'
    },
    {
        name: 'Notifications',
        icon: Bell,
        path: '/home/notifications'
    },
    {
        name: 'Profile',
        icon: UserButton,
        path: '/home/profile'
    },
]