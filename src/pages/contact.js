import React from 'react'
import '../Sass/Contact.scss';

const Contact = () => {
    return (
        <div className = "contact-content">
            <div className = "contact-us d-flex justify-content-center align-items-center">
                <h1>Contact Us</h1>
            </div>


            <div className ="map-caption container">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4668156975304!2d49.915854114762496!3d40.42066106332554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030628c1756b53b%3A0x154f5b1e67a7da69!2zS29yb8SfbHU!5e0!3m2!1saz!2s!4v1610110662454!5m2!1saz!2s" title = "site map" width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

            </div>

            <div className = "touch-caption container">
                <form className = "get-in-touch">
                    <h4 className ="w-100">Get in Touch</h4>

                    <textarea className ="message" placeholder ="Enter Message..." required></textarea>

                    <label className ="user-label">
                        <input className = "name" id ="name" name ="name" placeholder ="Enter your name..." required/>
                        <input className ="mail" id = "mail" name ="mail" placeholder = "Enter your mail..." required/>
                    </label>

                    <input className ="subject" id ="subject" name = "subject"  placeholder = "Enter Subject..." required/>

                    <button className = "go-to-btn btn">SEND</button>
                </form>
                <div className ="contact-caption">
                    <ul>
                        <li>
                            <i className="bi bi-house-door"></i>
                            <a href="https://goo.gl/maps/Yd7HgCiBEoAqLFC5A"
                             rel="noreferrer noopener" target="_blank"
                            >
                                Koroglu m/s
                            </a>
                        </li>
                        <li>
                            <i className="bi bi-phone"></i>
                            <a href="tel:994505110003" rel="noreferrer noopener" target="_blank">+994 50 511 00 03 </a>
                        </li>
                        <li>
                            <i className="bi bi-envelope"></i>
                            <a href = "mailto:baxisli74@gmail.com" rel="noreferrer noopener" target="_blank">baxisli74@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Contact;
