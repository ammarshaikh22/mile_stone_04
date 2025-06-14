"use client";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ModeToggle } from './ModeButton'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
const Header = () => {
    const [active, setActive] = useState<string | null>(null);
    const [login, setLogin] = useState(false)
    const route = useRouter()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) setLogin(!login)
    }, [])

    const handleLogout = async () => {
        try {
            if (!localStorage.getItem('token')) return
            localStorage.removeItem('token')
            setLogin(!login)
            route.push('/login')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <header className='sticky top-0 z-50 dark:bg-[#111827] md:py-0 py-4 bg-white shadow-lg'>
            <div className='mx-auto 2xl:max-w-[1440px]'>
                <div className='flex justify-around items-center'>
                    <div className='lg:hidden'>
                        <Sheet>
                            <SheetTrigger>
                                <MenuIcon />
                            </SheetTrigger>
                            <SheetContent side={'left'}>
                                <SheetHeader>
                                    <SheetTitle className='mb-6'>
                                        <div className='flex items-start gap-8 flex-col'>
                                            <Image src="/logo.png" alt="logo" width={60} height={50} />
                                            <p className='dark:text text-start'>Discover the most outstanding articles on all topics of life. Write your stories and share them with the community.</p>
                                            <div className='flex gap-6'>
                                                <Image src='/facebook.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                                                <Image src='/github.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                                                <Image src='/tiktok.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                                                <Image src='/x-twitter.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                                            </div>
                                            <div className='w-full'>
                                                <input type="text" className='bg-transparent border border-gray-600 outline-none px-4 w-full py-2 text-white rounded-3xl' placeholder='Type to search...' />
                                            </div>
                                        </div>
                                    </SheetTitle>
                                    <SheetDescription>
                                        <ul className='flex gap-6 text-lg dark:text-white items-start flex-col text-black'>
                                            <Link href='/'><li>Home</li></Link>
                                            <Link href='/blogs'><li>All Post</li></Link>
                                            <Link href='/contact'><li>Contact</li></Link>
                                        </ul>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className='flex items-center gap-14'>
                        <Image src="/logo.png" alt="logo" width={80} height={50} />

                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='lg:block hidden w-full '>
                            <Menu setActive={setActive} className='text-sm'>
                                <Link href='/'>
                                    <MenuItem setActive={setActive} active={active} item="Home">
                                    </MenuItem>
                                </Link>
                                <Link href='/about'>
                                    <MenuItem setActive={setActive} active={active} item="About">
                                    </MenuItem>
                                </Link>
                                <Link href='/blogs'>
                                    <MenuItem link='/blogs' setActive={setActive} active={active} item="All Post" >
                                    </MenuItem>
                                </Link>
                                <Link href='/contact'>
                                    <MenuItem setActive={setActive} active={active} item="ContactUs">
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </div>
                        <div>
                            <ul className='flex items-center gap-6 justify-center dark:text'>
                                <Link href='/create' className='cursor-pointer md:flex hidden gap-2'>
                                    <span>+</span> Create
                                </Link>
                                <div className='lg:block hidden'>
                                    <input type="text" className='bg-transparent border border-gray-600 outline-none px-4 w-64 py-2 text-white rounded-3xl' placeholder='Type to search...' />
                                </div>
                                <li className='cursor-pointer flex gap-2 items-center'>
                                    <Sheet>
                                        <SheetTrigger>
                                            <AccountCircleIcon className='text-5xl' />
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle className='mb-6'>
                                                    <div className='flex items-center gap-3 md:flex-row flex-col'>
                                                        <div>
                                                            <AccountCircleIcon className='text-6xl' />
                                                        </div>
                                                        <div>
                                                            <h2 className='mb-1'>Ammar Shaikh</h2>
                                                            <p className='text-sm'>ammarshaikh50099@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </SheetTitle>
                                                <SheetDescription>
                                                    <ul className='flex flex-col text-lg dark:text-white gap-3 text-black'>
                                                        <Link href='/dashboard'><li>Profile</li></Link>
                                                        <DropdownMenuSeparator className='border border-gray-500' />
                                                        <Link href='/create'><li>Create</li></Link>
                                                        <DropdownMenuSeparator className='border border-gray-500' />
                                                        <Link href='/dashboard/profile'><li>Edite Profile</li></Link>
                                                        <DropdownMenuSeparator className='border border-gray-500' />
                                                        <Link href='/dashboard/posts'><li>My Post</li></Link>
                                                        <DropdownMenuSeparator className='border border-gray-500' />
                                                        {login ? <li onClick={handleLogout}>Logout</li> : <Link href='/login'><li>Login</li></Link>}
                                                        <DropdownMenuSeparator className='border border-gray-500' />
                                                    </ul>
                                                </SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header