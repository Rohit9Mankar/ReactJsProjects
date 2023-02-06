import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputAmount, setInputAmount] = useState('');

    const titleHandler = (event) => {
        setInputTitle(event.target.value);
    };
    const dateHandler = (event) => {
        setInputDate(event.target.value);
    };
    const amountHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDataObj = {
            
            
            date: new Date(inputDate),
            title: inputTitle,
            amount: inputAmount

        }
        props.onSaveExpenseData(expenseDataObj);
        setInputTitle("");
        setInputAmount("");
        setInputDate("");
    }


    return (

        <form id="myForm" onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type="text"
                        id="expenseTitle"
                        value={inputTitle}
                        onChange={titleHandler}>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type="Number"
                        id="expenseAmount"
                        min='1'
                        value={inputAmount}
                        onChange={amountHandler}>
                    </input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type="date"
                        id="expenseDate"
                        min='2016-03-03'
                        max='2023-02-02'
                        value={inputDate}
                        onChange={dateHandler}>
                    </input>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type="submit">Submit</button>
            </div>

        </form>

    )
}

export default ExpenseForm;