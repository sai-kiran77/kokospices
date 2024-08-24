import React from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import logo from "../assets/logo.svg";
import "./Footer.scss";

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
            <div>
              <a href="tel:+919188770573">+91 9188770573</a>
            </div>
            <div>
              <a href="tel:+919496732996">+91 9496732996</a>
            </div>
          </div>

          <div className="details-head mt-3">Email</div>
          <div className="details-body">
            <div>
              <a href="mailto:sajan@jsinternation.co">sajan@jsinternation.co</a>
            </div>
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
