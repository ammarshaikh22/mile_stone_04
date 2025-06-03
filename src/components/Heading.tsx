'use client'
import React, { useEffect } from 'react'
import { DropdownMenuSeparator } from './ui/dropdown-menu'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Heading = ({ id, heading, para, className }: { id?: string, heading: string, para: string, className?: string }) => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#${id}`,
                start: 'top 60%',
                end: 'top 50%',
                scrub: true,
            },
        });

        tl.fromTo(`#${id}`, {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 0.3
        })
    }, []);
    return (
        <div id={id} className='flex flex-col lg:items-start gap-6 mb-14 items-center'>
            <h2 className='text-4xl'>{heading}</h2>
            <p className='dark:text text-lg text-center lg:text-start'>{para}</p>
            <DropdownMenuSeparator className={`bg-slate-500 my-6 w-full h-[0.5px] ${className}`} />
        </div>
    )
}

export default Heading