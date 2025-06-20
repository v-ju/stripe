import React from 'react'
import Image from 'next/image'
import { title } from 'process'

type Card = {
    title:string,
    percentage: string,
    amount1: string,
    amount2: string,
    child1? : React.ReactNode,
    child2? : React.ReactNode,
    alt: string,
    imgpath:string
    
}


const DashboardCard = ({title,percentage,amount1,amount2,child1,child2,alt,imgpath}: Card) => {
  return (
    <div className="bottom-dashboard-div">
        <div className='title-bottom-dashboard'>{title}
            <span className='percent-bottom-dashboard'>{percentage}</span>
        </div>
        <div className='flex py-2 items-baseline'>
        <div className='font-normal text-xs mr-2'>
            {child1}{amount1}
        </div>
        <div className='font-normal text-[8px] mr-2 text-gray-500'>
            {child2}{amount2}
        </div>  
        </div>
        <Image alt={alt} src={imgpath} width={200} height={200}/>
        <div className='flex justify-between'>
        <span className='title-2-bottom-dash'>20 Apr</span>
        <span className='title-2-bottom-dash'>Today</span>
        </div>
        <span className='title-2-bottom-dash'>Updated today 07:50</span>
    </div>
    
  )
}

export default DashboardCard


               