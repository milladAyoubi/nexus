"use client";
import Image from 'next/image'
import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { fetchCars } from '@/utils';


export default async function Home() {

 
  useEffect(()=> {
    AOS.init({
      duration: 2500, 
      delay: 400,
    })
  })
  

  const allCars = await fetchCars()
  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  console.log("hello")
  console.log(allCars)

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

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>
          </section>
        ): (
          <div className='home__error-container' >
            <h2 className='text-black text-xl'>No Results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
