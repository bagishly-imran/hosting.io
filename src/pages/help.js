import React from 'react'
import Faq from '../components/Faq';
import '../Sass/Help.scss';

const Help = () => {
    return (
        <div className ="help">
            <div className = "help-center d-flex justify-content-center align-items-center">
                <h1>Help center</h1>
            </div>

            <Faq/>
            
        </div>
    )
}

export default Help;
