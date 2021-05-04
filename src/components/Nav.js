import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media"
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
            {matches.small && <div className="navS">
              <Link to="/">
                <div>Home</div>
              </Link>
              <Link to="/passport">
                <div>My Passport</div>
              </Link>
              <Link to="/futuredestinations">
                <div>Future Destinations</div>
              </Link>
            </div>}
            {matches.medium && <div className="navM">
              <Link to="/">
                <div>Home</div>
              </Link>
              <Link to="/passport">
                <div>My Passport</div>
              </Link>
              <Link to="/futuredestinations">
                <div>Future Destinations</div>
              </Link>
            </div>}
            {matches.large && <div className="navL">
              <Link to="/">
                <div>Home</div>
              </Link>
              <Link to="/passport">
                <div>My Passport</div>
              </Link>
              <Link to="/futuredestinations">
                <div>Future Destinations</div>
              </Link>
            </div>}
          </>
        )}
          </Media>
    </div>
  );
};
export default Nav