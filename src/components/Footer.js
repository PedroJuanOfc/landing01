import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png'; // Importando a logo
import instagram from '../assets/instagram.png'; // Importando o ícone do Instagram
import linkedin from '../assets/linkedin.png'; // Importando o ícone do LinkedIn

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo da Empresa" className="logo" />
        </div>
        <ul className="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-nos">Sobre nós</a></li>
          <li><a href="#nosso-time">Nosso time</a></li>
          <li><a href="/contato">Entre em contato</a></li>
        </ul>
        <div className="footer-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <ul className="footer-bottom-links">
          <li><a href="#politica-de-privacidade">Política de Privacidade</a></li>
          <li><a href="#termos-de-servicos">Termos de Serviços</a></li>
          <li><a href="#configuracoes-de-cookies">Configurações de Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
