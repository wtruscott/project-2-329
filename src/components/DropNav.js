import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media"
const Drop = (props) => {

const visable = props.visable

  return (
      visable?
    <div>
      <Media queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
      }}>
        {matches => (
          <>
             <div className={matches.small ? "dropS" : matches.medium ? "dropM" : "dropL"}>
              <Link to="/">
                <div> Home</div>
              </Link>
              <Link to="/continent/africa">
                <div>Africa</div>
              </Link>
              <Link to="/continent/asia">
                <div>Asia</div>
              </Link>
              <Link to="/continent/oceania">
                <div>Australia</div>
              </Link>
              <Link to="/continent/europe">
                <div>Europe</div>
              </Link>
              <Link to="/continent/NorthAmerica">
                <div>North America</div>
              </Link>
              <Link to="/continent/SouthAmerica">
                <div>South America</div>
              </Link>
              <Link to="/passport">
                <div>My Passport</div>
              </Link>
              <Link to="/futuredestinations">
                <div>Future Destinations</div>
              </Link>
            </div>
          </>
        )}
          </Media>
    </div>
    : null
  );
};
export default Drop