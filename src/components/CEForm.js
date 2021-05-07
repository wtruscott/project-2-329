import React, {useState} from "react"
const Search = (props) => {
    const [formData, setFormData] = useState({
        secondCurrency: ""
    })
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.getRate(formData.secondCurrency)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.secondCurrency} placeholder="Choose Currency" name="secondCurrency" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    )
}
export default Search