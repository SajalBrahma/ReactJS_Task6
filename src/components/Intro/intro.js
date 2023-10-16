import React from "react";
import './intro.css';
import bg from '../../assets/pic.jpg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, I'm<span className="introName">Sajal Brahma</span> </span>
                <span className="introText"> Full Stack Web Developer</span>
                <p className="introPara">I'm a skilled full stack web developer with experience<br/>in creating website and web applications.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" /> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro