'use client'
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import gsap from 'gsap';
const Banner = () => {
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo('#banner-title', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 0.3,
            duration: 2,
        });
        tl.fromTo('#banner-para', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2
        });
        tl.fromTo('#banner-btn', {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2
        });
        tl.fromTo('#banner-card', {
            x: 1000,
            opacity: 0,
            rotate: 90,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 2,
            rotate: 0,
            scale: 1
        });
    }, []);

    return (
        <section className="relative pb-40 overflow-x-hidden">
            <div className="md:max-w-[82%] max-w-[95%] mx-auto relative h-full">
                <div className="relative h-[400px] md:h-[496px] md:w-full w-[95%] mx-auto max-w-[992px] rounded-[40px]">
                    <div className="absolute inset-0 bg-[url('/banner-bg.webp')] bg-cover bg-center bg-no-repeat rounded-[40px]" />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-[40px]" />
                    <div className="relative z-10 flex h-full items-start md:p-14 p-6 flex-col md:max-w-[80%] max-w-[95%]">
                        <h1 id='banner-title' className="text-white md:text-4xl text-2xl font-bold md:mb-6 mb-4">
                            Generative AI isn’t the future — it’s the artist of tomorrow, the writer of now, and the architect of human-machine evolution.
                        </h1>
                        <p id='banner-para' className=' text-gray-300'>Generative AI is transforming development as we know it — from large language models that write code to multimodal systems that generate entire applications from a single prompt. This blog is a deep dive into the mechanics of creation: token by token, layer by layer.</p>
                        <Button id='banner-btn' size={'lg'} variant="destructive" className='bg-[#0D9488] md:mt-8 mt-6'>Read more</Button>
                    </div>
                    <div className='lg:absolute mt-6 lg:mt-0 lg:-bottom-24 lg:left-1/2 lg:-translate-x-1/2 flex justify-between items-center gap-8 lg:flex-row flex-col'>
                        {
                            Array.from({ length: 3 }).map((_, id: any) => {
                                return (
                                    <div id='banner-card' className='dark:bg-[#111827] bg-white text-black dark:text-white w-full lg:w-[272px] h-[180px] rounded-[30px] shadow-2xl shadow-black dark:shadow-[#23304b] flex justify-start items-start flex-col gap-3 p-5' key={id}>
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
