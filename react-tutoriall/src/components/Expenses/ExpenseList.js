import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList= (props) =>{
    

    if(props.items.length===0){
     return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    return (
        <ul className="expenses-list">
        {
            props.items.map((item) => (
                <ExpenseItem 
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}></ExpenseItem>
               ))
        }
        </ul>
    );
}
export default ExpenseList;