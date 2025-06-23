import React from 'react'
import Image from 'next/image'

const TextSection = () => {
  return (
    <div className='z-20 top-24 px-2 absolute '>

        <div className=' text-8xl w-140 h-100 font-extrabold text-wrap  text-black/75 leading-26 tracking-tight '>Financial infrastructure to grow your revenue</div>

        <div className='text-gray-700 w-125 tracking-wide text-lg  my-5'>Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</div>

        <button className='w-45 h-10 border group hover-mainheader bg-black rounded-3xl '>
            <div className='px-1 py-1 nav-mainheader items-center justify-center '>
                <span className='span-hover'>
                Request an invite
                </span>

                <Image alt='right-arrow' src={'/right-white-chevron.svg'} width={9} height={2} className=' ml-2 block group-hover:hidden'/>

                <svg viewBox="0 0 24 24" width={15} height={15}  fill="currentColor" className='ml-1 hidden group-hover:block group-hover:text-white/75'>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"/> 
                </svg>
            </div>     
        </button>
    </div>
  )
}

export default TextSection
