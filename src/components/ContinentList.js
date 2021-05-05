import React from 'react'
import {Link} from 'react-router-dom'
import Media from "react-media"
import continents from "../continents"

const Continents = () => {

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