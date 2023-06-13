"use client";

import React from 'react'
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';


const SearchBar = () => {

    const [manu, setManu] = useState("");

    const handleSearch = () => {

    }


  return (
    <form action="" className='searchBar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer manufacturer={manu} setManufacturer={setManu}/>
        </div>
    </form>
  )
}

export default SearchBar
