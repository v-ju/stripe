import React from 'react'
import Image from 'next/image'

const SearchBarDashboard = () => {
  return (
    <div className='h-5 flex justify-between pr-2'>
        <div className=' flex justify-start items-center w-65 bg-white border border-transparent rounded-md px-2'>
            <Image alt='search' src={'./search-icon.svg'} width={12} height={12}/>
            <span className='text-xs text-gray-400 mx-2 font-medium tracking-normal'>
              Search
            </span>
        </div>
        <div>
            <Image alt='bell-icon' src={'./bell-icon.svg'} width={70} height={70}/>
        </div>
    </div>
  )
}

export default SearchBarDashboard
