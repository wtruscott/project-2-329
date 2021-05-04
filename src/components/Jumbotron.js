import React from 'react'
import imgArray from "../imgArray"
import Media from "react-media"

const Jumbo = () => {

const bigPicture = imgArray[Math.floor(Math.random() * imgArray.length)]
return (
<div>
<Media queries={{
  small: "(max-width: 599px)",
  medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1200px)"
}}>
  {matches => (
    <>
    
    <div className={matches.small ? "jumbotronS" : matches.medium ? "jumbotronM" : "jumbotronL"}>
        <img src={bigPicture.url} alt={bigPicture.alt}/>
    </div>
    </>
        )}
          </Media>
    </div>
    )
}

export default Jumbo