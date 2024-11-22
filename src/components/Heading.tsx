import React from 'react'
import { DropdownMenuSeparator } from './ui/dropdown-menu'

const Heading = ({ heading, para, className }: { heading: string, para: string, className?: string }) => {
    return (
        <div className='flex flex-col lg:items-start gap-6 mb-14 items-center'>
            <h2 className='text-4xl'>{heading}</h2>
            <p className='dark:text text-lg text-center lg:text-start'>{para}</p>
            <DropdownMenuSeparator className={`bg-slate-500 my-6 w-full h-[0.5px] ${className}`} />
        </div>
    )
}

export default Heading