import React from 'react';
import './header.css';

const Header = () =>{
    return (
        <div className="header navbar">
            <div className='container' id='header__nav'>
                <h2>
                    <a href="#" className='navbar-brand'>StarDB</a>
                </h2>
                <ul className='d-flex'>
                    <li className='nav-item'><a href="#" className='nav-link'>People</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Planets</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Starships</a></li>
                </ul>
            </div>
        </div>

    );
};

export default Header;