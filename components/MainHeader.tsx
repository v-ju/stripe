import React from 'react'
import Image from 'next/image'
import DashboardPreview from './DashboardPreview'

const MainHeader = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='div-header py-3 z-20 absolute'>
            <header className='div-header  '>
                <div className='div-header'>
                    <a>
                        <Image alt='stripe-logo' src={'/stripe-white.svg'} width={60} height={50} className='mr-5 ml-2'/>
                    </a>
                    <button className='btn-header'>
                        <span className='span-header'>Products</span>
                        <Image alt='down-arrow' src={'/down-white-chevron.svg'} width={10} height={10}/>
                    </button>
                    <button className='btn-header'>
                        <span className='span-header'>Solutions</span>
                        <Image alt='down-arrow' src={'/down-white-chevron.svg'} width={10} height={10}/>
                    </button>
                    <button className='btn-header'>
                        <span className='span-header'>Developers</span>
                        <Image alt='down-arrow' src={'/down-white-chevron.svg'} width={10} height={10}/>
                    </button>
                    <button className='btn-header'>
                        <span className='span-header'>Resources</span>
                        <Image alt='down-arrow' src={'/down-white-chevron.svg'} width={10} height={10}/>
                    </button>
                    <a className='span-header px-6 py-3'>
                        Pricing
                    </a>
                </div>
            </header>
            <nav className='flex ml-50 items-center'>
                <a className='flex text-white text-sm '>
                    Sign in <Image alt='right-arrow' src={'/right-white-chevron.svg'} width={6} height={3} className='ml-2'/>
                </a>
                <button className='ml-10 text-sm border border-white rounded-3xl items-center'>
                    <span className='text-white flex p-2 '>Contact Sales 
                    <Image alt='right-arrow' src={'/right-white-chevron.svg'} width={6} height={3} className='ml-2 '/>
                    </span>
                </button>
            </nav>
        </div>       
    </div>
    
  )
}

export default MainHeader
