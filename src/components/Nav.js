import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGlobeAmericas} from "@fortawesome/free-solid-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons"
const Nav = (props) => {
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
              <Link to="/">
                <div><FontAwesomeIcon icon={faGlobeAmericas}/> Home</div>
              </Link>
              <Link to="/passport">
                <div>My Passport</div>
              </Link>
              <Link to="/futuredestinations">
                <div>Future Destinations</div>
              </Link>
              <div className="icon" onClick={() => props.handleVisable()}><FontAwesomeIcon icon={faBars}/></div>
            </div>
          </>
        )}
          </Media>
    </div>
  );
};
export default Nav