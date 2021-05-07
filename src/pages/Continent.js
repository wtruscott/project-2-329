import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Media from "react-media"
import continents from "../continents"
import ContNav from "../components/ContNav"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGlobeAmericas} from "@fortawesome/free-solid-svg-icons"
import {faGlobeAsia} from "@fortawesome/free-solid-svg-icons"
import {faGlobeEurope} from "@fortawesome/free-solid-svg-icons"
import {faGlobeAfrica} from "@fortawesome/free-solid-svg-icons"

const Continent = (props) => {

    const symbol = props.match.params.symbol
    let url = ""
   
    const [countries, setCountries] = useState(null)
    
    const getCountries= async () => {
        if(symbol!=="NorthAmerica" && symbol !== "SouthAmerica" ) {
            url = `https://restcountries.eu/rest/v2/region/${symbol}`
        } else if(symbol==="NorthAmerica" || symbol === "SouthAmerica" ) {
            url = `https://restcountries.eu/rest/v2/region/americas`
        }
        const response = await fetch(url)
        const data = await response.json()
        setCountries(data)
    }
    
    useEffect(() => {getCountries()}, [symbol])

    const [title, setTitle] = useState([])

    const getTitle= ()=> {
        if(symbol==="oceania"){
            setTitle(["Australia", faGlobeAsia])
        } else if(symbol==="asia"){
            setTitle(["Asia", faGlobeAsia])
        } else if(symbol==="africa"){
            setTitle(["Africa", faGlobeAfrica])
        }else if(symbol==="europe"){
            setTitle(["Europe", faGlobeEurope])
        }else if(symbol==="NorthAmerica"){
            setTitle(["North America", faGlobeAmericas])
        }else{
            setTitle(["South America", faGlobeAmericas])
        }
      }

      useEffect(() => {getTitle()}, [symbol])
   
    const loaded = () => {
    
            if(symbol!=="NorthAmerica" && symbol!== "SouthAmerica") {
                console.log(symbol)
                return countries.map((country, index)=> (
                    <Link to={`/country/${country.name}`}>
                        <h2 key={index}>{country.name}</h2>
                    </Link>
                ))
            } else {
                console.log(symbol)
                if(symbol==="NorthAmerica") {
                    return countries.filter((country) => {
                        return country.subregion === "Northern America" || country.subregion === "Central America" || country.subregion === "Caribbean"
                    }).map((country, index)=> (
                        <Link to={`/country/${country.name}`}>
                            <h2 key={index}>{country.name}</h2>
                        </Link>
                    ))
                } else if(symbol==="SouthAmerica") {
                    return countries.filter((country) => {
                        return country.subregion === "South America"
                    }).map((country, index)=> (
                        <Link to={`/country/${country.name}`}>
                            <h2 key={index}>{country.name}</h2>
                        </Link>
                    ))
                }
            }
        }
    
    const loading = () => {
        return <h1> Loading ...</h1>
    }
    
    return (
        
       countries?  
       <div>
           <ContNav/>
       <Media queries={{
         small: "(max-width: 599px)",
         medium: "(min-width: 600px) and (max-width: 1199px)",
         large: "(min-width: 1200px)"
       }}>
         {matches => (
           <>
           <div id={symbol} className={matches.small ? "countryListS" : matches.medium ? "countryListM" : "countryListL"}><h1>{title[0]}</h1><FontAwesomeIcon icon={title[1]}/> {loaded()}</div> 
          </>
        )}
          </Media>
    </div>
        : loading()
    )
}

export default Continent