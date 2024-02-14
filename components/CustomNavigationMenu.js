"use client";

import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineBarChart, AiOutlineSetting, AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'; // Import specific icons
import { BiAnalyse } from 'react-icons/bi';

const NavigationMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

    // List of navigation items
    const navItems = [
        { id: 1, name: 'Home', icon: <AiOutlineHome />, href: '#' },
        { id: 2, name: 'Analysis', icon: <BiAnalyse />, href: '#' },
        { id: 3, name: 'Statistics', icon: <AiOutlineBarChart />, href: '#' },
        { id: 4, name: 'Settings', icon: <AiOutlineSetting />, href: '#' },
    ];

    return (
        <>
            {/* Menu open/close button */}
            <button
                className="text-4xl text-blue-500 fixed top-5 left-5 z-40"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* Navigation sidebar */}
            <nav className={`${isSidebarOpen ? 'block' : 'hidden'} bg-blue-500 h-screen p-5 fixed top-0 bottom-0 left-0 z-30 transition-all duration-300`}>
                <div className="flex flex-col items-center">
                    {/* Close button inside the sidebar */}
                    <button
                        className="self-end text-xl text-white mb-5"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <AiOutlineClose />
                    </button>

                    {/* User profile icon - Using AiOutlineUser icon */}
                    <div className="mb-10">
                        <AiOutlineUser className="text-white text-8xl" />
                    </div>
                    {/* Navigation items */}
                    {navItems.map(item => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="text-white py-2 px-4 flex items-center w-full mb-3 hover:bg-blue-700 rounded"
                            onClick={() => setIsSidebarOpen(false)} // Close sidebar on navigation item click
                        >
                            {/* Icon */}
                            <span className="mr-3 text-xl">{item.icon}</span>
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default NavigationMenu;

