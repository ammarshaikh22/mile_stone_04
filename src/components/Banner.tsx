import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <section className='relative dark:bg-neutral-900 bg-[#F9FAFB] h-screen pt-16'>
            <div className='max-w-[90%] mx-auto'>
                <div className='flex justify-between md:flex-row flex-col gap-10 items-center dark:bg-neutral-800 bg-white p-2 rounded-xl h-auto'>
                    <div className='md:w-1/2'>
                        <Image src="/banner.jpg" alt="banner" width={521} height={311} className='w-full min-h-[311px] rounded-xl' />
                    </div>
                    <div className='md:w-1/2'>
                        <Link href='/'>
                            <span className=' bg-[#F6F0FE] text-[#6D28D9] rounded-full px-3'>Health</span>
                        </Link>
                        <h1 className='text-2xl font-bold text-black dark:text-white my-4'>Wellness Unveiled: Empowering Your Journey to a Balanced and Vibrant Life</h1>
                        <p className='text-neutral-700 text-md dark:text-neutral-300'>In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner