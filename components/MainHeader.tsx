import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ButtonMainHeader from './ButtonMainHeader'
import ResourcesSubheader from './subMenu/ResourcesSubheader'
import DeveloperSubheader from './subMenu/DeveloperSubheader'



const MainHeader = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='obj-centered py-3 z-20 absolute'>
            <header className='obj-centered'>
                <div className='obj-centered'>
                    <Link href={'./'}>
                        <Image alt='stripe-logo' src={'./stripe-white.svg'} width={70} height={70} className='mr-6 ml-2'/>
                    </Link>
                    <ButtonMainHeader title='Products' alt='down-arrow' imgpath='/down-white-chevron.svg'/>
                    <ButtonMainHeader title='Solutions' alt='down-arrow' imgpath='/down-white-chevron.svg'/>
                    <ButtonMainHeader title='Developers' alt='down-arrow' imgpath='/down-white-chevron.svg'>
                        <DeveloperSubheader/>
                    </ButtonMainHeader>
                    <ButtonMainHeader title='Resources' alt='down-arrow' imgpath='/down-white-chevron.svg'>
                        <ResourcesSubheader/>
                    </ButtonMainHeader>
                    <a className='span-mainheader px-6 py-3 group hover-mainheader '>
                        <span className='group-hover:text-white/60 group-hover:cursor-pointer'>Pricing</span>
                    </a>
                </div>
            </header>
            <nav className='flex ml-35'>
                <button className='w-20 h-10 obj-centered nav-mainheader group hover-mainheader'>
                    <div className='group-hover:text-white/50 group-hover:cursor-pointer'>Sign in</div>

                    <Image alt='right-arrow' src={'./right-white-chevron.svg'} width={9} height={10} className='ml-1 block group-hover:hidden'/>

                    <div>
                        <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor" strokeWidth={30} className='ml-1 pt-1 hidden group-hover:block group-hover:text-white/50'>
                         <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" /> 
                        </svg>
                    </div>
                </button>

                <button className='ml-10 w-40 h-10 border border-white rounded-3xl '>
                    <div className='px-2 py-1 nav-mainheader items-center justify-center group hover-mainheader'>
                        <span className='span-hover'>
                        Contact Sales 
                        </span>

                        <Image alt='right-arrow' src={'/right-white-chevron.svg'} width={9} height={2} className=' ml-2 block group-hover:hidden'/>

                        <svg viewBox="0 0 24 24" width={15} height={15}  fill="currentColor" className='ml-1  hidden group-hover:block group-hover:text-white/75'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"/> 
                        </svg>
                    </div>
                    
                </button>
            </nav>
        </div>       
    </div>
    
  )
}

export default MainHeader
