import React,{useState} from "react"
import "./index.css"
import ExpenseList from "../expense-list"
import TotalBanner from "../total-banner"
import ExpenseForm from "../expense-form"

const MainContainer = () => {
    const [expenses,setExpenses] = useState([]);
    const [total, setTotal] = useState(0);
    const [error,setError] = useState("");

    const submitExpenses = (description,amount,currency) => {
        setExpenses((prev) => {
            return [...prev,{description,amount,currency}]
        });
        setTotal((prevTotal) => {
            const newTotal = prevTotal+Number(amount);
            if(newTotal > 1000 ){
                setError("Max Value reached");
                return 1000;
            } else{
                return newTotal;
            }
        });
    }

    return(<article className="main-container">
                <section className="expense-area">
                    <ExpenseList expenses={expenses}/>
                    <ExpenseForm submitExpense={submitExpenses} error={error}/>
                </section>
                <TotalBanner total={total} error={error}/>
           </article>
        );
}

export default MainContainer;