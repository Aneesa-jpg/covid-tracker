import React from "react";
import { GitHub, Mail } from "react-feather";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer id="footer">
      <h5>We stand with everyone fighting on the frontlines</h5>

      <div className="links">
        <a
          href="https://github.com/Aneesa-jpg/covid-tracker"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          href="mailto:aneesa.farook.sait@gmail.com"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
