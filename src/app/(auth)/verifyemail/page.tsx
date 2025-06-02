'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const VerifyEmail = () => {
  const [opt, setOpt] = useState('')
  const route = useRouter()
  const verify = async () => {
    try {
      if (opt.length !== 5) {
        alert('please input correct otp')
      }
      const res = await axios.post('http://localhost:8000/api/v1/verify', { token: opt })
      if (res.status === 200) return route.push('/login')
    } catch (error: any) {
      console.log(error.responce.data.message)
    }
  }
  const handleInputChange = (e: any) => {
    setOpt(e.target.value)
  }
  return (
    <main className='flex flex-col justify-center items-center h-screen bg-[#1D2332] gap-8 w-full text-white'>
      <h3>Verify Email</h3>
      <div>
        <input type="number" value={opt} className=' px-10 py-2 rounded-full bg-transparent border border-slate-400' onChange={(e) => handleInputChange(e)} />
      </div>
      <Button size={"lg"} variant={"secondary"} onClick={verify}>Verify</Button>
    </main>
  )
}

export default VerifyEmail