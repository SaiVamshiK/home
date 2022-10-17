import React from "react";
import Typed from "react-typed";
import Icon from "./Icons";
// importing fontAwesome
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <div className="header-wraper py-10">
      <div className="main-info">
        <h1 className="display-4">Sai Vamshi Kavali</h1>
        <Typed
          classname="typed-text"
          strings={["Web Developer", "Problem Solver"]}
          typeSpeed={40}
          backSpeed={60}
          loop
          style={{ color: "whitesmoke", fontSize: "1.2em" }}
        />
        <div className="icon">
          <a href="https://github.com/SaiVamshiK" target="blank">
            <FontAwesomeIcon
              className="social-icons"
              icon={faGithub}
              style={{
                color: "white",
              }}
            />
          </a>
          <a href="https://www.instagram.com/ksaivamshi/" target="blank">
            <FontAwesomeIcon
              className="social-icons"
              icon={faInstagram}
              style={{
                color: "white",
                onMouseOver: "",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kavali-sai-vamshi-24b566198/"
            target="blank"
          >
            <FontAwesomeIcon
              className="social-icons"
              icon={faLinkedin}
              style={{
                color: "white",
              }}
            />
          </a>
        </div>
        <a href="#about" className="btn-main-offer btn btn-dark">
          <a href="#about" style={{ textDecoration: "none", color: "#f1f1f1" }}>
            More About Me
          </a>
        </a>
      </div>
    </div>
  );
}

export default Header;
