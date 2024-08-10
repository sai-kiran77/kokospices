import React from "react";
import "./Home.scss";
import organic from "../assets/organic.svg";
import curvedEllipse from "../assets/curved-ellipse.svg";
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

      <section className="why-us">
        <h2>Why Us</h2>
        <p>
          In today's competitive marketplace, finding a reliable brand is tough
        </p>
        <p>But when it comes to spices, there's no room for compromise</p>
        <p>
          Enter JS International: your go-to experts with years of experience in
          sourcing and exporting the finest spices
        </p>
        <p>
          We're practically on a first-name basis with the farmers, ensuring
          top-notch quality and fair pricing
        </p>
      </section>

      <div className="qualities-ct">
        <OurQualities />
        <div className="floating-ct">
          <img src={curvedEllipse} alt="curved ellipse" />
          <div className="content-ct">
            <span className="smile">😄</span>
            <p>
              Your taste buds will thank you—and so will your{" "}
              <span className="cl-red">dinner guests</span>
            </p>
          </div>
        </div>
      </div>

      <section className="subscribe">
        <h2>Check out our Blogs & 
          <div>
          we love our people and our spices 
          </div>
        </h2>
        <div className="d-flex">
          <input className="form-control py-2" type="text" placeholder="Email" />
          <button className="btn btn-success btn-clr text-white px-3 py-2 subscribe-btn">Subscribe </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
