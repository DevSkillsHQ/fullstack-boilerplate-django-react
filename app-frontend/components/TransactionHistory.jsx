import React from 'react'
import TransactionList from './TransactionList'
import Hero from './Hero'

const TransactionHistory = ({transaction}) => {

    return (
    <div className="w-4/6 bg-gray-300 rounded-tr-2xl rounded-br-2xl py-36 px-20 items-center justify-center" >
    <h2 className='max-w-full mx-auto mt-5 mb-5 font-bold text-2xl text-gray-900'>Transaction History</h2>
    <div className="max-w-full mx-auto mt-4 bg p-4 border border-red-800">
    <label htmlFor="" className="text-left mt-0 text-sm font-bold text-red-800 block">Transaction amount (withdrawal)</label>
      <div className="bg-white mx-auto px-20 py-10 p-8 border border-black mb-2">

      <p className='text-lg font bold text-black'>Transfered [{transaction.amount}] from account [{transaction.account_id}] </p>     
      <p className='text-lg font bold text-black'>The current account balance is {transaction.balance}</p>
      
      </div>
      <label htmlFor="" className=" text-left text-sm font-bold text-red-800 block">Transaction amount (deposit)</label>
      <div className="bg-white mx-auto px-20 py-10 p-4 border border-black mb-2">

      <p className='text-lg font bold text-black'>Transfered [{transaction.amount}]to account [{transaction.account_id} ] </p>    
      
      </div>
      <label htmlFor="" className="text-left text-sm font-bold text-red-800 block">New Transaction details</label>
      <div className="bg-white mx-auto px-20 py-10 p-4 border border-black">

      <p className='text-lg font bold text-black'>Transfered [{transaction.amount}] from [{transaction.account_id}]</p>      
      
      </div>
    </div>
  </div>
 
    
  )
}

export default TransactionHistory