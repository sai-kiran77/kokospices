import React from "react";
import OurQualities from "../components/OurQualities";
import "./About.scss";
import aboutSpices from "../assets/about-us-spices.svg"
import cinnamon from "../assets/cinnamon.svg"
function About() {
  return (
    <div className="about-pg-ct">
      <h3 className="text-center my-5">About Us</h3>
      <p className="text-center mb-5">Freshness of farm at the convenience of your home</p>
      <div className="content-container">
        <p>
          At JS International, we believe that organic and fresh spices should
          be accessible to everyone, not just a luxury for the few. Our mission
          is to make fresh, flavorful spices available globally by supplying
          locally grown spices from all corners of India. Kerala, with its rich
          heritage in farming, is renowned for its organic spices. We honor
          these traditions by delivering the finest quality spices, packed with
          multiple health benefits, straight to your home
        </p>
        <p>
          Our passion for locally grown spices led to the founding of JS
          International as a pioneering venture. In a short span, we have
          achieved remarkable growth, becoming one of the leading processors and
          exporters of a diverse range of spices. We cater to various
          industries, retailers, and food businesses, staying true to our
          commitment to make organically grown spices affordable and accessible
          to every corner of the globe.
        </p>
        <div className="qualities-ct w-75">
          <OurQualities />
        </div>
      </div>

      <img style={{ position: "absolute", top: "250px", right: "50px" }} src={aboutSpices} alt="Spices placholder" />
      <img style={{ position: "absolute", top: "100px", left: 0 }} src={cinnamon} alt="cinnamon" />
    </div>
  );
}

export default About;
