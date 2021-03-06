import React from "react";
import footerlogo from "../images/logo-no-text.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__img" src={footerlogo} alt="logo" />

      <div className="footer__contactDiv">
        <h4 className="footer__h4">Created By</h4>
        <p className="footer__p">Megan Carnaghi</p>
        <p className="footer__p">Rodolfo Diaz</p>
        <p className="footer__p">Daniel Hawthorne-Foss</p>
        <p className="footer__p">Brian Smak</p>
      </div>
    </div>
  );
}

export default Footer;
