import React from 'react'
import Image from 'next/image'

type Component = {
  title : string,
  amount : string,
  desc : string
}

const BalancesPayout = ({title, amount, desc} : Component) => {
  return (
    <div className='flex'>
      <div className='flex flex-col flex-1'>
        <div className='text-[10px] flex'>{title}<Image alt='arrow' src={'./down-grey-chev.svg'} width={7} height={7} className='ml-1'/></div>
        <div className='text-sm font-medium'><span className='text-gray-400'>₹</span>{amount}</div>
        <div className='text-[10px] font-medium text-gray-400'>{desc}</div>
      </div>
      <span  className='tracking-tight font-bold text-[8px] text-[#5c55e4]'>
        View
      </span>
    </div>
  )
}

export default BalancesPayout
