import React from 'react'
import Image from 'next/image'

type HeaderButton = {
    title:string,
    alt:string,
    imgpath:string
}

const ButtonMainHeader = ({title, alt, imgpath} : HeaderButton) => {
  return (
    <button className='btn-mainheader'>
        <span className='span-mainheader'>
          {title}
        </span>
        <Image alt={alt} src={imgpath} width={10} height={10}/>
    </button>
  )
}

export default ButtonMainHeader
