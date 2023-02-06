import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetail from './ExpenseDetail';

const ExpenseItem = (props) => {

 //const [title, setTitle] = useState(props.title);
 //const [amount, setAmount] = useState(props.amount)

 //const changeTitleHandler = () => {
 //  setTitle('updated');
 //  console.log(title);
 //};
 //const changeAmountHandler = () => {
 //  setAmount('100');

 //};

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetail title={props.title} amount={props.amount}></ExpenseDetail>
      <button >Change Title</button>
      <button >Change Amount</button>
    </Card>

  );
}

export default ExpenseItem;