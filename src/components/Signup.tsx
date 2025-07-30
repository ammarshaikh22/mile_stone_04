'use client'
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from "@/lib/axios";
import { EyeIcon, EyeOffIcon } from 'lucide-react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' or 'success'
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const route = useRouter();

  const signUp = async () => {
    if (!name || !email || !password) {
      setMessage('Please Enter all fields');
      setMessageType('error');
      return;
    }
    try {
      setLoader(true);
      const res = await axios.post('/api/v1/signup', { name, email, password });
      if (res.status === 200) {
        setName('');
        setEmail('');
        setPassword('');
        setMessage('Signup successful! Redirecting to login...');
        setMessageType('success');
        setTimeout(() => route.push('/login'), 2000); // Redirect after 2 seconds
      }
    } catch (error:any) {
      const errorMessage = error.response?.data?.message || 'An error occurred during signup';
      setMessage(errorMessage);
      setMessageType('error');
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-screen">
          <ScaleLoader color="blue" aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <div className="w-full mx-auto shadow-input bg-transparent px-4 sm:px-6 lg:px-8">
          <div className="w-full flex justify-end mb-6">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Create an account</h2>
          <p className="dark:text text-md text-center">Enter your email below to create your account.</p>
          {message && (
            <div className={`text-center mb-4 ${messageType === 'error' ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </div>
          )}
          <div className="my-8">
            <LabelInputContainer className="mb-6">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Tyler"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-6">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-6">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full text-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </LabelInputContainer>
            <button
              className="bg-[#111827] relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              onClick={signUp}
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
            <p className="text-sm text-white mt-6 text-center">
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }:any) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default Signup;