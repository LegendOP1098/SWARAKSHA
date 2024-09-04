import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#" className="logo">Protect Her</a></li>
                        <li><a href="#">Benefits</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#" className="cta">Get Started</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
