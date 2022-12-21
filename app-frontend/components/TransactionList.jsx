import React from 'react'
import Transaction from './Transaction'
import { useState, useEffect } from 'react';
import TransactionHistory from './TransactionHistory';

const TransactionList = ({transaction}) => {

  const USER_API_BASE_URL = "https://infra.devskills.app/api/transaction-management/transactions";
  const [transactions, setTransactions] = useState(null);
  const[loading, setLoading] = useState(true);
 

  useEffect(() => {
      const fetchData = async()=> {
          setLoading(true);
          try {
              const response = await fetch(USER_API_BASE_URL,{
                  method : "GET",
                  headers: {
                      "Content-Type": "application/json",
                  },
              });
              const transactions = await response.json();
              setTransactions(transactions);
          } catch (error) {
              console.log(error) ;              
          }
          setLoading(false);
      }; 
      fetchData(); 
     }, [transaction]);   

     return (
    <div className='container mx-auto my-8'>
        <h2 className='font-bold text-lg text-left mb-5 text-pink-800 px-6 py-3'>All Transactions List</h2>
    <div className='flex shadow border-b '>        
        <table className='min-w-full'>
            <thead className='bg-gray-300'>
                <tr>
                    <th className='text-left font-medium font-bold text-black-500 uppercase tracking-wide px-3 py-6'>AccountId</th>
                    <th className='text-left font-medium font-bold text-black-500 uppercase tracking-wide px-3 py-6'>Amount</th>
                    <th className='text-left font-medium font-bold text-black-500 uppercase tracking-wide px-3 py-6'>Date</th>
                    <th className='text-right font-medium font-bold text-black-500 uppercase tracking-wide px-3 py-6'>Status</th>
                    {/* <th className='text-right font-medium font-bold text-black-500 uppercase tracking-wide px-3 py-6'>Deposit</th> */}
                </tr>
            </thead>
            {!loading &&( 
            <tbody className='bg-white'>
              {transactions?.map((transaction) => (                
              <Transaction 
              transaction={transaction} 
              key={transaction.id} 
              />             
              ))}             
            </tbody>
            )}
        </table>
    </div>
    </div>
  )
}

export default TransactionList