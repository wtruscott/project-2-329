import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media"
const Nav = (props) => {
  return (
    <div>
      <div className="nav">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/passport">
          <div>My Passport</div>
        </Link>
        <Link to="/futuredestinations">
          <div>Future Destinations</div>
        </Link>
      </div>
    </div>
  );
};
export default Nav