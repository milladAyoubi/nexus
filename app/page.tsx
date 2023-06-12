"use client";
import Image from 'next/image'
import { Hero } from '@/components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Home() {

  useEffect(()=> {
    AOS.init({
      duration: 2500, 
      delay: 400,
    })
  })
  
  return (
    <main className="overflow-hidden">
      <Hero/>
    </main>
  )
}
