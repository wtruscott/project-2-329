import React from 'react'
import imgArray from "../imgArray"

const Jumbo = () => {

const bigPicture = imgArray[Math.floor(Math.random() * imgArray.length)]

    return (
    <div className="jumbotron">
        <img src={bigPicture.url} alt={bigPicture.alt}/>
    </div>
    )
}

export default Jumbo