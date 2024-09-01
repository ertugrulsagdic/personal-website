'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import ThemeSwitch from "./ThemeSwitch";
import clsx from 'clsx';
import { Blog } from '@/components/icons/Blog';
import { Projects } from '@/components/icons/Projects';
import { Tools } from '@/components/icons/Tools';
import { Menu } from './icons/Menu';
import { Close } from './icons/Close';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LogoLight from '../images/logos/logo-light.png';
import LogoDark from '../images/logos/logo-dark.png';
import { NavbarLink } from '@/data/dataTypes/navbarLinks';
import { LanguageIcon } from './icons/LanguageIcon';

export default function Navbar({ locale, translations }: {
    locale: string,
    translations: {
        articles: string,
        projects: string,
        tools: string,
        resume: string,
        toggleTheme: string,
        changeLanguage: string
    }
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [render, setRender] = useState(isOpen);
    const [isVisible, setIsVisible] = useState(true);
    const [prevScroll, setPrevScroll] = useState(0);

    const links: NavbarLink[] = [
        { name: translations.articles, href: '/articles', icon: Blog },
        { name: translations.projects, href: '/projects', icon: Projects },
        { name: translations.tools, href: '/tools', icon: Tools },
        { name: translations.resume, href: '/resume', icon: () => null },
    ];
    // const { resolvedTheme } = useTheme();

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setRender(isOpen);
        }, 150);
        return () => clearTimeout(timeoutId);
    }, [isOpen, render]);

    useEffect(() => {
        function handleScroll() {
            // if scroll down hide the navbar
            // if scroll up show the navbar
            if (window.scrollY > prevScroll) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setPrevScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },);

    const pathname = usePathname();

    return (

        <header className={`sticky w-full ${isVisible ? 'top-0' : ''} z-50 flex justify-center print:hidden`}>
            <div className='flex-1 max-w-7xl lg:px-8'>
                <div className="px-4 sm:px-8 lg:px-24">
                    <div className='flex flex-row my-4'>
                        <div className='flex flex-1 items-center' >
                            <div
                                className='h-12 w-12 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
                            >
                                <Link
                                    href={`/${locale}`}
                                    aria-label={"Avatar Image"} className='pointer-events-auto'>
                                    <Image
                                        src={LogoDark}
                                        alt=""
                                        className='hidden dark:block rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 w-11 h-11'
                                        priority
                                        sizes="12rem"
                                    />
                                    <Image
                                        src={LogoLight}
                                        alt=""
                                        className='dark:hidden rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 w-11 h-11'
                                        priority
                                        sizes="12rem"
                                    />
                                </Link>
                            </div>
                        </div>
                        <MobileNavButton className='pointer-events-auto md:hidden ' onClick={() => setIsOpen(true)} />
                        <DesktopNavbar links={links} locale={locale} pathname={pathname} className='ml-1 pointer-events-auto hidden md:block' />

                        <div className='flex md:flex-1 justify-end '>
                            <div className='hidden md:block md:ml-2'>
                                <SelectLanguage className="flex items-center gap-1 p-3 bg-white dark:border-zinc-700 dark:bg-zinc-800 border shadow-lg rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:hover:text-white" locale={locale} />
                            </div>
                            <div className='hidden md:block md:ml-2'>
                                <ThemeSwitch className="bg-white dark:border-zinc-700 dark:bg-zinc-800 p-3 border shadow-lg rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:hover:text-white" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <MobileDrawer locale={locale} translations={{
                changeLanguageString: translations.changeLanguage,
                toggleThemeString: translations.toggleTheme
            }} links={links} isOpen={isOpen} render={render} onClose={() => setIsOpen(false)} />
        </header >
    );
}

function DesktopNavbar({ links, locale, pathname, className }: {
    links: NavbarLink[],
    locale: string,
    pathname: string,
    className?: string
}) {
    return (
        <div className={className}>
            <nav>
                <ul className='bg-white dark:bg-zinc-800 flex flex-row  space-x-2 px-4 py-2 border rounded-full shadow-lg dark:border-zinc-700'>
                    {links.map((link) => {
                        return <NavItem
                            key={link.name}
                            locale={locale}
                            link={link}
                            className={clsx(
                                "flex flex-row gap-2 py-1 px-4 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white",
                                { 'bg-zinc-200 dark:bg-zinc-600': pathname === `/${locale}${link.href}` }
                            )}
                            activeClassName={
                                { 'text-black dark:text-white': pathname === `/${locale}${link.href}` }
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

function MobileDrawer({ locale, links, translations, isOpen, render, onClose }: {
    locale: string,
    links: NavbarLink[],
    translations: {
        changeLanguageString: string,
        toggleThemeString: string,
    },
    isOpen: boolean,
    render: boolean,
    onClose: () => void
}) {
    const pathname = usePathname();

    return (
        (render || isOpen) && <div
            className={`md:hidden flex fixed top-0 right-0 z-0 w-full h-full backdrop-blur backdrop-brightness-50 justify-center
                 transition-opacity ease-out duration-300 ${render ? "opacity-100" : "opacity-0"}`}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className={`relative flex flex-col z-10 h-fit w-10/12 mt-8 pb-16 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-50 dark:border-zinc-700
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
                                className='flex w-1/2 sm:w-1/3 pt-2 items-center justify-center'
                                key={link.name}>
                                <NavItem
                                    link={link}
                                    locale={locale}
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
                    <div key='Language' className='flex items-center justify-center border-none rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white'>
                        <li>
                            <SelectLanguage className='flex flex-row gap-1 items-center p-2' locale={locale}>{translations.changeLanguageString}</SelectLanguage>
                        </li>
                    </div>
                    <div key='Theme' className='flex items-center justify-center border-none rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white'>
                        <li>
                            <ThemeSwitch className="flex p-2 flex-row gap-1">{translations.toggleThemeString}</ThemeSwitch>
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    );
}

function SelectLanguage({ className, children, locale }: {
    className?: string,
    children?: string,
    locale: string
}) {
    const router = useRouter();

    const changeUrl = (newLocale: string) => {
        let currentUrl = window.location.href;
        let newUrl = currentUrl.replace(/\/(en|tr)(\/|)/, `/${newLocale}/`);
        router.push(newUrl);
    }

    const newLocale = locale === 'en' ? 'tr' : 'en';
    return (
        <button
            onClick={() => changeUrl(newLocale)}
            className={clsx(
                `${children ? "" : "[&>p]:hidden [&>p]:hover:block duration-300 ease-in-out"}`,
                className)
            }
        >
            {children && <p>{children}:</p>}
            <p className=''>{newLocale.toUpperCase()}</p>
            <LanguageIcon className='w-6 h-6' />
        </button>
    );
}


function NavItem({
    link, locale, className, activeClassName, onClick
}: {
    link: { name: string, href: string, icon?: React.ElementType },
    locale?: string,
    className?: string,
    activeClassName?: Object,
    onClick?: () => void
}) {
    return (
        <li>
            <Link
                href={locale ? `/${locale}${link.href}` : link.href}
                className={className}
                onClick={onClick}
            >
                {link.icon && <link.icon className={clsx("w-4", activeClassName)} />}
                <p className={clsx(activeClassName)}>{link.name}</p>
            </Link>
        </li>
    )
}