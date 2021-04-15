import React,{useState} from "react"
import "./index.css"
import ExpenseList from "../expense-list"
import TotalBanner from "../total-banner"
import ExpenseForm from "../expense-form"

const MainContainer = () => {
    const [expenses,setExpenses] = useState([]);

    const submitExpenses = (description,amount,currency) => {
        setExpenses((prev) => {
            return [...prev,{description,amount,currency}]
        });
    }

    const getTotal = (() => {
        expenses.reduce((start,item) => {
            return start+item.amount;
        },0);
    })();

    return(<article className="main-container">
                <section className="expense-area">
                    <ExpenseList expenses={expenses}/>
                    <ExpenseForm submitExpense={submitExpenses}/>
                </section>
                <TotalBanner total={getTotal}/>
           </article>
        );
}

export default MainContainer;