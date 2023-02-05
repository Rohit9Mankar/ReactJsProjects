import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expense';

const expenses = [
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
    title: 'New Charger',
    amount: 450,
    date: new Date(2021, 5, 12)
  },
];

const App = () => {

  const [prevExpense, setExpense] = useState(expenses)

  const addExpenseHandler = (expens) => {

    setExpense((prevExpense) => {
      return [...prevExpense, expens]
    })

};

  return (
    <div>

      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={prevExpense} />
    </div>
  );
}

export default App;