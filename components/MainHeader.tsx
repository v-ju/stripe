import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonMainHeader from './ButtonMainHeader'

const MainHeader = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='obj-centered py-3 z-20 absolute'>
            <header className='obj-centered'>
                <div className='obj-centered'>
                    <Link href={'./'}>
                        <Image alt='stripe-logo' src={'/stripe-white.svg'} width={70} height={70} className='mr-5 ml-2'/>
                    </Link>
                    <ButtonMainHeader title='Products' alt='down-arrow' imgpath='/down-white-chevron.svg'/>
                    <ButtonMainHeader title='Solutions' alt='down-arrow' imgpath='/down-white-chevron.svg'/>
                    <ButtonMainHeader title='Developers' alt='down-arrow' imgpath='/down-white-chevron.svg'/>
                    <ButtonMainHeader title='Resources' alt='down-arrow' imgpath='/down-white-chevron.svg'/>
                    <a className='span-mainheader px-6 py-3'>
                        Pricing
                    </a>
                </div>
            </header>
            <nav className='flex ml-50 items-center'>
                <button className='nav-mainheader'>
                    Sign in 
                    <Image alt='right-arrow' src={'/right-white-chevron.svg'} width={6} height={3} className='ml-2'/>
                </button>
                <button className='ml-10 text-sm border border-white rounded-3xl '>
                    <span className='nav-mainheader justify-center p-2'>
                        Contact Sales 
                        <Image alt='right-arrow' src={'/right-white-chevron.svg'} width={6} height={6} className='ml-2 '/>
                    </span>
                </button>
            </nav>
        </div>       
    </div>
    
  )
}

export default MainHeader
