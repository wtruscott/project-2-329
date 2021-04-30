import {useState, useEffect} from "react";

const Main = (props) => {

// const apiKey = "c20caee15691546a29091e85665c7255"

// const symbol = props.match.params.symbol
const url = `https://restcountries.eu/rest/v2/name/mexico`

const [country, setCountry] = useState(null)

const getCountry= async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCountry(data[0])
}

useEffect(() => {getCountry()}, [])

const loaded = () => {
    return (
        <div>
            <h1>Name: {country.name}</h1>
            <h1>Capital: {country.capital}</h1>
        </div>
    )
}

const loading = () => {
    return <h1> Loading ...</h1>
}

return country? loaded() : loading()


};

export default Main;