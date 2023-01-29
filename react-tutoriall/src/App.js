import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 1, 28),
      title: "Car Insurance",
      amount: 234,
      location: "Nagpur"
    },
    {
      id: 'e2',
      date: new Date(2022, 1, 28),
      title: "Surgery",
      amount: 23445,
      location: "Nagpur"
    },
    {
      id: 'e3',
      date: new Date(2023, 1, 21),
      title: "Goa trip",
      amount: 10000,
      location: "Goa"
    },
    {
      id: 'e4',
      date: new Date(2022, 1, 20),
      title: "Bike",
      amount: 19087,
      location: "Nagpur"
    }
  ]

  return (

    <div>
      <h1>Expense Items</h1>
      {expenses.map(expense => (

        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}>
        </ExpenseItem>

      )
      )}
    </div>
  );
}

export default App;
