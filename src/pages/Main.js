import React from "react";
import {Link} from 'react-router-dom'
import Jumbotron from "../components/Jumbotron"
import Continents from "../components/ContinentList"

const Main = (props) => {

    return (
        <div className="mainContain">
            <Jumbotron/>
            <Continents/>  
        </div>
    )

};

export default Main;