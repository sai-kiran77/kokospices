import React from 'react';
import fairPricing from '../assets/fair-pricing.svg';
import customerEx from '../assets/customer-experience.svg';
import highQuality from '../assets/high-quality.svg';
import './OurQualities.scss';
import { Link } from 'react-router-dom';

function OurQualities() {
  return (
    <div className="qualities-st-ct">
        <div className='box'>
            <img src={fairPricing} alt="fair pricing," />
            <p>Fair Pricing</p>
        </div>
        <div className='box'>
            <img src={highQuality} alt="top-notch quality" />
            <p>Top-Notch Quality</p>
        </div>
        <div className='box'>
            <img src={customerEx} alt="customer experience" />
            <p>Customer Experience</p>
        </div>
        <div className='box'>
            <Link className='link' to="/contact">
                <button className='reach-out-btn'>Reach out to us</button>
            </Link>
        </div>
    </div>
  );
}

export default OurQualities;
