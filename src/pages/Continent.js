import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Media from "react-media"
import continents from "../continents"

const Continent = (props) => {

    const symbol = props.match.params.symbol
    let url = ""
    // const subregion = "South America"
    
    // const url2 = `https://restcountries.eu/rest/v2/subregion/${subregion}`

    const [countries, setCountries] = useState(null)
    
    const getCountries= async () => {
        if(symbol!=="NorthAmerica" && symbol !== "SouthAmerica" ) {
            url = `https://restcountries.eu/rest/v2/region/${symbol}`
        } else if(symbol=="NorthAmerica" || symbol == "SouthAmerica" ) {
            url = `https://restcountries.eu/rest/v2/region/americas`
        }
        const response = await fetch(url)
        const data = await response.json()
        setCountries(data)
    }
    
    useEffect(() => {getCountries()}, [symbol])

    // console.log(countries)
    
    const loaded = () => {
        console.log(countries)
    
        // return (
            //IF countries[0].region !== "Americas"
                //countries.map
                    //return Links
            //ELSE 
                //IF countries[0].subregion == "South America"
                    //countries.filter((country) => {
                        //country.subregion == "South America"    
                    //})
                //IF countries[0].subregion == "Northern America"
                    //countries.filter((country) => {
                        //country.subregion == "South America"    
                    //})
                //IF countries[0].subregion == "Caribbean"
                    //countries.filter((country) => {
                        //country.subregion == "South America"    
                    //})
                //IF countries[0].subregion == "Central America"
                    //countries.filter((country) => {
                        //country.subregion == "South America"    
                    //})
       
        
            if(symbol!="NorthAmerica" && symbol!= "SouthAmerica") {
                console.log(symbol)
                return countries.map((country, index)=> (
                    <Link to={`/country/${country.name}`}>
                        <h2>{country.name}</h2>
                    </Link>
                ))
            } else {
                console.log(symbol)
                if(symbol=="NorthAmerica") {
                    return countries.filter((country) => {
                        return country.subregion == "Northern America" || country.subregion == "Central America" || country.subregion == "Caribbean"
                    }).map((country, index)=> (
                        <Link to={`/country/${country.name}`}>
                            <h2>{country.name}</h2>
                        </Link>
                    ))
                } else if(symbol=="SouthAmerica") {
                    return countries.filter((country) => {
                        return country.subregion == "South America"
                    }).map((country, index)=> (
                        <Link to={`/country/${country.name}`}>
                            <h2>{country.name}</h2>
                        </Link>
                    ))
                }
            }
          


//         countries.map((country, index)=> {
//             if(country.region!=="Americas") {
//             return (
//                 <Link to={`/country/${country.name}`}>
//                     <h2>{country.name}</h2>
//                 </Link>
//             )
//         } else if(country.region==="Americas" && country.subregion!==subregion) {
//                 return (
//                 <Link to={`/country/${country.name}`}>
//                     <h2>{country.name}, {country.subregion}</h2>
//                 </Link>
//                 )
//             } else if(country.region==="Americas" && country.subregion===subregion) {
//                 return (
//                     <Link to={`/country/${country.name}`}>
//                         <h2>{country.name}</h2>
//                     </Link>
//                     )
//     }
// }
//         )
        //  ) 
    }
    
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