'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from "./ThemeSwitch";
import clsx from 'clsx';
import { Home } from '@/components/icons/Home';
import { Blog } from '@/components/icons/Blog';
import { Projects } from '@/components/icons/Projects';
import { Tools } from '@/components/icons/Tools';
import { Menu } from './icons/Menu';
import { Close } from './icons/Close';
import { useEffect, useState } from 'react';

const links = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Blog', href: '/blog', icon: Blog },
    { name: 'Projects', href: '/projects', icon: Projects },
    { name: 'Tools', href: '/tools', icon: Tools },
    { name: 'Resume', href: '/resume', icon: () => null },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [render, setRender] = useState(isOpen);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setRender(isOpen);
        }, 150);
        return () => clearTimeout(timeoutId);
    }, [isOpen, render]);

    const pathname = usePathname();
    return (
        <header className="relative z-50 flex flex-col">
            <div className='flex flex-rows my-4 gap-4 justify-center items-center'>
                <div className='flex-1' />
                <MobileNavButton className='pointer-events-auto md:hidden ' onClick={() => setIsOpen(true)} />
                <DesktopNavbar pathname={pathname} className='pointer-events-auto hidden md:block' />

                <div className='flex md:flex-1 justify-end '>
                    <div className='hidden md:block'>
                        <ThemeSwitch className="dark:border-zinc-700 dark:bg-zinc-800 p-3 border shadow-lg rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:hover:text-white" />
                    </div>
                </div>
            </div>
            <MobileDrawer isOpen={isOpen} render={render} onClose={() => setIsOpen(false)} />
        </header>
    );
}

function DesktopNavbar({ pathname, className }: { pathname: string, className?: string }) {
    return (
        <div className={className}>
            <nav>
                <ul className='dark:bg-zinc-800 flex flex-row  space-x-2 px-4 py-2 border rounded-full shadow-lg dark:border-zinc-700'>
                    {links.map((link) => {
                        return <NavItem
                            key={link.name}
                            link={link}
                            className={clsx(
                                "flex flex-row gap-2 py-1 px-4 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white",
                                { 'bg-zinc-200 dark:bg-zinc-600': pathname === link.href }
                            )}
                            activeClassName={
                                { 'text-black dark:text-white': pathname === link.href }
                            }
                        />;
                    })}
                </ul>
            </nav>

        </div>
    );
}

function MobileNavButton({
    className, onClick
}: {
    className?: string, onClick: () => void
}) {
    return (
        <div className={
            className
        }>
            <button
                aria-label="Open Navigation Menu"
                onClick={onClick}
                className="flex flex-row gap-2 items-center  dark:border-zinc-700 dark:bg-zinc-800 px-6 py-3 border shadow-lg rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:hover:text-white"
            >
                <p>Menu</p>
                <Menu className='w-5 h-5' />
            </button>
        </div>
    )

}

function MobileDrawer({ isOpen, render, onClose }: { isOpen: boolean, render: boolean, onClose: () => void }) {
    const pathname = usePathname();

    return (
        (render || isOpen) && <div
            className={`flex fixed top-0 right-0 w-full h-full backdrop-blur backdrop-brightness-50 justify-center
                 transition-opacity ease-out duration-300 ${render ? "opacity-100" : "opacity-0"}`}
        >
            <div className={`flex flex-col h-1/2 w-10/12 mt-8 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-50 dark:border-zinc-700
                `}
            >
                <div className='flex justify-end p-6'>
                    <button onClick={onClose}>
                        <Close className='w-4' />
                    </button>
                </div>
                <ul className="flex flex-col divide-y justify-center items-center space-y-4">
                    {links.map((link) => {
                        return (
                            <div
                                className='flex w-1/4 pt-2 items-center justify-center'
                                key={link.name}>
                                <NavItem
                                    link={link}
                                    onClick={onClose}
                                    className={clsx(
                                        "flex flex-row gap-2 py-1 px-4 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white",
                                        { 'bg-zinc-200 dark:bg-zinc-600': pathname === link.href }
                                    )}
                                    activeClassName={
                                        { 'text-black dark:text-white': pathname === link.href }
                                    }
                                />
                            </div>
                        );
                    })}
                    <div key='Theme' className='flex w-1/4 p-2  items-center justify-center border-none rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white'>
                        <li className=''>
                            <ThemeSwitch className="flex flex-row gap-1">Toggle Theme</ThemeSwitch>
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    );
}


function NavItem({
    link, className, activeClassName, onClick
}: {
    link: { name: string, href: string, icon?: React.ElementType },
    className?: string,
    activeClassName?: Object,
    onClick?: () => void
}) {
    return (
        <li>
            <Link
                href={link.href}
                className={className}
                onClick={onClick}
            >
                {link.icon && <link.icon className={clsx("w-4", activeClassName)} />}
                <p className={clsx(activeClassName)}>{link.name}</p>
            </Link>
        </li>
    )
}