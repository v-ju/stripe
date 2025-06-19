import React from 'react'
import Image from 'next/image'
const IconLayout = () => {
  return (
    <div className='flex flex-col mx-auto items-center justify-center'>
        <Image alt='logo1' src={'./logo1.svg'} width={20} height={20} className='dashboard-logo-bar'/>
        <Image alt='logo2' src={'./logo2.svg'} width={20} height={20} className='dashboard-logo-bar'/>
        <Image alt='logo3' src={'./logo3.svg'} width={20} height={20} className='dashboard-logo-bar'/>
        <Image alt='logo4' src={'./logo4.svg'} width={20} height={20} className='dashboard-logo-bar'/>
        <Image alt='logo5' src={'./logo5.svg'} width={20} height={20} className='dashboard-logo-bar'/>
        <Image alt='logo6' src={'./logo6.svg'} width={20} height={20} className='dashboard-logo-bar'/>
        <Image alt='add-icon' src={'./add.svg'} width={20} height={20} className='dashboard-logo-bar'/>
    </div>
  )
}

export default IconLayout
