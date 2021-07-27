import React from 'react'
import '../Sass/Help.scss';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Faq = () => {

    const faq = useSelector(state => state.faq);

    return (
        <div className = "faq opacity-animation">

            <div className = "section-title">
                <h2>Frequently ask questions</h2>
                <p>
                    Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are 
                    just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!
                </p>
            </div>

            <div className = "container">

                <div className = "faq-content row m-0">

                    {
                        faq.map(myfaq => {
                            return(
                                <div className = "my-faq" key = {myfaq.id}>
                                    <h4>{myfaq.title}</h4>
                                    <p>{myfaq.content}</p>
                                </div>
                            )
                        })
                    }


                    <div className = "w-100 d-flex justify-content-center m-2">
                        <Link to = '/contact' className = "go-to-btn">Go To Support</Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Faq;
