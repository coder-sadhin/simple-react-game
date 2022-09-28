import React from 'react';
import './Header.css'
import img from '../../logo.jpg'

const Header = () => {
    return (
        <div>
            <nav className='Header'>
                <img src={img} alt="" />
                <h1>BEST-GAMER-PLACES</h1>
            </nav>
            <p className='game-title'>Play your game today: </p>
        </div>
    );
};

export default Header;