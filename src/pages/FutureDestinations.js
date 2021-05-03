import React from "react"
import {Link} from 'react-router-dom'

const Future = (props) => {

    const wishList = props.wish.map((country, index)=> {
        return (
            <Link to={`/country/${country}`}>
                <h2 key={index}>{country}</h2>
            </Link> 
        )
    })

    return (
        wishList
    )
}

export default Future