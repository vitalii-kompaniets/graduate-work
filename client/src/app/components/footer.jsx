import React from "react";
import imgLogo from "../img/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
          <div className="footer-section">
              <div className="about">
                  <div className="footer-logo">
                      <img src={imgLogo} alt="RELAX HOTEL & SPA" />
                  </div>
                  <div className="about_description">
                      <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
              </div>
              <div className="subscribe-footer">
                  <div className="footer-title">
                    <h2>Subscribe to our news</h2>
                  </div>
                  <div className="footer_email-input">
                      <input className="footer-input" type="email" name="email" placeholder="Enter your email" />
                      <button className="btn" type="submit">Subscribe</button>
                  </div>
              </div>
              <div className="contact-info">
                  <div className="contact-info_adress">Los-Angeles, CA</div>
                  <div className="contact-info_phone">+1 (603)535-4592</div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
