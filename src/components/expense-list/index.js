import React from "react";
import "./index.css"
import ExpenseCard from "../expense-card"

const ExpenseList = ({expenses}) => {
    return(
        <section className="expense-list">
            {expenses.map((item,index) => <ExpenseCard item={item} key={index}/>)}
        </section>
    );
}

export default ExpenseList;