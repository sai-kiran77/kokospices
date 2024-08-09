import React from 'react';
import fairPricing from '../assets/fair-pricing.svg';
import customerEx from '../assets/customer-experience.svg';
import highQuality from '../assets/high-quality.svg';

function OurQualities() {
  return (
    <div className="qualities-st-ct">
        <div>
            <img src={fairPricing} alt="fair pricing," />
            <p>Fair Pricing</p>
        </div>
        <div>
            <img src={highQuality} alt="top-notch quality" />
            <p>Top-Notch Quality</p>
        </div>
        <div>
            <img src={customerEx} alt="customer experience" />
            <p>Customer Experience</p>
        </div>
        <div>
            <button className='reach-out-btn'>Reach out to us</button>
        </div>
    </div>
  );
}

export default OurQualities;
