import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
const Footer = (props) => {
  return (
    <div className="foot">
    <FontAwesomeIcon icon={faTwitter}/>
    <FontAwesomeIcon icon={faFacebookSquare}/>
    <FontAwesomeIcon icon={faLinkedin}/>
    <FontAwesomeIcon icon={faInstagram}/>
    </div>
  );
};
export default Footer