import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const navRef = useRef(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === null;
  });

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');
    const theme = darkMode ? 'dark' : 'light';
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navCollapse = document.getElementById('navbarNav');
      const isExpanded = navCollapse.classList.contains('show');

      if (isExpanded && navRef.current && !navRef.current.contains(event.target)) {
        document.querySelector('.navbar-toggler')?.click();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse.classList.contains('show')) {
      document.querySelector('.navbar-toggler')?.click();
    }
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${isHome
            ? darkMode
              ? 'navbar-dark navbar-transparent'
              : 'navbar-light navbar-transparent'
            : darkMode
              ? 'navbar-dark bg-dark'
              : 'navbar-light bg-light'
          }`}
      >

        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
            <img src="/assets/logo.svg" alt="Logo" height="80" className="me-2" />
            <span>Windie Victoria Speed</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" ref={navRef}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio" onClick={closeMenu}>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume" onClick={closeMenu}>Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      {/* Floating Theme Toggle Button */}
      <button
        className="btn btn-theme theme-toggle-button"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
      </button>

    </>
  );
}
