
import { data } from 'autoprefixer';
import React from 'react'
import { useState,useEffect } from 'react';
import {useForm,handleSubmit} from 'react-hook-form';
import TransactionHistory from './TransactionHistory';
import TransactionList from './TransactionList';
import Transaction from './Transaction';


const Hero = () => {

  const USER_API_BASE_URL = "https://infra.devskills.app/api/transaction-management/transactions";

  //const{register, handleSubmit, formState:{errors}} = useForm();

const[transaction,setTransaction] = useState({
  id:'',
  account_id:'',
  amount:''
})
const [responseTransaction, setResponseTransaction] = useState({
  id:'',
  account_id:'',
  amount:''
});
const handleChange = (e) =>{
      const value = e.target.value;
      setTransaction({...transaction,[e.target.name]: value});
  }; 
const addTransaction = async (e) => {
  e.preventDefault();
  const response = await fetch(USER_API_BASE_URL,{
      method: "POST",
      headers:{
          "Content-Type":"application/json",
      },
      body: JSON.stringify(transaction),
  });
  if(!response.ok){
      throw new Error("Something went wrong");
  }
  const _transaction =await response.json();
  setResponseTransaction(_transaction);
  reset(e);
}
const reset = (e) => {
  e.preventDefault();
  setTransaction({
  id:'',
  account_id:'',
  amount:'',
  });
}

  return (  
    <>      
    <div className="container mx-auto my-6 flex ">     

{/*********************************Section for new transaction form******************************************************/}
    
    <div className="w-2/6 p-5 bg-gray-300  rounded-tl-2xl rounded-bl-2x ">
    <h2 className='max-w-full mx-auto  mb-5 mt-20 font-bold text-2xl text-gray-900'>Add New Transaction Form</h2>
    <form className="space-y-6" >
      <div>
        <label htmlFor="account id" className="text-sm font-bold text-gray-600 block">Account ID</label>
        <input className="w-full p-2 border border-gray-300 rounded mt-1" 
        //data-type="account_id"
        name="account_id" 
        type="text"
       value={transaction.account_id}
        onChange = {(e) => handleChange(e)}/>
        {/* {...register('account_id', { required: true,pattern:{value:/^[0-9A-F]{8}-[0-9A-F]{4}-[5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,message:"This is not a valid AccountID"} })}/>         */}
    </div>
    {/* {errors.account_id?.type === 'required' && <p className='text-red-800 font-bold'>AccountId is required</p>} */}
    <div>
      <label htmlFor="amount" className="text-sm font-bold text-gray-600 block">Amount</label>
      <input className="w-full p-2 border border-gray-300 rou mt-1"  
     // data-type="amount"
      name="amount"
      type="text"
      value={transaction.amount}
      onChange = {(e) => handleChange(e)}/>
      {/* {...register('amount', { required: true })}/>       */}
    </div>
    {/* {errors.amount?.type === 'required' && <p className='text-red-800 font-bold'>Amount is required</p>} */}
    <div>
       <button className="w-full py-2 px-4 font-bold bg-green-600 hover:bg-green-700 rounded-md text-white" 
        data-type="submit"
        name='submit'
         type="submit"
         onClick={addTransaction}>Submit</button>         
    </div>
  </form>  
   {/*********************************Section for transaction history******************************************************/} 
    </div>   
    <TransactionHistory transaction={responseTransaction}/> 
  </div>  
  <TransactionList transaction={responseTransaction}/>
  </>
)  
}
export default Hero