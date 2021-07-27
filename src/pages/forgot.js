import React from 'react'
import '../Sass/LogReg.scss';
import Loader from '../images/loder.webp';
import {Link} from 'react-router-dom';

const Forgot = () => {
    return (
        <div className = "log-reg-content">

            <div className = "container d-flex justify-content-center align-items-center">

                <form className = "forgot-form log-reg opacity-animation">

                    <div className = "logo-and-head">
                        <img src = {Loader} className ="log-reg-logo" alt="loader"/>
                        <h4>Forgot Password</h4>
                    </div>

                    <div className = "log-reg-group">

                        <label htmlFor = "email">
                            <span>Email Address</span>
                            <input type = "mail" id = "email" name ="email" placeholder ="Email Address... " required/>
                        </label>

                        <button>Send</button>

                        <div className = "d-flex justify-content-between">
                            <Link to = '/login'>Login</Link>
                            <Link to = '/register'>Registration</Link>
                        </div>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Forgot;
