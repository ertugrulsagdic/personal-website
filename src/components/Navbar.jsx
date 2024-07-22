'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from "../components/ThemeSwitch";
import clsx from 'clsx';
import { Home } from '@/components/icons/Home';
import { Blog } from './icons/Blog';
import { Projects } from './icons/Projects';
import { Tools } from './icons/Tools';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Blog', href: '/blog', icon: Blog },
    { name: 'Projects', href: '/projects', icon: Projects },
    { name: 'Tools', href: '/tools', icon: Tools },
    { name: 'Resume', href: '/resume', icon: null },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className='flex flex-rows gap-4 w-full justify-center items-center'>
            <div className='flex-1'>

            </div>
            <div className='dark:bg-zinc-800 flex flex-row space-x-2 px-4 py-2 my-4 border rounded-full shadow-lg dark:border-zinc-700'>
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "flex flex-row gap-2 py-1 px-4 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white",
                                { 'bg-zinc-300 dark:bg-zinc-600 text-black dark:text-white': pathname === link.href }
                            )}
                        >
                            {link.icon && <LinkIcon className="w-4" />}
                            <p>{link.name}</p>
                        </Link>
                    );
                })}
            </div>
            <div className='flex flex-1 justify-end'>
                <ThemeSwitch />
            </div>
        </header>
    );
}
