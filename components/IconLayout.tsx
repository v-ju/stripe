import React from 'react'
import Image from 'next/image'
const IconLayout = () => {
  return (
    <div className='obj-centered flex-col mx-auto'>
        <Image alt='logo1' src={'./logo1.svg'} width={20} height={20} className='my-2'/>
        <Image alt='logo2' src={'./logo2.svg'} width={20} height={20} className='my-2'/>
        <Image alt='logo3' src={'./logo3.svg'} width={20} height={20} className='my-2'/>
        <Image alt='logo4' src={'./logo4.svg'} width={20} height={20} className='my-2'/>
        <Image alt='logo5' src={'./logo5.svg'} width={20} height={20} className='my-2'/>
        <Image alt='logo6' src={'./logo6.svg'} width={20} height={20} className='my-2'/>
        <Image alt='add-icon' src={'./add.svg'} width={20} height={20} className='my-2'/>
    </div>
  )
}

export default IconLayout
