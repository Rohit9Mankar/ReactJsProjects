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

  return (
    
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
   {filteredExpenses.map((item) => (
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