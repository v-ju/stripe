  import React from 'react'
  import GradientBackground from './GradientBackground'
  import DashboardPreview from './DashboardPreview'
import AppLayout from './AppLayout'


  const Hero = () => {
    return (
      <section className='w-full z-2 pt-20 h-screen relative'>
        <div className='max-w-6xl border-x mx-auto relative min-h-screen border-gray-100'>
          <div className="absolute inset-0 flex pointer-events-none">
            <div className="flex-1 relative">
              <div className="grid-hero">
                <div></div>
                <div className="border-hero"></div>
              </div>
            </div>
            <div className="flex-1 relative border-hero">
              <div className="grid-hero">
                <div></div>
                <div className="border-hero"></div>
              </div>
            </div>
          </div>
          <DashboardPreview/> 
          <AppLayout/>
        <GradientBackground/>
        </div>
        
      </section>
    )
  }

  export default Hero
