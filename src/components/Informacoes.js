/* eslint-disable react-hooks/exhaustive-deps */
// Informacoes.js
import React, { useEffect, useRef, useState } from 'react';
import './Informacoes.css';
import infoImage from '../assets/info-image.png';

const Informacoes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`informacoes ${isVisible ? 'animate' : ''}`}
      id="educacao-online"
      ref={sectionRef}
    >
      <div className="informacoes-content">
        <div className="informacoes-text">
          <h2>Treine seu cérebro hoje!</h2>
          <p>
            Aperfeiçoe suas habilidades e expanda seu conhecimento com aulas personalizadas e interativas. Nossos professores estão prontos para te guiar em uma jornada de aprendizado dinâmica e envolvente, projetada para atender suas necessidades específicas.
          </p>
          {/* <a href="#cursos" className="informacoes-button">Todos os Cursos</a> */}
        </div>
        <div className="informacoes-image">
          <img src={infoImage} alt="Treine seu cérebro" />
        </div>
      </div>
    </section>
  );
}

export default Informacoes;
