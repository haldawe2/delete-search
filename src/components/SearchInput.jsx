import React from 'react'

export default function ProductCard({ handleSearch }) {

    const handleSearchEvent = (e) => {
        handleSearch(e.target.value);
    }

  return (
    <div className='search'>
        <label>Search:</label>
        <input type='text' name='seach' onChange={handleSearchEvent}/>
    </div>
    
  )
}