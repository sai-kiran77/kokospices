import React from "react";
import instagram from "../assets/instagram.svg";
import "./Product.scss";
import rightArrowIcon from "../assets/iconr-right-green.svg";
import { Link } from 'react-router-dom';

function Product(props) {
  return (
    <div className="product-card">
      <img height={120} width={120} src={props.image} alt={props.title} />
      <div className="product-title">{props.title}</div>
      <div className="product-desc">{props.desc}</div>
      <Link className="link" to="/contact">
        <button className="more-details-btn">
          <span>More Details</span>
          <img src={rightArrowIcon} alt="Right Arrow" />
        </button>
      </Link>
    </div>
  );
}

export default Product;
