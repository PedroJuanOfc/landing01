import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo da Empresa" className="logo" />
          <span className="company-name">Discipulus</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleScrollToSection('inicio'); }}>Início</a></li>
          <li><a href="#educacao-online" onClick={(e) => { e.preventDefault(); handleScrollToSection('educacao-online'); }}>Educação Online</a></li>
          <li><Link to="/contato">Entre em Contato</Link></li>
          <li><a href="#comece-agora" onClick={(e) => { e.preventDefault(); handleScrollToSection('comece-agora'); }} className="highlight">Comece Agora</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
