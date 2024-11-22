import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='relative pt-[400px] md:pt-52 mb-24'>
            <div className='md:max-w-[82%] max-w-[95%] mx-auto'>
                <div className='flex items-center justify-between md:flex-row flex-col gap-6'>
                    <div className='flex flex-col items-start gap-4'>
                        <span className='text-sm'>SUPPER CHANGE YOUR PLANNING POWERS</span>
                        <h4 className='text-4xl'>Become an author and share your great stories</h4>
                        <p className='dark:text text-sm'>Become an author you can earn extra income by writing articles. Read and share new perspectives on just about any topic. Everyone’s welcome. </p>
                        <button className='bg-[#4338CA] text-white px-6 py-2 rounded-full'>Become an Author</button>
                    </div>
                    <Image src='/about.webp' alt='image' width={500} height={500} />
                </div>
            </div>
        </section>
    )
}

export default About