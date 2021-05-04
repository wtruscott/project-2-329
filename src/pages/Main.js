import React from "react";
import {Link} from 'react-router-dom'
import Jumbotron from "../components/Jumbotron"
import Continents from "../components/ContinentList"

const Main = (props) => {

// const apiKey = "c20caee15691546a29091e85665c7255"

// const symbol = props.match.params.symbol

// const continents = [
//     {name: "Africa", symbol: "africa"},
//     {name: "Asia", symbol: "asia"},
//     {name: "Australia", symbol: "oceania"},
//     {name: "Europe", symbol: "europe"},
//     {name: "North America", symbol: "americas"},
//     {name: "South America", symbol: "americas"}
// ]

    return (
        <div className="mainContain">
            <Jumbotron/>
            <Continents/>
                {/* <div className="continents">
                    {continents.map((continent)=> {
                        const {name, symbol} = continent;
                        return (
                            <Link to={`/continent/${symbol}`}>
                                <h2 className="continent" id={name}>{name}</h2>
                            </Link>
                        )
                    })}
                </div> */}
            </div>
    )

};

export default Main;