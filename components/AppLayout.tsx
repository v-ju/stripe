import React from 'react'
import Image from 'next/image'
const AppLayout = () => {
  return (
    <div className='absolute left-175 top-24 w-70 h-135 z-20 p-2 border-0 border-transparent rounded-4xl bg-white/85 shadow-2xl'>
      <div className='h-full flex-col flex justify-start items-center  border-transparent shadow-2xl bg-white rounded-3xl '>
        <div className='pt-5'>
          <Image alt='magazine-cover' src={'./magazine-cover.svg'} width={80} height={80} />
        </div>
        <div className='text-xs font-semibold'>Abstraction Magazine</div>
        <div className='text-xs font-normal'><span className='text-gray-400'>₹</span>19 per month</div>
        <div className=' bg-[#0a2540] w-55 flex justify-center py-1 border-transparent rounded-sm mt-3'>
          <Image alt='apple-pay' src={'./apple-pay.svg'} width={35} height={35}/>
        </div>
        <div className="flex items-center w-55 my-4 ">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="mx-1 text-gray-700 font-medium text-xs">Or pay with card</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>
        <div className='flex w-55 items-start text-xs text-gray-700 mb-1'>Email</div>
        <div className='w-55 h-7 border rounded-sm border-gray-200 shadow-sm'/>
        <div  className='flex w-55 items-start text-xs text-gray-700 mt-3 mb-1'>Card Information</div>
        <div className='w-55 h-7 border border-b-0 rounded-t-sm text-xs text-gray-500 border-gray-200'>
          <div className='flex justify-between p-1'>
            <span> Number </span>
            <div className='flex '>
              <Image alt='visa' src={'./visa.svg'} width={20} height={10} className='mr-1'/>
              <Image alt='mastercard' src={'./mastercard.svg'} width={20} height={10} className='mr-1'/>
              <Image alt='amex' src={'./amex.svg'} width={20} height={10} className='mr-1'/>
              <Image alt='discover' src={'./discover.svg'} width={20} height={10}/>
            </div>
          </div>
        </div>
        <div className='w-55 h-7 '>
          <div className='flex divide-x text-xs text-gray-500'>
            <div className='basis-1/2 border rounded-bl-sm p-1 border-gray-200'> MM/YY </div>
            <div className='flex basis-1/2 justify-between border-l-0 border rounded-br-sm p-1 border-gray-200'>
              <div>CVV</div>
              <Image alt='cvv-card' src={'./card.svg'} width={20} height={20}/>
            </div>
          </div>
        </div>
        <div  className='flex w-55 items-start text-xs text-gray-700 mt-3 mb-1'>Country or Region</div>
        <div className='w-55 h-14 border rounded-sm flex flex-col border-gray-200'>
          <div className='flex justify-between basis-1/2 border-b border-gray-200 p-1 text-xs text-gray-500'>
            <span> United States</span>
            <Image alt='arrow' src={'./down-grey-chev.svg'} width={10} height={10}/>
          </div>
          <span className='basis-1/2 text-xs text-gray-500 p-1'> ZIP </span>
        </div>
        <div className=' bg-[#0a2540] w-55 flex justify-center border-transparent rounded-sm mt-3 text-white text-xs p-1'>
          <span>Pay</span>
        </div>
      </div>
    </div>
    
  )
}

export default AppLayout
