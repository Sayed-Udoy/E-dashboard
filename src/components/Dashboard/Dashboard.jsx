import React from 'react'
import Navbar from "../Navbar/Navbar";
import Mainboard from './Mainboard';

const Dashboard = () => {
  return (
    <div className={`flex-1 transition-all px-2`}>
    <Navbar />
    <Mainboard />
  </div>
  )
}

export default Dashboard