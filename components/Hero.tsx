import React from 'react'
import GradientBackground from './GradientBackground'
import MainHeader from './MainHeader'

const Hero = () => {
  return (
    <section className='max-w-6xl mx-auto pt-20 z-2 border-x h-screen border-gray-100'>
      <div className="absolute max-w-6xl mx-auto inset-0 flex pointer-events-none">
        <div className="flex-1 relative">
          <div className="absolute inset-0 grid grid-cols-2">
            <div></div>
            <div className="border-l border-dashed border-gray-300"></div>
          </div>
        </div>
        <div className="flex-1 border-l relative border-dashed border-gray-300">
          <div className="absolute inset-0 grid grid-cols-2">
            <div></div>
            <div className="border-l border-dashed border-gray-300"></div>
          </div>
        </div>
    
    </div>
    </section>
  )
}

export default Hero
