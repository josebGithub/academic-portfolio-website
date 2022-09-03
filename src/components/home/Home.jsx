
import React from 'react';
import '../../assets/css/home.css';
import {BsArrowDown} from 'react-icons/bs';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MYLOGO from '../../assets/images/my_logo.jpg';

//library Creation
library.add(fas);

const Home = () => {
    return (
        <section id='home'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <nav className="navbar">
                <div className="my-logo">
                    <a className="myname" href="/">JosephineBut</a>
                </div> 
            </nav>
           
            <div className="container home__container">
                <p>Hello, I am Josephine But. Welcome to my website.</p>
                <div className="menu-direction">
                    <h2>Menu</h2>
                    <div><FontAwesomeIcon icon={["fas", "angles-down"]} size="3x"/></div>
                </div>
                <div className="nav-links">
                        <a href="#about">About</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#experience">Experience</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                </div>
            </div> 
            </section>

    )
}

export default Home