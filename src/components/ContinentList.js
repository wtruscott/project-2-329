import React from 'react'
import {Link} from 'react-router-dom'
import Media from "react-media"

const Continents = () => {

    const continents = [
        {name: "Africa", symbol: "africa", image: "https://res.cloudinary.com/dbmh779j0/image/upload/v1620156240/africa-silhouette_sdqbuz.jpg"},
        {name: "Asia", symbol: "asia", image: "https://res.cloudinary.com/dbmh779j0/image/upload/v1620156261/asia-silhouette_mickg4.jpg"},
        {name: "Australia", symbol: "oceania", image: "https://res.cloudinary.com/dbmh779j0/image/upload/v1620156276/australia-silhouette_zjvpn6.jpg"},
        {name: "Europe", symbol: "europe", image: "https://res.cloudinary.com/dbmh779j0/image/upload/v1620156292/europe-silhouette_tdm0dp.jpg"},
        {name: "North America", symbol: "americas", image: "https://res.cloudinary.com/dbmh779j0/image/upload/v1620156304/north-america-silhouette_lvjlqv.jpg"},
        {name: "South America", symbol: "americas", image: "https://res.cloudinary.com/dbmh779j0/image/upload/v1620156221/south-america-silhouette_rdtrw0.jpg"}
    ]

    return (
        <div>
<Media queries={{
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1200px)"
}}>
  {matches => (
    <>
        <div className="continents" id={matches.small ? "continentsS" : matches.medium ? "continentsM" : "continentsL"}>
                    {continents.map((continent)=> {
                        const {name, symbol, image} = continent;
                        return (
                            <Link to={`/continent/${symbol}`}>
                                <img id={name} src={image} alt={name}/>
                                <h2 className="continent">{name}</h2>
                            </Link>
                        )
                    })}
                </div>
                </>
        )}
          </Media>
    </div>
    )
}

export default Continents