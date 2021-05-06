import {useState, useEffect} from "react"
import Media from "react-media"
import continents from "../continents"
import ContNav from "../components/ContNav"
import Exchange from "../components/CurrencyExchange"

const Country = (props) => {
    const name = props.match.params.name
    const url = `https://restcountries.eu/rest/v2/name/${name}`

    const [country, setCountry] = useState(null)
    
    const getCountry= async () => {
        const response = await fetch(url)
        const data = await response.json()
        setCountry(data[0])
    }
    
    useEffect(() => {getCountry()}, [])

    console.log(country)
    
    const loaded = () => {
        return (
            <div>
                <ContNav/>
            <Media queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"
            }}>
              {matches => (
                <>
            <div className={matches.small ? "countryS" : matches.medium ? "countryM" : "countryL"}>
                <h1>{country.name}</h1>
                <img className="flag" src={country.flag} alt='flag'/>
                <div className="infoCard">
                    <h2>Capital: <span>{country.capital}</span></h2>
                    <h2>Population: <span>{country.population}</span></h2>
                    <h2>Currency: <span>{country.currencies[0].name}</span></h2>
                    <h2>Languages: <span>{country.languages[0].name}</span></h2>
                </div>
                <button className="first" onClick={() => props.handlePassport(country.name)}>I've been here!</button>
                <button className="second" onClick={() => props.handleFuture(country.name)}>I want to go here!</button>
            </div>
                </>
        )}
          </Media>
          <Exchange/>
    </div>
        )
    }
        
    
    const loading = () => {
        return <h1> Loading ...</h1>
    }
    
    return country? loaded() : loading()
    
}

export default Country