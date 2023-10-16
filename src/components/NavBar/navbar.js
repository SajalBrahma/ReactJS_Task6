import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import ContactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
                <Link className="desktopMenuListItem">Skills</Link>

            </div>
            <button className="desktopMenuBtn">
                <img src={ContactImg} alt="Contact" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    )
}

export default Navbar