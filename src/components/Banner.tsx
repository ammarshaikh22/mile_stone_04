import React from 'react';
import { Button } from "@/components/ui/button"
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="relative h-screen">
            <div className="md:max-w-[82%] max-w-[95%] mx-auto relative h-full">
                <div className="relative h-[400px] md:h-[496px] md:w-full w-[95%] mx-auto max-w-[992px] rounded-[40px]">
                    <div className="absolute inset-0 bg-[url('/banner-bg.webp')] bg-cover bg-center bg-no-repeat rounded-[40px]" />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-[40px]" />
                    <div className="relative z-10 flex h-full items-start md:p-14 p-6 flex-col md:max-w-[80%] max-w-[95%]">
                        <h1 className="text-white md:text-4xl text-2xl font-bold md:mb-6 mb-4">
                            Your Daily Dose of Inspiration and Knowledge
                        </h1>
                        <p className='line-clamp-3 text-gray-300'>Stay inspired and informed with fresh ideas, stories, and perspectives delivered daily. Dive into topics that spark curiosity, ignite creativity, and expand your knowledge. This is your space to explore, learn, and grow</p>
                        <Button size={'lg'} variant="destructive" className='bg-[#0D9488] md:mt-8 mt-6'>Read more</Button>
                    </div>
                    <div className='lg:absolute mt-6 lg:mt-0 lg:-bottom-24 lg:left-1/2 lg:-translate-x-1/2 flex justify-between items-center gap-8 lg:flex-row flex-col'>
                        {
                            Array.from({ length: 3 }).map((_, id: any) => {
                                return (
                                    <div className='dark:bg-[#111827] bg-white text-black dark:text-white w-full lg:w-[272px] h-[180px] rounded-[30px] shadow-2xl shadow-black dark:shadow-[#23304b] flex justify-start items-start flex-col gap-3 p-5' key={id}>
                                        <h3 className='line-clamp-3'>How architects visualize design for world’s biggest airport</h3>
                                        <div className='flex justify-between items-center gap-4'>
                                            <Image src="/avator.webp" alt="logo" width={50} height={50} className='rounded-full object-cover' />
                                            <div>
                                                <h5>Jenny Wilson</h5>
                                                <span>Aug 24, 2023</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
