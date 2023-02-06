import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
   {props.items.map((item) => (
    <ExpenseItem 
    
    key={item.id}
    title={item.title}
    amount={item.amount}
    date={item.date}></ExpenseItem>
   ))}
   
    </Card>
  );
}

export default Expenses;