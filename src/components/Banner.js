/* eslint-disable react-hooks/exhaustive-deps */
// Banner.js
import React, { useEffect, useRef, useState } from 'react';
import './Banner.css';
import bannerImage from '../assets/estudante.jpg';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  return (
    <section
      className={`banner ${isVisible ? 'animate' : ''}`}
      id="inicio"
      ref={sectionRef}
    >
      <div className="banner-content">
        <div className="banner-image">
          <img src={bannerImage} alt="Aprendizagem Online" />
        </div>
        <div className="banner-text">
          <h1>Aprenda Todos os Dias</h1>
          <p>
            Conecte-se com professores especializados e alcance seus objetivos educacionais. Nossa plataforma facilita o aprendizado contínuo e acessível, onde quer que você esteja.
          </p>
          <a href="#educacao-online" className="banner-button">Consulte Mais Informação</a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
