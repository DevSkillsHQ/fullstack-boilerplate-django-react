import React from 'react'

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
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm text-gray-900 font-bold'>{transaction.balance} </div> 
                </td>           
                {/* <td className='text-right px-6 py-4 whitespace-nowrap'>
                  <a onClick={(e,id)=>getBalance(e,account_id)} className='text-indigo-500 hover:text-indigo-800 hover:cursor-pointer px-5 font-bold'> GetCurrentAccountbalance</a>
                 </td> */}
              </tr>
                )
}

export default Transaction