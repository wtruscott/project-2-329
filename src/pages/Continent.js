import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Media from "react-media"

const Continent = (props) => {

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
        //     countries.map((country, index) => {
        //        return (
        //                 <div>
        //                     <h1>{country.name}</h1>
        //                 </div>
                    
        //        )
        //     })
        // )
        countries.map((country, index)=> {
            return (
                <Link to={`/country/${country.name}`}>
                    <h2>{country.name}</h2>
                </Link>
            )
        }
        ))}
    
    const loading = () => {
        return <h1> Loading ...</h1>
    }
    
    return (
       countries?  <div>
       <Media queries={{
         small: "(max-width: 599px)",
         medium: "(min-width: 600px) and (max-width: 1199px)",
         large: "(min-width: 1200px)"
       }}>
         {matches => (
           <><div id={symbol} className={matches.small ? "countryListS" : matches.medium ? "countryListM" : "countryListL"}>{loaded()}</div> 
          </>
        )}
          </Media>
    </div>
        : loading()
    )
}

export default Continent