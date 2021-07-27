import React from 'react'
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';

const Footer = () =>  {
    return (
        <footer>
            <div className = "footer-one container nav flex-wrap">

                <div className = "single-footer-caption col-12 col-sm-6 col-lg-3">
                    <Link to = '/' className = "text-start">
                        <img src ={Logo} alt ="Logo"/>
                    </Link>

                    <span className ="mb-3 mt-3">
                        Subscribe our newsletter to get updates about our services
                    </span>

                    <div className ="social-media d-flex justify-content-center mb-2 mt-2">
                        <a href="https://www.facebook.com/imos11/" rel="noreferrer noopener" target ="_blank">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/imrn.bl/" rel="noreferrer noopener" target ="_blank">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com/" rel="noreferrer noopener" target ="_blank">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>

                </div>

                <div className = "footer-caption col-12 col-sm-6 col-lg-3">
                    <h4>Company</h4>
                    <Link to = '/packages'>Why choose us</Link>
                    <Link to = '/packages'>Review</Link>
                    <Link to = '/packages'>Customers</Link>
                    <Link to = '/packages'>Carrier</Link>
                </div>
                <div className = "footer-caption col-12 col-sm-6 col-lg-3">
                    <h4>Products</h4>
                    <Link to = '/help'>Why choose us</Link>
                    <Link to = '/help'>Review</Link>
                    <Link to = '/help'>Customers</Link>
                    <Link to = '/help'>Carrier</Link>
                </div>
                <div className = "footer-caption col-12 col-sm-6 col-lg-3">
                    <h4>Support</h4>
                    <Link to = '/contact'>Technology</Link>
                    <Link to = '/contact'>Products</Link>
                    <Link to = '/contact'>Customers</Link>
                    <Link to = '/contact'>Sales geography</Link>
                </div>
            </div>

            <div className ="copy-right-caption">
                <hr/>
                <span>Copyright ©2021 All rights reserved | This template is made with  by Baxisli Imran</span>
            </div>

        </footer>
    )
}

export default Footer;
