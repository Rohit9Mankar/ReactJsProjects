import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.items.filter(expenses=>{
    return expenses.date.getFullYear().toString()===filteredYear;
  });

let expenseContent=filteredExpenses.map((item) => (
  <ExpenseItem 
  
  key={item.id}
  title={item.title}
  amount={item.amount}
  date={item.date}></ExpenseItem>
 ));
 let message="";
 if(filteredExpenses.length===0){
  expenseContent=<p>No expenses here</p>
 }
 if(filteredExpenses.length===1){
  message=<p>Only single Expense here. Please add more...</p>
 }

  return (
    
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenseContent}
      {message}
   
   
    </Card>
  );
}

export default Expenses;