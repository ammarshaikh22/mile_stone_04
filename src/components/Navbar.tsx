'use client'
import Image from "next/image";
import Menu from "@/components/Menu";
import { useDispatch, useSelector } from "react-redux";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { setMode } from "@/app/reduxtollkit/slice";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const mode = useSelector((state: any) => state.theme.mode);
    const toggleTheme = () => {
        dispatch(setMode(mode === 'light' ? 'dark' : 'light'));
    };

    return (
        <header className="py-4 md:py-1 shadow-lg">
            <div className="max-w-[90%] mx-auto">
                <div className="hidden md:flex justify-between items-center">
                    <div>
                        <Image src="/logo.svg" alt="logo" width={120} height={100} className={`${mode === 'dark' ? 'invert' : ''}`} />
                    </div>
                    <div>
                        <Menu />
                    </div>
                    <div className="flex items-center gap-8">
                        <div>
                            {
                                mode === 'light'
                                    ? <DarkModeIcon onClick={toggleTheme} className="cursor-pointer" />
                                    : <LightModeIcon onClick={toggleTheme} className="cursor-pointer" />
                            }
                        </div>
                        <div>
                            <button className={`bg-black text-white text-md w-24 h-10 font-semibold rounded-[6px] border border-black ${mode === 'dark' ? 'invert' : ''}`}>
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex justify-between items-center">
                    <div>
                        <Image src="/logo.svg" alt="logo" width={100} height={100} className={`${mode === 'dark' ? 'invert' : ''}`} />
                    </div>
                    <div className="relative z-20">
                        {
                            open
                                ? <CloseIcon onClick={() => setOpen(!open)} className="cursor-pointer" />
                                : <MenuIcon onClick={() => setOpen(!open)} className="cursor-pointer" />
                        }
                    </div>
                    <div className={`absolute top-0 left-0 right-0 bottom-0 w-full transform transition-transform duration-300 h-full shadow-2xl dark:bg-neutral-900 bg-white ${open ? 'translate-x-0' : 'translate-x-full'} overflow-scroll z-10`}>
                        {
                            open
                                ?
                                <div className="pt-6 pl-8">
                                    <div>
                                        <Image src="/logo.svg" alt="logo" width={100} height={100} className={`${mode === 'dark' ? 'invert' : ''}`} />
                                    </div>
                                    <nav className="mt-10 ml-8">
                                        <div className="absolute top-20 right-6">
                                            {
                                                mode === 'light'
                                                    ? <DarkModeIcon onClick={toggleTheme} className="cursor-pointer" />
                                                    : <LightModeIcon onClick={toggleTheme} className="cursor-pointer" />
                                            }
                                        </div>
                                        <ul className="flex flex-col gap-6">
                                            <Link href='/'><li onClick={() => setOpen(false)}>Home</li></Link>
                                            <Link href='/'><li onClick={() => setOpen(false)}>About Us</li></Link>
                                            <Link href='/'><li onClick={() => setOpen(false)}>Blogs</li></Link>
                                            <Link href='/'><li onClick={() => setOpen(false)}>Docs</li></Link>
                                            <Link href='/'><li onClick={() => setOpen(false)}>Support</li></Link>
                                        </ul>
                                    </nav>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
