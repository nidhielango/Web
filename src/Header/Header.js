import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <header>
            <div id="logo"></div>
            <div className="menu"></div>
            <ul className="menu-items">
                <li>
                    <Link to="/" className='Link'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='Link'>About</Link>
                </li>
                <li>
                    <Link to="/project" className='Link'>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className='Link'>Contact</Link>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header