import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: info@mahasfoodcourt.com</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
                <div className="footer-section">
                    <h4>Hours</h4>
                    <p>Mon-Fri: 9:00 AM - 10:00 PM</p>
                    <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Maha's Food Court. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

