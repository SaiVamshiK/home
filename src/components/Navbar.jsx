import React from 'react';
// importing fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Resume from '../assets/SaiVamshiResume.pdf';

function Navbar(){
	return <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand pl-2" href="/" style={{color: "#93329e"}}> &lt; SaiVamshi &#47;&gt;</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" style={{border: "2px solid black", outline: "none"}}> 
                <FontAwesomeIcon icon = {faBars} style={{
                    color: "black",
                }}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active px-2">
                    <a className="nav-link" href="#about">About me<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active px-2">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item active px-2">
                    <a className="nav-link" href={Resume} target="blank">Resume</a>
                </li>
                <li className="nav-item active px-2">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                </ul>
            </div>
            </nav>
    </div>
}

export default Navbar;