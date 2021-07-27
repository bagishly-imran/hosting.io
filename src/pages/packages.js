import React from 'react'
import '../Sass/Packages.scss';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import About from '../components/About';


const Packages = ()  => {

    const packages = useSelector(state => state.packages);

    return (
        <div className = "packages-caption">

            <div className = "section-title opacity-animation container">
                <h2>Choose plan which fit for you</h2>
                <p className = "text-center">
                    Supercharge your WordPress hosting with detailed website analytics, marketing tools. 
                    Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. 
                    We're here to help you succeed!
                </p>
            </div>

            <div className ="container">
                <div className ="packages-content opacity-animation row">

                    {
                        packages.map(myPackage => {
                            return(
                                <div className ="my-pack col-12 col-md-6 col-lg-3" key = {myPackage.id}>
                                    <img src={myPackage.img} alt="price icon"/>
                                    <h4 className = "price-head">{myPackage.title}</h4>
                                    <span>Starting at</span>
                                    <h4 className = "price-total">${myPackage.price} <sub>/ month</sub></h4>
                                    <hr/>
                                    <ul className ="pack-list">
                                        <li>{myPackage.packList[0].pcList_1}</li>
                                        <li>{myPackage.packList[0].pcList_2}</li>
                                        <li>{myPackage.packList[0].pcList_3}</li>
                                        <li>{myPackage.packList[0].pcList_4}</li>
                                        <li>{myPackage.packList[0].pcList_5}</li>
                                    </ul>
                                    <Link to = '/register' className = "go-to-btn">Get Started</Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <About/>

        </div>
    )
}

export default Packages;