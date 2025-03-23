import React from 'react'
import TodaySales from './TodaySales'
import TopProducts from './TopProducts'
import Earnings from './Earnings'

const Mainboard = () => {
  return (
    <div className='mt-5' >
        <TodaySales />
        <TopProducts />
        <Earnings />
    </div>
  )
}

export default Mainboard