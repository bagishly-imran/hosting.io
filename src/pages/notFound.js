import React from 'react'
import '../Sass/NotFound.scss';
import {Link} from 'react-router-dom';

const  NotFound = () => {
    return (
        <div className = "container not-found-content">
            <div className = "not-found">
                <h1 className = "display-1">Not Found Page</h1>
                <h5 className = "display-5">Error 404</h5>
                <Link to = '/' className = "btn bg-dark w-50">Home</Link>
            </div>
        </div>
    )
}

export default NotFound;
