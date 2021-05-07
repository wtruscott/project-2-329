import { Link } from "react-router-dom";
import React, {useState} from "react"
const Search = (props) => {
    const [formData, setFormData] = useState({
        secondCurrency: ""
    })
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault() // prevents the refresh
        props.getRate(formData.secondCurrency)
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" value={formData.firstCurrency} placeholder="First Currency" name="firstCurrency" onChange={handleChange}/> */}
            <input type="text" value={formData.secondCurrency} placeholder="Choose Currency" name="secondCurrency" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    )
}
export default Search