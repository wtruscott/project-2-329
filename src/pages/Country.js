import {useState, useEffect} from "react"

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
        //     countries.map((country, index) => {
        //        return (
        //                 <div>
        //                     <h1>{country.name}</h1>
        //                 </div>
                    
        //        )
        //     })
        // )
        <div>
                <h1 onClick={() => props.handlePassport(country.name)}>{country.name}</h1>
                <img className="flag" src={country.flag} alt='flag'/>
                <h1>Capital: {country.capital}</h1>
                <h1>Population: {country.population}</h1>
                </div>
            )
        }
        
    
    const loading = () => {
        return <h1> Loading ...</h1>
    }
    
    return country? loaded() : loading()
    
}

export default Country