import React from "react";

const Footer = () => {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-4 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="/">Web design</a>
                </li>
                <li>
                  <a href="/">Development</a>
                </li>
                <li>
                  <a href="/">Hosting</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-4 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="/">Company</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Legacy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 item social">
              <a href="/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <p className="copyright">Renthings © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
