import React, { useState } from 'react';
//import Card from '../UI/Card';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [inputTitle, setTitle] = useState("");
    const [inputDate, setDate] = useState("");
    const [inputAmount, setAmount] = useState("");

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };
    const dateHandler = (event) => {
        setDate(event.target.value);
    };
    const amountHandler = (event) => {
        setAmount(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDataObj = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)

        }
        props.onSaveExpenseData(expenseDataObj);
        setTitle("");
        setAmount("");
        setDate("");
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
                        max='2023-01-02'
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