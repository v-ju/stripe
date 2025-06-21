import React from 'react'
import Image from 'next/image'
<<<<<<< HEAD
import DashboardCard from './dashboardComponents/DashboardCard.tsx'


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
=======

const BottomDashboard = () => {
  return (
    <div className='flex mt-10 flex-1 justify-between'>
        <div className='grid grid-cols-3 gap-4'>
            <div className="bottom-dashboard-div">
              <div className='text-[10px] tracking-tighter font-semibold'>Net volume from sales <span className='text-green-500 ml-1 text-[8px]'>+32.8%</span></div>
              <div className='flex py-2 items-baseline'>
                <div className='font-normal text-xs mr-2'><span className='font-normal text-gray-500'>₹</span>39,274.29</div>
                <div className='font-normal text-[8px] mr-2 text-gray-500'><span>₹</span>29,573.54</div>  
              </div>
              <Image alt='sales-graph' src={'./sales-graph.svg'} width={200} height={200}/>
              <div className='flex justify-between'>
                <span className='text-gray-400 text-[10px] tracking-tight font-semibold'>20 Apr</span>
                <span className='text-gray-400 text-[10px] tracking-tight font-semibold'>Today</span>
              </div>
              <span className='text-gray-400 text-[10px] tracking-tight font-semibold'>Updated today 07:50</span>
            </div>

            <div className="bottom-dashboard-div">
              <div className='text-[10px] tracking-tighter font-semibold'>New customers <span className='text-green-500 ml-1 text-[8px]'>+32.1%</span></div>
              <div className='flex py-2 items-baseline'>
                <div className='font-normal text-xs mr-2'>37</div>
                <div className='font-normal text-[8px] mr-2 text-gray-500'>28</div>  
              </div>
              <Image alt='customer-graph' src={'./customers-graph.svg'} width={200} height={200}/>
              <div className='flex justify-between'>
                <span className='text-gray-400 text-[10px] tracking-tight font-semibold'>20 Apr</span>
                <span className='text-gray-400 text-[10px] tracking-tight font-semibold'>Today</span>
              </div>
              <span className='text-gray-400 text-[10px] tracking-tight font-semibold'>Updated today 07:50</span>
            </div>

            <div className="bottom-dashboard-div">
              <div className='text-[10px] tracking-tighter font-semibold mb-1'>Invoices</div>
              <div className='flex'>
                  <div className='h-2 w-22 bg-[#9966FF] border-l-0 rounded-l-xs'></div>
                  <div className='h-2 w-17 bg-[#0073E6]'></div>
                  <div className='h-2 w-12 bg-[#00C4C4] border-r-0 rounded-r-xs'></div>
              </div>
              <div className='flex items-center justify-between py-3 border-b-2 border-gray-200 '>
                <div className='flex items-center'>
                  <div className='w-[6px] h-[6px] bg-[#9966FF] border-0 rounded-xs mr-1'></div>
                  <div className='text-[10px] font-semibold'>
                    Paid
                  </div>
                </div>
                <div className='font-normal text-[8px] text-black'><span>₹</span>25,000.00</div>  
              </div>
              <div className='flex items-center justify-between py-3 border-b-2 border-gray-200 '>
                <div className='flex items-center'>
                  <div className='w-[6px] h-[6px] bg-[#0073E6] border-0 rounded-xs mr-1'></div>
                  <div className='text-[10px] font-semibold'>
                    Open
                  </div>
                </div>
                <div className='font-normal text-[8px] text-black'><span>₹</span>20,000.00</div>  
              </div>
              <div className='flex items-center justify-between py-3 border-b-2 border-gray-200 '>
                <div className='flex items-center'>
                  <div className='w-[6px] h-[6px] bg-[#9966FF] border-0 rounded-xs mr-1'></div>
                  <div className='text-[10px] font-semibold'>
                    Past Due
                  </div>
                </div>
                <div className='font-normal text-[8px] text-black'><span>₹</span>1,000.00</div>  
              </div>
              <span className='text-gray-400 text-[10px] tracking-tight font-semibold'>Updated today 07:50</span>
>>>>>>> c5833410073211cb8a28b3e3c089b4e0c2c7a120
            </div>
        </div>
    </div>   
  )
}

export default BottomDashboard
