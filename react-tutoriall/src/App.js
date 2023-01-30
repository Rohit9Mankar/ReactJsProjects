import React from 'react';

import Expenses from './components/Expenses/Expense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 0, 28),
      title: "Car Insurance",
      amount: 234,
      location: "Nagpur"
    },
    { 
      id: 'e2', 
      date: new Date(2022, 4, 28),
      title: "Surgery",
      amount: 23445,
      location: "wardha"
    },
    {
      id: 'e3',
      date: new Date(2022, 7, 20),
      title: "Bike",
      amount: 19087,
      location: "Jalgaon"
    },
    {
      id: 'e4',
      title: 'New Charger',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:"SitaBuldi"
    },
  ];

  return (
    <div>
      <h2>Expense Items</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;