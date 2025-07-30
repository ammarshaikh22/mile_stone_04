'use client'
import React, { useState } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from '@/lib/axios';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)
    const route = useRouter()

    const login = async () => {
        try {
            if (!email || !password) {
                alert('Please enter email and password')
                return
            }
            setLoader(true)
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            const data = await res.json()
            localStorage.setItem('token', data.token)
            if (res.status === 200) return route.push('/')
        } catch (error: any) {
            if (error.response.data.message === 'please verify your email') {
                alert(error.response.data.message)
                route.push('/verifyemail')
            } else if (error.response.data.message === 'user not found') {
                alert(error.response.data.message)
                route.push('/signup')
            } else {
                alert(error.response.data.message)
            }
        } finally {
            setLoader(false)
        }
    }
    return (
        <div>
            {
                loader ?
                    <div className='flex justify-center items-center h-screen'>
                        <ScaleLoader
                            color='blue'
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div> :
                    <div className="w-full mx-auto shadow-input bg-transparent px-4 sm:px-6 lg:px-8">
                        <div className="w-full flex justify-end mb-6">
                            <Link href='/signup'><Button variant={"ghost"}>Signup</Button></Link>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2 text-center">Login to your account</h2>
                        <p className='dark:text text-md text-center mb-2'>Enter your email below to Login to your account</p>
                        <form onClick={(e) => e.preventDefault()} className="my-8" >
                            <LabelInputContainer className="mb-6">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    placeholder="projectmayhem@fc.com"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full"
                                />
                            </LabelInputContainer>
                            <LabelInputContainer className="mb-6">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    placeholder="••••••••"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full text-white"
                                />
                            </LabelInputContainer>
                            <button
                                className="bg-[#111827] relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                type="submit"
                                onClick={login}
                            >
                                Login &rarr;
                                <BottomGradient />
                            </button>
                            <p className='text-sm text-white mt-6 text-center'>Don&apos;t have an account? <Link href='/signup'>Sign Up</Link></p>
                        </form>
                    </div>
            }
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
export default Login