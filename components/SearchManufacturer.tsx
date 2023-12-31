"use client";

import { useState, Fragment } from 'react';
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants';


const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {

  const [first, setFirst] = useState('');

  const filterManu = first === "" ? manufacturers 
          : manufacturers.filter((item) => (
              item.toLowerCase().replace(/\s+/g,"").includes(first.toLowerCase().replace(/\s+/g,""))
          ))

  return (
    <div className='search-maufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
        <Combobox.Button className='absolute top-[14px]'>
        <Image src="/car-logo.svg" width={20} height={20} className='ml-4' alt="Car Logo"/>
        </Combobox.Button>

        <Combobox.Input className='search-manufacturer__input' placeholder='Volkswagen' displayValue={(manufacturer: string ) => manufacturer}
        onChange={(e) => setFirst(e.target.value)}/> 


        <Transition as={Fragment} leave="transition ease-in duration-100" 
        leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setFirst('')}>
            <Combobox.Options>
              {
                filterManu.map((item) => (
                  <Combobox.Option key={item} className={({active}) => `relative search-manufacturer__option 
                  ${active ? 'bg-primary-blue text-grey' : 'text-grey-900'} `} value={item}>
                        {item}
                    </Combobox.Option>
                )
              )}
            </Combobox.Options>
        </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
