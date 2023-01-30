function ExpenseDetail(props) {
    const title = props.title;
    return (
        <div className="expense-item__description">
            <h2 >{title}</h2>

            <div className="expense-item__price">₹{props.amount}</div>
        </div>
    )
}

export default ExpenseDetail;