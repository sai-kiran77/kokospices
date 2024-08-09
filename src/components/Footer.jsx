import React from "react";
import { Link } from "react-router-dom";
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import logo from '../assets/logo.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="JS International" />
        </Link>
      </div>

      <div className="more-details">
        <div>
          <div className="details-head">Phone no</div>
          <div className="details-body">
            <div>+9188770573</div>
            <div>+919496732996</div>
          </div>
        </div>
        <div>
          <div className="details-head">Address</div>
          <div className="details-body">
            <div>JS international</div>
            <div>Kalinga buildings</div>
            <div>Adoor , pathanamthitta</div>
            <div>Kerala - India</div>
          </div>
        </div>
      </div>

      <div className="social">
        <img height={32} width={32} src={instagram} alt="instagram" />
        <img height={32} width={32} src={twitter} alt="twitter" />
      </div>
    </footer>
  );
}

export default Footer;
