import React from 'react';
//import Card from './UI/Card';
const ExpenseForm = () => {
    // const form=document.getElementById("myForm");


    const submitEvent = (e) => {
        e.preventDefault();
        const expenseTitle = document.getElementById("expenseTitle").value;
        const expenseDate = document.getElementById("expenseDate").value;
        const expenseAmount = document.getElementById("expenseAmount").value;

        console.log(expenseTitle, expenseAmount, expenseDate)
    }
    const onChangeEvent = (e) => {
        e.preventDefault();
        const expenseTitle = document.getElementById("expenseTitle").value;
        const expenseDate = document.getElementById("expenseDate").value;
        const expenseAmount = document.getElementById("expenseAmount").value;

        console.log(expenseTitle, expenseAmount, expenseDate)
    }

    return (
        <div>
            <form id="myForm" onSubmit={submitEvent} onChange={onChangeEvent}>
                <label >Expense Title</label>
                <input type="text" id="expenseTitle" name="expenseTitle"></input>
                <label >Expense Amount</label>
                <input type="Number" id="expenseAmount" name="expenseAmount"></input>
                <label >Expense Date</label>
                <input type="date" id="expenseDate" name="expenseDate"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm;