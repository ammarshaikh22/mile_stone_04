'use client'
import React, { useEffect } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { animationNews } from '@/helper/AllAnimations';
const News = () => {
    useEffect(() => {
        const card = document.querySelectorAll('#card');
        animationNews(card);
    })
    return (
        <section className='relative md:py-28 py-20'>
            <div className='md:max-w-[82%] max-w-[95%] mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div className='flex flex-col items-start gap-8'>
                        <span id='card' className='text-sm'>SUPPER CHANGE YOUR PLANNING POWERS</span>
                        <h4 id='card' className='text-4xl'>Join our newsletter 🎉</h4>
                        <p id='card' className='dark:text text-sm'>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
                        <div id='card'>
                            <ul className='flex gap-2 items-start text-lg flex-col'>
                                <li>Create a free account</li>
                                <li>Write your story</li>
                            </ul>
                        </div>
                        <div id='card' className='relative w-[80%]'>
                            <input type="text" className='dark:bg-[#111827] border bg-transparent border-gray-600 outline-none px-4 w-full py-2 text-white rounded-3xl' placeholder='Enter your Email' />
                            <ArrowCircleRightIcon className='absolute right-1 top-[50%] translate-y-[-50%] text-4xl' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News