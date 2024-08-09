import React from 'react';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import logo from '../assets/logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav>
          <div className="logo">
          <Link to="/">
            <img src={logo} alt="JS International" />
          </Link>
          </div>
          <div className="nav-links">
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/about">About us</Link>
            <Link className='link' to="/contact">Contact us</Link>
          </div>
          <div className="social">
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </nav>
    </header>
  );
}

export default Header;
