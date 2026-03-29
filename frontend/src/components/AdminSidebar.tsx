'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Calendar, Users, Image, LogOut, ArrowLeft } from 'lucide-react';

const AdminSidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
        { name: 'Events', icon: Calendar, href: '/admin/events' },
        { name: 'Team', icon: Users, href: '/admin/team' },
        { name: 'Gallery', icon: Image, href: '/admin/gallery' },
    ];

    return (
        <div className="w-64 bg-zinc-950 border-r border-white/10 flex flex-col h-screen sticky top-0">
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    ACM<span className="text-neon-blue">ADMIN</span>
                </Link>
            </div>

            <nav className="flex-1 p-6 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-neon-blue text-black' : 'text-zinc-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6 border-t border-white/10">
                <button className="flex items-center space-x-4 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all w-full">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
