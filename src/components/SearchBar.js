import { Link } from "react-router-dom";
import React from "react"
const Search = (props) => {
    const [formData, setFormData] = useState({
        searchterm: ""
    })
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault() // prevents the refresh
        props.weathersearch(formData.st)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.searchterm} placeholder="Where you at?" name="searchterm" onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
}
export default Search