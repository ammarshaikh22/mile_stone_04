import React from 'react'
import Image from 'next/image'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Heading from './Heading'
const Article = () => {
    return (
        <section className='relative pb-20'>
            <div className='md:max-w-[82%] max-w-[95%] mx-auto'>
                <Heading id='article-title' heading='Latest articles 🎈' para='Discover the most outstanding articles ins all topics of life.' />
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        [1, 2, 3, 4].map((post, id) => {
                            return (
                                <div id='article-card' className='group flex justify-between items-center gap-4 dark:shadow-[#23304b] shadow-2xl p-6 rounded-3xl' key={id}>
                                    <div className='flex flex-col gap-4 '>
                                        <h3 className='text-lg'>360 degree podcast post</h3>
                                        <p className='dark:text text-sm md:line-clamp-3 line-clamp-1'>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempore atque laboriosam repudiandae facilis rerum necessitatibus earum deserunt, nemo numquam.
                                        </p>
                                        <div className='md:flex gap-2 items-center hidden'>
                                            <Image src='/avator.webp' alt="image" width={50} height={50} className='rounded-full object-cover' />
                                            <span className='text-sm'>Moderation</span>
                                            <span className='text-sm'>Aug 24, 2023</span>
                                        </div>
                                    </div>
                                    <Image src="/blog6.webp" alt="image" width={180} height={187} className='rounded-3xl md:h-[187px] md:min-w-[180px] w-[150px] h-[88px]' />
                                </div>
                            )
                        })
                    }
                </div>
                <Pagination className='mt-10'>
                    <PaginationContent className='text-xl' >
                        <PaginationItem>
                            <PaginationPrevious href="#" className='text-xl' />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationNext href="#" className='text-xl' />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </section>
    )
}

export default Article