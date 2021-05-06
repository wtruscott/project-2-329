import { Link } from "react-router-dom";
import React, {useState} from "react"
const Search = (props) => {
    const [formData, setFormData] = useState({
        firstCurrency: "", secondCurrency: "", amount: ""
    })
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault() // prevents the refresh
        props.getRate(formData.firstCurrency, formData.secondCurrency, formData.amount)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.firstCurrency} placeholder="First Currency" name="firstCurrency" onChange={handleChange}/>
            <input type="text" value={formData.secondCurrency} placeholder="Second Currency" name="secondCurrency" onChange={handleChange}/>
            <input type="text" value={formData.amount} placeholder="Amount" name="amount" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
}
export default Search