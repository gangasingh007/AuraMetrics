import { SignInButton, SignUpButton } from '@clerk/nextjs'
import {  BrainCircuit } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 px-6 py-2 border-b border-border/40 bg-background/70 backdrop-blur-md h-14 z-50 '>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href='/' className='flex items-center gap-2'>
                <BrainCircuit width={36} height={36} className='w-10 text-teal-400'></BrainCircuit>
                <span className='font-semibold text-lg'>AuraMetrics</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
                <Link href='#how-it-works' className='text-muted-foreground transition hover:text-foreground'>How it works</Link>
                <Link href='#what-to-ask' className='text-muted-foreground transition hover:text-foreground'>What to ask</Link>
                <Link href='#pricing' className='text-muted-foreground transition hover:text-foreground'>Pricing</Link>
            </div>
            <div className="flex items-center gap-3">
                <SignInButton mode="modal">
                    <Button variant={"ghost"} className='px-4 cursor-pointer' size={"sm"}>
                        Sign In
                    </Button>
                </SignInButton>
                <SignUpButton mode='modal'>
                    <Button className='px-4 text-black cursor-pointer' size={"sm"}>
                        Sign Up
                    </Button>
                </SignUpButton>
            </div>
        </div>
    </nav>
  )
}

export default Header