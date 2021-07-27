import React from 'react'
import Loader from '../images/loder.webp';
import '../Sass/LogReg.scss';
import {Link} from 'react-router-dom';

const Register = () => { 
    return (
        <div className = "log-reg-content">

            <div className = "container d-flex justify-content-center align-items-center">

                <form className = "register-form log-reg opacity-animation">

                    <div className = "logo-and-head">
                        <img src = {Loader} className ="log-reg-logo" alt="loader"/>
                        <h4>Registration</h4>
                    </div>

                    <div className = "log-reg-group">   

                        <label htmlFor = "fullname">
                            <span>Full Name</span>
                            <input type = "text" id = "fullname" name ="fullname" placeholder ="FullName... "required/>
                        </label>
                        <label htmlFor = "email">
                            <span>Email Address</span>
                            <input type = "mail" id = "email" name ="email" placeholder ="Email Address... " required/>
                        </label>
                        <label htmlFor = "password">
                            <span>Password</span>
                            <input type = "password" id = "password" name ="password" placeholder ="Password... " required/>
                        </label>
                        <label htmlFor = "confrimPassword">
                            <span>Confrim Password</span>
                            <input type = "password" id = "confrimPassword" name ="confrimPassword" placeholder ="Confrim Password... " required/>
                        </label>

                        <button>Register</button>
                        <Link to = '/login'>Login</Link>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Register;