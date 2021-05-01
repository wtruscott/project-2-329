import React from "react"
import {Link} from 'react-router-dom'

const Passport = (props) => {

    const myList = props.visited.map((country, index)=> {
        return (
            <Link to={`/country/${country}`}>
                <h2 key={index}>{country}</h2>
            </Link> 
        )
    })

    return (
        myList
    )
}

export default Passport