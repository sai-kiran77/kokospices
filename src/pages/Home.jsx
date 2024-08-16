import React, { useState } from "react";
import "./Home.scss";
import organic from "../assets/organic.svg";
import curvedEllipse from "../assets/curved-ellipse.svg";
import OurQualities from "../components/OurQualities";
import pepper from "../assets/pepper-placeholder.svg";
import pepperProduct from "../assets/product-pepper.svg";
import cinnamonProduct from "../assets/product-cinnamon.svg";
import cinnamon from "../assets/cinnamon.svg";
import cardamonProduct from "../assets/cardamon-product.svg";
import processingImg1 from "../assets/processing-step-placeholder1.svg";
import processingImg2 from "../assets/processing-step-placeholder2.svg";
import processingStep1 from "../assets/processing-step-1.svg";
import processingStep2 from "../assets/processing-step-2.svg";
import processingStep3 from "../assets/processing-step-3.svg";
import processingStep4 from "../assets/processing-step-4.svg";
import cardamon from "../assets/cardamon.svg";
import Product from "../components/Product";

const ourProducts = [
  {
    image: pepperProduct,
    desc: "Native to the Malabar Coast of India, black pepper is now cultivated in tropical regions, with major producers including Vietnam, Indonesia, and Brazil.",
    title: "Black Pepper",
  },
  {
    image: cinnamonProduct,
    desc: "Native to the Malabar Coast of India, black pepper is now cultivated in tropical regions, with major producers including Vietnam, Indonesia, and Brazil.",
    title: "Cinnamon",
  },
  {
    image: cardamonProduct,
    desc: "Native to the Malabar Coast of India, black pepper is now cultivated in tropical regions, with major producers including Vietnam, Indonesia, and Brazil.",
    title: "Clove",
  },
  {
    image: cardamonProduct,
    desc: "Native to the Malabar Coast of India, black pepper is now cultivated in tropical regions, with major producers including Vietnam, Indonesia, and Brazil.",
    title: "Cardamon",
  },
];

const spicesProcessingSteps = [
  {
    title: "Carefully picked",
    image: processingStep1,
  },
  {
    title: "Freshly Processes",
    image: processingStep2,
  },
  {
    title: "Securely Packed",
    image: processingStep3,
  },
  {
    title: "Fast delivery",
    image: processingStep4,
  },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="home-pg-ct">
      <div className="section-1-ct">
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
        <img
          className="cinamon-placeholder left-aligned"
          src={cinnamon}
          alt="cinamon placeholder"
        />
        <img
          className="pepper-placeholder left-aligned"
          src={pepperProduct}
          alt="pepper placeholder"
        />
        <img
          className="cinnamon-placeholder"
          src={cinnamonProduct}
          alt="cinnamon placeholder"
        />
        <img
          className="cardamon-placeholder"
          src={cardamon}
          alt="cardamon placeholder"
        />
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

      <div className="processing-steps">
        <div className="content-container">
          <h2>Spice Processing Steps</h2>
          <p>
            Why settle for bland when you can enjoy the spicing process with JS
            International ? Reach out and savor the witty goodness of taste and
            health. Your taste buds—and dinner guests—will thank you!
          </p>
        </div>
        <img className="processing-1" src={processingImg1} alt="processing 1" />
        <img className="processing-2" src={processingImg2} alt="processing 1" />

        <div className="grid-container">
          {spicesProcessingSteps.map((obj, i) => {
            return (
              <div
                key={i}
                className={`step-ct ${i == activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              >
                <img src={obj.image} alt={obj.title} />
                <div className="title">{obj.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="products-ct">
        <h2>Our Product Range</h2>
        <p>These are our products that will make twist your taste buds</p>
        <img className="pepper-placeholder" src={pepper} alt="Pepper" />

        <div className="product-cards-ct">
          {ourProducts.map((obj) => {
            return (
              <Product image={obj.image} title={obj.title} desc={obj.desc} />
            );
          })}
        </div>
      </div>

      <section className="subscribe">
        <div className="subscribe-content">
          <h2>
            Check out our Blogs &<div>we love our people and our spices</div>
          </h2>
          <div className="d-flex">
            <input
              className="form-control py-2"
              type="text"
              placeholder="Email"
            />
            <button className="btn btn-success btn-clr text-white px-3 py-2 subscribe-btn">
              Subscribe{" "}
            </button>
          </div>
        </div>
        <img
          className="cinamon-placeholder"
          src={cinnamonProduct}
          alt="cinamon product placeholder"
        />
        <img
          className="cinamon-placeholder left-aligned"
          src={cinnamon}
          alt="cinamon placeholder"
        />
      </section>
    </div>
  );
}

export default Home;
