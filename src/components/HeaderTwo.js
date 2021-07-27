import React  from 'react'
import imgHero from '../images/hero_right.png';
import {Link} from 'react-router-dom';

const HeaderTwo = () =>  {
    return (
        <div className = "header-two opacity-animation container">
            <div className = "hero-caption">
                <span>Best Domain & hosting service provider</span>
                <h1>Powerful web hosting</h1>
                <p>
                    Supercharge your WordPress hosting with detailed
                    website analytics, marketing tools, security, and data
                    backups all in one place.
                </p>
                <Link to = '/register' className = "btn go-to-btn">Get Started</Link>
            </div>

            <div className = "hero-img">
                <img src={imgHero} alt = "Hero"/>
            </div>
        </div>
    )
}

export default HeaderTwo;