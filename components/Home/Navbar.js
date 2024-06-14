'use client'

import Link from 'next/link'
import { SiNextdotjs } from 'react-icons/si'

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark mb-4 py-3"
      style={{
        background: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        padding: '2px'
      }}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <SiNextdotjs style={{ width: '50px', height: '50px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <NavItem href="/#about" text="ABOUT" />
            <NavItem href="/#services" text="SERVICES" />
            <NavItem href="/#team" text="TEAM" />
            <NavItem href="/#contact" text="CONTACT" />
            <li className="nav-item">
              <Link href="/register" className="nav-link fw-medium" passHref>
                <button
                  type="button"
                  className="btn btn-outline-light navbar-btn rounded-5">
                  SIGN UP
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
// Navigation item component with smooth scroll
const NavItem = ({ href, text }) => {
  // Function to handle smooth scroll
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust offset as needed
        behavior: 'smooth'
      })
    }
  }
  return (
    <li className="nav-item">
      <a
        href={href}
        onClick={e => handleSmoothScroll(e, href.substring(2))}
        className="nav-link fw-medium text-white">
        {text}
      </a>
    </li>
  )
}
export default Navbar
