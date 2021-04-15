import React,{useState} from "react"
import "./index.css"

const ExpenseFrom = ({submitExpense}) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("CA $");

    const handleSubmit = (e) => {

        if(description !== ""){
            submitExpense(description,amount,currency);
        }
        e.preventDefault();
    }

    const handleChange = (e) => {
        const {value,name} = e.target;
        switch(name){
            case "description":
                setDescription(value);
                break;
            case "amount":
                setAmount(value);
                break;
            case "currency-selector":
                setCurrency(value);
                break;
            default:
                break;
        }
    }

    return(
        <form className="expense-form" onSubmit={handleSubmit} onChange={handleChange}>
            <div className="description-field">
                <p>Please provide a description</p>
                <textarea rows="4" cols="70" value={description} name="description"/>
            </div>
            <div>
                <p>Please provide the amount</p>
                <input type="text" value={amount} name="amount"/>
            </div>
            <div className="currency-selector">
                <p>Please select a currency</p>
                <select value={currency} name="currency-selector">
                    <option>CA $</option>
                    <option>US $</option>
                    <option>INR</option>
                </select>
            </div>
            <button className="button">Submit</button>
        </form>
    );
}

export default ExpenseFrom;