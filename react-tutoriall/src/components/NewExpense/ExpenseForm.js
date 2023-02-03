import React, {useState} from 'react';
//import Card from '../UI/Card';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [inputTitle,setTitle]=useState("");
    const [inputDate,setDate]=useState("");
    const [inputAmount,setAmount]=useState("");

    const enteredtitle=(event)=>{
        setTitle(event.target.value);
        
    };
    const enteredDate=(event)=>{
        setDate(event.target.value);
        
    };
    const enteredAmount=(event)=>{
        setAmount(event.target.value);
        
    }

  const submitEvent = (event) => {
        event.preventDefault();
        const expenseTitle = event.target.expenseTitle.value;
        const expenseDate = event.target.expenseDate.value;
        const expenseAmount = event.target.expenseAmount.value;

        console.log(expenseTitle, expenseAmount, expenseDate)
    }
    

    return (
        
            <form id="myForm" onSubmit={submitEvent} >
                <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" id="expenseTitle" name="expenseTitle" onChange={enteredtitle}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="Number" id="expenseAmount" onChange={enteredAmount}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" id="expenseDate" onChange={enteredDate}></input>
                </div>
                </div>
                
                 <div className='new-expense__actions'>
                 <button type="submit">Submit</button>
                 </div>
                
            </form>
        
    )
}

export default ExpenseForm;