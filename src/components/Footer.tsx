import React from 'react'
import { DropdownMenuSeparator } from './ui/dropdown-menu'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className='relative pt-6'>
            <div className='md:max-w-[94%] max-w-[96%] mx-auto'>
                <div className="dark:bg-gray-900 dark:text-white border border-gray-900 p-4  md:py-10 md:px-8 rounded-3xl flex flex-col gap-6 w-full mx-auto">
                    <div className="flex items-start space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 dark:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 12h3m-6 8h-3l-8-4V8l8-4h3l8 4v8l-8 4zm0-10h.01M8 10h.01M8 14h.01M12 14h.01"
                            />
                        </svg>
                        <h2 className="text-lg font-semibold">Stay up to date</h2>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Get notified when I publish something new, and unsubscribe at any time.
                    </p>
                    <form className="flex items-center border border-gray-900 dark:bg-gray-800 rounded-3xl p-1">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none px-3 py-2 text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-3 flex-shrink-0"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <DropdownMenuSeparator className='bg-slate-400 w-full h-[0.5px] mt-24' />
                <div className='py-10 flex justify-between items-center md:flex-row flex-col gap-6 md:gap-0'>
                    <span className='dark:text text-sm'>© 2024 AS Company, Inc. All rights reserved.</span>
                    <div className='flex gap-6'>
                        <Image src='/facebook.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                        <Image src='/github.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                        <Image src='/tiktok.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                        <Image src='/x-twitter.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer