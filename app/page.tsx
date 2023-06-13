"use client";
import Image from 'next/image'
import { CustomFilter, Hero, SearchBar } from '@/components'
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

      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the Cars You Might Be Interested in</p>
         
        </div>
        <div className='home__filters'>
            <SearchBar/>
            <div className='home__filter-container'>
              <CustomFilter title="fuel"/>
              <CustomFilter title="year"/>
            </div>
        </div>
      </div>
    </main>
  )
}
