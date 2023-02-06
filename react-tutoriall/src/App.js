import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expense';

const dummy_expenses = [
  {
    id: 'e1',
    date: new Date(2023, 0, 28),
    title: "Car Insurance",
    amount: 234

  },
  {
    id: 'e2',
    date: new Date(2022, 4, 28),
    title: "Surgery",
    amount: 23445

  },
  {
    id: 'e3',
    date: new Date(2022, 7, 20),
    title: "Bike",
    amount: 19087
  },
  {
    id: 'e4',
    date: new Date(2021, 5, 12),
    title: "new charger",
    amount: 450

  }
];

const App = () => {
  const [expenses, setExpense] = useState(dummy_expenses);

  const addExpenseHandler = (expens) => {

    setExpense((prevExp) => {
      return [ expens,...prevExp];
 });

  };

  return (
    <div>

      <NewExpense onaddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;