import Login from '@/components/Login'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
    return (
        <section className='min-h-screen relative before:lg:bg-[#18181B] before:absolute before:top-0 before:left-0 before:content-[""] before:w-1/2  after:bg-[#09090B] after:top-0 after:right-0 after:absolute after:lg:w-1/2 after:w-full after:h-full before:h-full '>
            <div className="max-w-[94%] mx-auto relative z-10">
                <div className='flex justify-between lg:flex-row flex-col lg:items-start items-center'>
                    <div className='py-10 w-1/2  hidden text-white lg:flex flex-col'>
                        <Image src="/logo.webp" alt="image" width={60} height={60} />
                        <div className="mt-[350px]">
                            <p className='text-xl max-w-[90%]'>"This theme has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before."Chis agency</p>
                        </div>
                    </div>
                    <div className=' text-white lg:w-1/2 w-full pt-10 '>
                        <Login />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage