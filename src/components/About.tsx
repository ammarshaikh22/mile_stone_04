'use client'
import { animationAbout } from '@/helper/AllAnimations';
import Image from 'next/image'
import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        const title = document.getElementById('about-title');
        const heading = document.getElementById('about-heading');
        const para = document.getElementById('about-para');
        const btn = document.getElementById('about-btn');
        const image = document.getElementById('about-image');
        animationAbout(title, heading, para, btn, image);
    }, []);
    return (
        <section id='about' className='relative mb-24'>
            <div className='md:max-w-[82%] max-w-[95%] mx-auto'>
                <div className='flex items-center justify-between md:flex-row flex-col gap-6'>
                    <div className='flex flex-col items-start gap-4'>
                        <span id='about-title' className='text-sm'>SUPPER CHANGE YOUR PLANNING POWERS</span>
                        <h4 id='about-heading' className='text-4xl'>Become an author and share your great stories</h4>
                        <p id='about-para' className='dark:text text-sm'>Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome. </p>
                        <button id='about-btn' className='bg-[#4338CA] text-white px-6 py-2 rounded-full'>Become an Author</button>
                    </div>
                    <Image id='about-image' src='/about.webp' alt='image' width={500} height={500} />
                </div>
            </div>
        </section>
    )
}

export default About