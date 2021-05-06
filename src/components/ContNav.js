import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media"
const ContNav = (props) => {
  return (
    <div>
      <Media queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
      }}>
        {matches => (
          <>
             <div className={matches.small ? "navS" : matches.medium ? "navM" : "navL"}>
              <Link to="/continent/africa">
                <div>Africa</div>
              </Link>
              <span>|</span>
              <Link to="/continent/asia">
                <div>Asia</div>
              </Link>
              <span>|</span>
              <Link to="/continent/oceania">
                <div>Australia</div>
              </Link>
              <span>|</span>
              <Link to="/continent/europe">
                <div>Europe</div>
              </Link>
              <span>|</span>
              <Link to="/continent/NorthAmerica">
                <div>North America</div>
              </Link>
              <span>|</span>
              <Link to="/continent/SouthAmerica">
                <div>South America</div>
              </Link>
            </div>
          </>
        )}
          </Media>
    </div>
  );
};
export default ContNav