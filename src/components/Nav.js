import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/continent">
        <div>Continent</div>
      </Link>
      <Link to="/passport">
        <div>My Passport</div>
      </Link>
    </div>
  );
};
export default Nav