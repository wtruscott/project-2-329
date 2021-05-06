import React from "react"
import {Link} from 'react-router-dom'
import Media from "react-media"
import ContNav from "../components/ContNav"

const Future = (props) => {

    const wishList = props.wish.map((country, index)=> {
        return (
            <Link to={`/country/${country}`}>
                <h2 key={index}>{country}</h2>
            </Link> 
        )
    })

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
                    <div className={matches.small ? "wishListS" : matches.medium ? "wishListM" : "wishListL"}>
                        {wishList}
                    </div>
                </>
            )}
            </Media>
        </div>
    )
}

export default Future