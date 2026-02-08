import React from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo.jsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <Link to="/" className="footerBrand">
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Logo />
                <div>
                  <div className="brandName">Bhuviona</div>
                  <div className="brandTagline">Expanding Intelligence</div>
                </div>
              </div>
            </Link>
            <div style={{ marginTop: 10 }} className="p-sm">
              Bhuviona Technologies Pvt Ltd
            </div>
            <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
              <a 
                href="https://www.linkedin.com/company/bhuviona" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footerLink socialLink"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/bhuviona" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footerLink socialLink"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a 
                href="https://www.youtube.com/@bhuviona" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footerLink socialLink"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>

          <div>
            <div className="footerTitle">Products</div>
            <div className="footerLinks">
              <Link to="/products" className="footerLink">
                VYON
              </Link>
              <span className="footerLink">AI Applications</span>
            </div>
          </div>

          <div>
            <div className="footerTitle">Contact</div>
            <div className="footerLinks">
              <a 
                className="footerLink" 
                href="mailto:info@bhuviona.com"
                aria-label="Email Bhuviona"
              >
                info@bhuviona.com
              </a>
              <span className="footerLink">
                Jayanagar, Shivamogga<br />
                Karnataka, India
              </span>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          © {currentYear} Bhuviona Technologies Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
