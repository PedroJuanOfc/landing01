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
          <h1>Conecte-se com especialistas e alcance seus objetivos educacionais todos os dias.</h1>
          <a href="#educacao-online" className="banner-button">Consulte Mais Informação</a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
