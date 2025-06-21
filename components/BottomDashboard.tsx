import React from 'react'
import Image from 'next/image'
import DashboardCard from './dashboardComponents/DashboardCard'


const BottomDashboard = () => {
  return (
    <div className='flex mt-5 flex-1 justify-between'>
        <div className='grid grid-cols-3 gap-4'>
          {/* Net Volume from Sales */}
            <DashboardCard title='Net volume from sales' percentage='+32.8%' amount1='39,274.29' amount2='29,573.54' child1={<span className='font-normal text-gray-500'>₹</span>}  child2={<span>₹</span>} alt='sales-graph' imgpath='./sales-graph.svg'/>
               
          {/* New Customers */}
            <DashboardCard title='New customers' percentage='+32.1%' amount1='37' amount2='28'  alt='customer-graph' imgpath='./customers-graph.svg'/>
            
          {/* Invoices */}
            <div className="bottom-dashboard-div">
              <div className='title-bottom-dashboard mb-1'>Invoices</div>
              <div className='flex'>
                  <div className='h-2 w-22 bg-purple border-l-0 rounded-l-xs'></div>
                  <div className='h-2 w-17 bg-cobalt-blue'></div>
                  <div className='h-2 w-12 bg-mint-green border-r-0 rounded-r-xs'></div>
              </div>

              <div className='invoice-items-dashboard'>
                <div className='flex items-center'>
                  <div className='invoice-dot-dashboard bg-purple'></div>
                  <div className='common-dashboard-font'>
                    Paid
                  </div>
                </div>
                <div className='invoice-amount-dashboard'>
                  <span>₹</span>
                  25,000.00
                </div>  
              </div>

              <div className='invoice-items-dashboard'>
                <div className='flex items-center'>
                  <div className='invoice-dot-dashboard bg-cobalt-blue'></div>
                  <div className='common-dashboard-font'>
                    Open
                  </div>
                </div>
                <div className='invoice-amount-dashboard'>
                  <span>₹</span>
                  20,000.00
                </div>  
              </div>

              <div className='invoice-items-dashboard'>
                <div className='flex items-center'>
                  <div className='invoice-dot-dashboard bg-mint-green'></div>
                  <div className='common-dashboard-font'>
                    Past Due
                  </div>
                </div>
                <div className='invoice-amount-dashboard'><span>₹</span>1,000.00</div>  
              </div>
              
              <span className='title-2-bottom-dash'>Updated today 07:50</span>
            </div>
        </div>
    </div>   
  )
}

export default BottomDashboard
