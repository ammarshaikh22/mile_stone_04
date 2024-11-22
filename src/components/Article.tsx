import React from 'react'
import {
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const Article = () => {
    return (
        <section className='relative pb-20'>
            <div className='md:max-w-[82%] max-w-[95%] mx-auto'>
                <div className='flex flex-col lg:items-start gap-4 mb-14 items-center'>
                    <h2 className='text-4xl'>Latest articles 🎈</h2>
                    <p className='dark:text text-lg text-center lg:text-start'>Discover the most outstanding articles ins all topics of life.</p>
                    <DropdownMenuSeparator className='bg-slate-400 w-full h-[0.5px] ' />
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        Array.from({ length: 8 }).map((_, id) => {
                            return (
                                <div className='group flex justify-between items-center gap-4 dark:shadow-[#23304b] shadow-2xl p-6 rounded-3xl' key={id}>
                                    <div className='flex flex-col gap-4 '>
                                        <h3 className='text-lg'>360-degree video: How Microsoft deployed</h3>
                                        <p className='dark:text text-sm md:line-clamp-3 line-clamp-1'>Immerse yourself in the world of literature with our curated collection of books. From bestsellers to hidden gems, our assortment caters to a variety of interests and genres.</p>
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
                            <PaginationPrevious href="#" className='text-xl'/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem >
                            <PaginationNext href="#" className='text-xl'/>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </section>
    )
}

export default Article