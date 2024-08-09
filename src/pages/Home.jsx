import React from "react";
import "./Home.scss";
import organic from "../assets/organic.svg";
import OurQualities from "../components/OurQualities";

function Home() {
  return (
    <div className="home-pg-ct">
      <div className="section-1">
        <img width={75} height={75} src={organic} alt="organic" />
        <p className="tagline1">Our Best of world class spices</p>
        <h3 className="tagline2">
          Exquisite <span className="cl-red">Spices</span> and{" "}
          <span className="cl-lg_green">Seasoning</span>
        </h3>
        <div className="btns-ct">
          <button className="reach-out-btn">Reach Out</button>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>

      <div className="qualities-ct">
        <OurQualities />
      </div>
    </div>
  );
}

export default Home;
