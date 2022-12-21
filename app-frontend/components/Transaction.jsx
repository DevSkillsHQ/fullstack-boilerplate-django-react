import React from 'react'
import TransactionList from './TransactionList'

const Transaction=({transaction}) => {


  return (
    <tr key={transaction.id}>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900 font-bold'>{transaction.account_id} </div> 
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900 font-bold'>{transaction.amount} </div> 
                </td>   
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900 font-bold'>{transaction.created_at} </div> 
                </td>   
                {/* <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900 font-bold'>{transaction.negativeAmount} </div> 
                </td>           
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900 font-bold'>{transaction.positiveAmount} </div> 
                </td> */}
              </tr>
                )
}

export default Transaction