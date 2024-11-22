import Heading from '@/components/Heading'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <section className='relative py-10'>
            <div className='md:max-w-[82%] max-w-[95%] mx-auto'>
                <Heading heading='Get in touch' para='We’d love to hear from you. Fill out the form below to get in touch with us.' className='my-4' />
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='max-w-sm space-y-8'>
                        <div className='flex flex-col gap-4 text-start'>
                            <h5>🚀 ADDRESS</h5>
                            <span>123 Main Street, New York, NY 10001</span>
                        </div>
                        <div className='flex flex-col gap-4 text-start'>
                            <h5>💌 EMAIL</h5>
                            <span>ammarshaikh50099@gmail.com</span>
                        </div>
                        <div className='flex flex-col gap-4 text-start'>
                            <h5>☎️ PHONE</h5>
                            <span>03162324240</span>
                        </div>
                        <div className='flex flex-col gap-4 text-start'>
                            <h5>🕒 WORKING HOURS</h5>
                            <span>Mon - Fri: 9:00 - 19:00</span>
                        </div>
                        <div className='flex flex-col gap-4 text-start'>
                            <h5>👋 SOCIALS</h5>
                            <ul className='flex gap-4'>
                                <Image src='/facebook.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                                <Image src='/github.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                                <Image src='/tiktok.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                                <Image src='/x-twitter.svg' alt='image' width={25} height={30} className='dark:bg-gray-500 rounded-md' />
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-2 w-full items-start'>
                            <label htmlFor="name" className='dark:text text-sm'>Full name</label>
                            <input type="text" className='bg-transparent border border-slate-500 hover:shadow-input outline-none px-4 w-full py-2 text-white rounded-3xl' />
                        </div>
                        <div className='flex flex-col gap-2 w-full items-start'>
                            <label htmlFor="email" className='dark:text text-sm'>Email</label>
                            <input type="email" className='bg-transparent border border-slate-500 hover:shadow-input outline-none px-4 w-full py-2 text-white rounded-3xl' />
                        </div>
                        <div className='flex flex-col gap-2 w-full items-start'>
                            <label htmlFor="message" className='dark:text text-sm'>message</label>
                            <textarea className='resize-none h-[200px] bg-transparent border border-slate-500 hover:shadow-input outline-none px-4 w-full py-2 text-white rounded-3xl' />
                        </div>
                        <button className='bg-[#4338CA] text-white px-6 py-2 rounded-full'>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact