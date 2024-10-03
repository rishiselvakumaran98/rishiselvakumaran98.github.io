/* eslint-disable */
import React from 'react';
import '../assets/css/title.styles.css';
import laptop_tech_emoji from '../assets/images/laptop_tech_emoji.png'; 
const Header = () => (
    <header id="header" className="alt">
        <title>Rishi</title>
        <span className="logo"><img src={laptop_tech_emoji} alt="" style={{ width: '300px', height: '300px' }}/></span>

        <h1 className="terminal-box"><span class="text_1"> $ Meet Rishi...</span></h1>
        <h3>Tech enthusiast 💻, and problem solver ⚙️</h3>
    </header>
)

export default Header
