import { FaDiscord, FaFacebook, FaTwitter } from 'react-icons/fa'

import Link from 'next/link'
import React from 'react'
import { SiNextdotjs } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="footer bg-light text-center p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <Link href="/" className="navbar-brand">
              <SiNextdotjs style={{ width: '50px', height: '50px' }} />
            </Link>
            <p className="text-muted">
              We are committed to providing the best service and products to our
              customers. Our team works tirelessly to bring you the latest
              trends and innovations.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-muted">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-muted">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="text-muted">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Follow Us</h5>
            <div className="d-flex justify-content-center mb-3">
              <a
                href="https://twitter.com"
                className="text-muted mx-2"
                aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                className="text-muted mx-2"
                aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a
                href="https://discord.com"
                className="text-muted mx-2"
                aria-label="Discord">
                <FaDiscord size={24} />
              </a>
            </div>
            <p className="text-muted">info@yourcompany.com</p>
            <p className="text-muted">+1 234 567 890</p>
          </div>
        </div>
        <hr />
        <span className="text-muted">
          © 2024 Your Company. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
