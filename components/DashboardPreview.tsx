import React from 'react'
import Image from 'next/image'

const DashboardPreview = () => {
  return (
    <div className='w-100 h-140 relative top-[40px] left-[850px] border rounded-2xl border-transparent shadow-2xl z-20 bg-white/50 '>
      <div className='px-5 py-6 z-2 flex h-full'>
        <div className='flex items-start'>
          <div className='flex z-15 justify-between items-center'>
          <Image alt='rocket' src={'./rocket.svg'} width={20} height={20} className=''/>
          <div className='text-white text-[11px] mx-2 tracking-wider'>ROCKET RIDES</div>
          <Image alt='down-arrow' src={'/down-white-chevron.svg'} width={10} height={10}/>
        </div>
        </div>
        <div className='flex-1'>
          <div className='w-10'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
