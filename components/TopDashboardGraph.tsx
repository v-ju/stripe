import React from 'react'
import Image from 'next/image'

const TopDashboardGraph = () => {
  return (
    <div className='flex flex-col mr-10'>
        <div className='flex pb-5'>
            <div className='mr-20'>
                <div className='text-2xs flex '>
                    Net volume
                    <Image alt='arrow' src={'./down-grey-chev.svg'} width={7} height={7} className='ml-1'/>
                </div>
                <div className='text-sm font-medium'>
                    <span>₹</span>
                    35,28,198.72
                </div>
                <div className='text-2xs font-medium text-gray-400 tracking-tighter'>
                    14:00
                </div>
            </div>
            <div>
                <div className='text-2xs flex'>
                    Yesterday
                    <Image alt='arrow' src={'./down-grey-chev.svg'} width={7} height={7} className='ml-1'/>
                </div>
                <div className='text-2xs font-medium text-gray-400'>
                    <span>₹</span>
                    35,28,198.72 
                </div>  
            </div>
        </div>
        <div>
            <Image alt='graph' src={'./graph-dashboard.svg'} width={500} height={500}/>
        </div>
        <div className='flex flex-row justify-between'>
            <span className='font-top-dashboard'>00:00</span>
            <span className='font-top-dashboard text-dark-purple'>Now, 14:00</span>
            <span className='font-top-dashboard'>23:59</span>
        </div>
    </div>  
  )
}

export default TopDashboardGraph
