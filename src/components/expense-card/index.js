import React from "react";
import "./index.css"

const ExpenseCard = ({item}) => {
    return(
        <section className="card">
            <div className="description">{item.description}</div>
            <div className="payments">
                <div className="amount">{item.amount}</div>
                <div className="currency">{item.currency}</div>
            </div>
        </section>
    );
}

export default ExpenseCard;