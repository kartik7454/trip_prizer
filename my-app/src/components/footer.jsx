import React from 'react';
import '../App.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section newsletter">
          <h3>Get latest updates & offers</h3>
          <input type="email" placeholder="Enter email address" />
          <button>Subscribe</button>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
          </div>
          <div className="store-icons">
            <img src="" alt="App Store" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>International Flights</li>
            <li>Domestic Flights</li>
            <li>Hotels in India</li>
            <li>International Hotels</li>
            <li>Tour Packages</li>
            <li>Special Offers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>24*7 Support</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Login</li>
            <li>Enquiry</li>
            <li>Offers</li>
            <li>Blog</li>
          </ul>
          <h3 className="accept">We Accept</h3>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/RuPay.svg/320px-RuPay.svg.png" alt="RuPay" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/IATA_logo.svg" alt="IATA" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2020-2025. | All Rights Reserved</p>
        <p>Designed & Developed by NSPL</p>
      </div>
    </footer>
  );
};
