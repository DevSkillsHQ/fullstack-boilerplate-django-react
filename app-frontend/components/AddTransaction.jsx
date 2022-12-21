import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import TransactionList from './TransactionList';
import {useForm} from 'react-hook-form';
import TransactionHistory from './TransactionHistory';


const AddTransaction = () => {

   
    const USER_API_BASE_URL = "https://infra.devskills.app/api/transaction-management/transactions";

    const[isOpen, setIsOpen] = useState(false); 
    const[transaction,setTransaction] = useState({
        id:'',
        account_id:'',
        amount:''
    });

    const [responseTransaction, setResponseTransaction] = useState({
        id:'',
        account_id:'',
        amount:''
    });

    function closeModal(){
        setIsOpen(false);
    }
    function openModal(){
        setIsOpen(true);
    }
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
        setIsOpen(false);
    }   
     return (
    <>
    <div>
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button onClick={openModal} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Add Transaction</button>
        </div>
    </div>
    
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className=' fixed inset-0 z-10 overflow-y-auto'
        onClose={closeModal}>
            <div className='min-h-screen px-4 text-center'>
                <Transition.Child as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
       <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-400 shadow-xl rounded-md'>
        <Dialog.Title as="h3" className='text-lg font-medium leading-6 text-gray-900 mb-5'>Add New Transaction</Dialog.Title>
        <div className=' flex max-w-md max-auto'>
      <form  className="space-y-6">
      <div>
        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Account ID</label>
        <input className="w-full p-2 border border-gray-300 rou mt-1" 
        name='account_id' 
        type="text" 
        value={transaction.account_id}
        onChange = {(e) => handleChange(e)}/>       
    </div>
    <div>
      <label htmlFor="amount" className="text-sm font-bold text-gray-600 block">Amount</label>
      <input className="w-full p-2 border border-gray-300 rou mt-1" 
      name='amount'
      type="text"
      value={transaction.amount}
      onChange = {(e) => handleChange(e)}></input>
    </div>
    <div className='flex flex-row px-5 justify-between'>
       <button className="w-full py-2 px-4 bg-green-800 hover:bg-green-900 rounded-md text-white" data-type="transaction-submit" type='submit'  onClick={addTransaction}>Add</button>
       <button className="w-full py-2 px-4 bg-red-800 hover:bg-red-900 rounded-md text-white" data-type="transaction-submit" type='submit' onClick={reset}>close</button>
      </div>
     </form>       
    </div>
   </div>
   </Transition.Child>
   </div>
    </Dialog>
    </Transition>
    <div>
    <TransactionList transaction={responseTransaction}/>
    <TransactionHistory transaction={responseTransaction}/>
    </div>
    </div>
    </>
    
  )} 
export default AddTransaction