import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'

const CList = (props) => {
    const symbol = props.match.params.symbol
    const url = `https://restcountries.eu/rest/v2/region/${symbol}`

    const [countries, setCountries] = useState(null)
    
    const getCountries= async () => {
        const response = await fetch(url)
        const data = await response.json()
        setCountries(data)
    }
    
    useEffect(() => {getCountries()}, [])

    console.log(countries)
    
    const loaded = () => {
        return (
        countries.map((country, index)=> {
            return (
                <Link to={`/country/${country.name}`}>
                    <h2 key={index}>{country.name}</h2>
                </Link>
            )
        }
        ))}
    
    const loading = () => {
        return <h1> Loading ...</h1>
    }
    
    return countries? loaded() : loading()
}

export default CList