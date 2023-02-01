import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetail from './ExpenseDetail';

const ExpenseItem = (props) => {
  const deleteExpense= () => {
   //getting expense delete button
   const delete_btn=document.getElementById(props.id); 
   //The parent of delete button is expense item
   const parentOfDelete=delete_btn.parentNode;
   //Now, Removing the expenseitem by remove()
   parentOfDelete.remove();
    
 }
  return (
    <Card  className='expense-item'>
      <ExpenseDate  date={props.date} />
      <ExpenseDetail amount={props.amount} title={props.title}></ExpenseDetail>
      <button id={props.id} onClick={deleteExpense} >Delete Expense</button>
    </Card>
    
  );
}

export default ExpenseItem;