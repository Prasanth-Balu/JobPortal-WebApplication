import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div className="footer-section">

          <h2>CareerHub</h2>

          <p>
            Find your dream job with CareerHub.
            Discover opportunities from trusted companies
            across India.
          </p>

        </div>

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">Jobs</a>
            </li>

            <li>
              <a href="/">Contact</a>
            </li>

          </ul>

        </div>

        <div className="footer-section">

          <h3>Contact</h3>

          <p>Email : careerhub@gmail.com</p>

          <p>Phone : +91 1234567890</p>

          <p>Location : Chennai, India</p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 CareerHub. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer
