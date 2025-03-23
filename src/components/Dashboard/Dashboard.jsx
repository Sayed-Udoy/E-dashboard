import React from 'react'
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className={`flex-1 transition-all px-2`}>
    <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      <div className="bg-blue-500 text-white p-4 rounded-lg">Balance: $5,756</div>
      <div className="bg-green-500 text-white p-4 rounded-lg">Recent Transactions</div>
      <div className="bg-purple-500 text-white p-4 rounded-lg">Expense Statistics</div>
    </div>
  </div>
  )
}

export default Dashboard