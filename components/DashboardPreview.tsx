import React from 'react'
import Image from 'next/image'
import DashboardBalances from './DashboardBalances'
import IconLayout from './IconLayout'
import BottomDashboard from './BottomDashboard'
import SearchBarDashboard from './SearchBarDashboard'

const DashboardPreview = () => {
  return (
    <div className='w-230 h-140 absolute top-[40px] left-3/4 border rounded-2xl border-transparent shadow-2xl z-20 bg-white/50 '>
      <div className='pl-5 py-6 z-2 flex h-full'>
          <div className='flex items-start'>
            <div className='flex z-15 justify-between items-center'>
              <Image alt='rocket' src={'./rocket.svg'} width={20} height={20} className=''/>
            <div className='text-white text-xs font-semibold mx-2 tracking-wider'>ROCKET RIDES</div>
              <Image alt='down-arrow' src={'/down-white-chevron.svg'} width={10} height={10}/>
            </div>
          </div>
          <div className='flex flex-col flex-1 ml-3'>
            <SearchBarDashboard/>
            <div className='flex flex-1 justify-between mt-5'>    
                <div className='flex flex-col border border-transparent rounded-lg'>
                  <DashboardBalances/>
                  <BottomDashboard/>
                </div>  
              <IconLayout/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DashboardPreview
