import React, {useState} from 'react'
import AddTransaction from './AddTransaction';

function Transactions() {
    const [open, setOpen] = useState(false);
    const [AddTransactionPressed, setAddTransactionPressed] = useState(null);
    const [newTransaction, setNewTransaction] = useState(null);

    const createTransaction = (store, date, price) => {
        const content = (<div className='transaction1 border p-4'>
                    <h3 className='font-bold'>Applebees</h3>
                    <p>Date: September 9, 2023</p>
                    <p className='text-right'>Price: $22.00</p>
                    </div>)

        setNewTransaction(content);
        setAddTransactionPressed(true);

    }

  return (
    <div className='flex justify-center'>

        <div className='w-1/2'>
            <h1 className='text-2xl font-bold text-center p-4'>Transactions</h1>
            <div className='transaction1 border p-4'>
                <h3 className='font-bold'>McDonalds</h3>
                <p>Date: September 7, 2023</p>
                <p className='text-right'>Price: $10.00</p>
            </div>
            <div className='transaction1 border p-4'>
                <h3 className='font-bold'>McDonalds</h3>
                <p>Date: September 7, 2023</p>
                <p className='text-right'>Price: $10.00</p>
            </div>
            <div className='transaction1 border p-4'>
                <h3 className='font-bold'>McDonalds</h3>
                <p>Date: September 7, 2023</p>
                <p className='text-right'>Price: $10.00</p>
            </div>
            {AddTransactionPressed ? <div>{newTransaction}</div>: null}
            
            <div className='flex justify-center items-center p-4'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full         focus:outline-none focus:shadow-outline" onClick={() => createTransaction("Applebees", "October 5, 2024", "$22.00")}> Add Transaction</button>
            </div>

            <div className='flex justify-center items-center p-4'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full         focus:outline-none focus:shadow-outline" onClick={() => setOpen(true)}> Add Transaction</button>
                {open ? <AddTransaction text="Hello there!" closePopup={() => setOpen(false)} /> : null}
            </div>
        </div>

    </div>
  )
}

export default Transactions