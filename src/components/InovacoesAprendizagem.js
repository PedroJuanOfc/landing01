/* eslint-disable react-hooks/exhaustive-deps */
// InovacoesAprendizagem.js
import React, { useEffect, useRef, useState } from 'react';
import './InovacoesAprendizagem.css';
import innovationImage from '../assets/innovation-image.jpg';

const InovacoesAprendizagem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Ajuste o threshold conforme necessário
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
      className={`inovacoes-aprendizagem ${isVisible ? 'animate' : ''}`}
      id="inovacoes-aprendizagem"
      ref={sectionRef}
    >
      <div className="inovacoes-aprendizagem-content">
        <div className="inovacoes-aprendizagem-image">
          <img src={innovationImage} alt="Inovações em Aprendizagem Online" />
        </div>
        <div className="inovacoes-aprendizagem-text">
          <h2>Inovações em Aprendizagem Online</h2>
          <p>
            Mantenha-se à frente com as últimas inovações em tecnologia educacional. Nossa plataforma integra inteligência artificial, realidade aumentada e outras ferramentas avançadas para proporcionar uma experiência de aprendizado mais imersiva, interativa e eficaz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InovacoesAprendizagem;
