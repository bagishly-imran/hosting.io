import React from 'react'
import '../Sass/App.scss';
import '../Sass/Navbar.scss';
import ToggleMenu from  '../components/ToggleMenu';
import ScrollMenu from '../components/ScrollMenu';



const Navbar = () => {

    return (
        <header>
            <div className = "container">

                <ScrollMenu/>

                <ToggleMenu/>

            </div>            

        </header>
    )
}

export default Navbar;
