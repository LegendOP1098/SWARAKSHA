import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <h1>Ensuring Safety for Women Everywhere</h1>
            <p>Our technology provides real-time detection and analytics to keep urban spaces safe for women.</p>
            <form>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Get Started</button>
            </form>
        </section>
    );
}

export default Hero;
