'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Heading from './Heading'
import { animateBlogCards } from '../helper/AllAnimations'
const BlogPost = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('#blog-card');
        const card2 = document.querySelector('#blog-card2');
        animateBlogCards(cards, card2);
    })
    return (
        <section className='relative '>
            <div className='md:max-w-[82%] max-w-[95%] mx-auto'>
                <Heading id='blog-title' heading='The latest posts 🎈' para='Discover the most outstanding Posts on all topics of life.' />
                <div className='grid lg:grid-cols-[482px_1fr] grid-cols-1 grid-rows-[187px_1fr] gap-6 '>
                    <div id='blog-card2' className='col-span-1 row-span-3 relative h-full'>
                        <div className='flex flex-col gap-8 lg:items-start items-center'>
                            <Image src="/blog1.webp" alt="image" width={482} height={395} className='rounded-3xl h-[400px]' />
                            <div className='flex flex-col gap-4'>
                                <h3 className='text-xl'>360 degree podcast post</h3>
                                <p className='dark:text md:block hidden'>Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and genres.</p>
                                <div className='flex gap-2 items-center'>
                                    <Image src='/avator.webp' alt="image" width={50} height={50} className='rounded-full object-cover' />
                                    <span>Moderation</span>
                                    <span>Aug 24, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        Array.from({ length: 3 }).map((_, id: any) => {
                            return (
                                <div id='blog-card' className='col-span-1 row-span-1' key={id}>
                                    <div className='flex items-center justify-center md:gap-4 gap-2'>
                                        <div className='flex flex-col md:gap-4 gap-2'>
                                            <h3 className=' text-md'>360-degree video: How Microsoft deployed</h3>
                                            <p className='dark:text text-sm md:line-clamp-3 line-clamp-1'>Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and genres.</p>
                                            <div className='md:flex gap-2 items-center hidden'>
                                                <Image src='/avator.webp' alt="image" width={50} height={50} className='rounded-full object-cover' />
                                                <span className='text-sm'>Moderation</span>
                                                <span className='text-sm'>Aug 24, 2023</span>
                                            </div>
                                        </div>
                                        <Image src="/blog2.webp" alt="image" width={400} height={187} className='rounded-3xl md:h-[187px] md:min-w-[160px] w-[400px] h-[88px]' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogPost