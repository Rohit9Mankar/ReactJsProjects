import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

function ExpenseItem(props) {

  return (

    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail title={props.title} amount={props.amount} />

    </div>
  );
}
export default ExpenseItem;

