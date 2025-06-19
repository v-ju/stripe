import React from 'react'
import TopDashboardGraph from './TopDashboardGraph'
import BalancesPayout from './BalancesPayout'


const DashboardBalances = () => {
  return (
    <div className='flex flex-1 bg-white h-60 border border-transparent rounded-lg shadow-2xl'>
      <div className='flex flex-col mt-3'>
        <div className='mx-3 border-b border-gray-300 font-bold'>
          Today
        </div>
        <div className='flex pt-4 mx-3'>
          <TopDashboardGraph/>
          <div className='flex flex-col justify-between'>
            <BalancesPayout title='INR Balance' amount='5,53,257.51' desc='Available to pay out'/>
            <div className='w-full h-0.5 bg-gray-200'/>
            <BalancesPayout title='Payouts' amount='1,02,633.07' desc='Expected Today'/>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default DashboardBalances
