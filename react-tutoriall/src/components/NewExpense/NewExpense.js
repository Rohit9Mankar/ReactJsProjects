import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const expenseDataHandler = (enteredData) => {
        const expenseDataObj = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onaddExpense(expenseDataObj);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler} />
        </div>
    )
}
export default NewExpense;