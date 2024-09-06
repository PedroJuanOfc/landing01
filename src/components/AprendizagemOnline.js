/* eslint-disable react-hooks/exhaustive-deps */
// AprendizagemOnline.js
import React, { useEffect, useRef, useState } from 'react';
import './AprendizagemOnline.css';
import onlineLearningImage from '../assets/online-learning.jpg';

const AprendizagemOnline = () => {
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
      className={`aprendizagem-online ${isVisible ? 'animate' : ''}`}
      id="aprendizagem-online"
      ref={sectionRef}
    >
      <div className="aprendizagem-online-content">
        <div className="aprendizagem-online-text">
          <h2>Aprendizagem Online</h2>
          <p>
            Explore a flexibilidade do aprendizado online com uma vasta gama de cursos e conteúdos adaptados para diferentes níveis e áreas de interesse. Estude no seu próprio ritmo, no conforto do seu ambiente, e aproveite a conveniência de ter o conhecimento ao seu alcance.
          </p>
        </div>
        <div className="aprendizagem-online-image">
          <img src={onlineLearningImage} alt="Aprendizagem Online" />
        </div>
      </div>
    </section>
  );
}

export default AprendizagemOnline;
 