import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditng, setIsEditing] = useState(false);

    const expenseDataHandler = (enteredData) => {
        const expenseDataObj = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onaddExpense(expenseDataObj);
    };

    const whileEditing = () => {
        setIsEditing(true)
    }

    const finishEditing = () => {
        setIsEditing(false)
    }

    return (
        <div className="new-expense">
            {!isEditng && <button onClick={whileEditing}>Add new Expense</button>}
            {isEditng && (<ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={finishEditing} />)}
        </div>
    )
}
export default NewExpense;