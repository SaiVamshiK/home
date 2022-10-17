import React from "react";
// importing fontAwesome
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Icons() {
  return (
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
  );
}

export default Icons;
