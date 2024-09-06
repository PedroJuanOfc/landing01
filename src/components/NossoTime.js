import React from 'react';
import './NossoTime.css'; // Importa o CSS para estilização
import linkedinIcon from '../assets/linkedin.png'; // Importa a imagem do LinkedIn

const teamMembers = [
  {
    name: 'Fimoso 1',
    role: 'Desenvolvedor Front-end',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    linkedin: '#', // Substitua pelo link real do LinkedIn
    image: 'https://via.placeholder.com/150', // Substitua pela URL da imagem
  },
  {
    name: 'Fimoso 2',
    role: 'Desenvolvedor Front-end',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    linkedin: '#',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Fimoso 3',
    role: 'Desenvolvedor Back-end',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    linkedin: '#',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Fimoso 4',
    role: 'Desenvolvedor Back-end',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    linkedin: '#',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Fimoso 5',
    role: 'Desenvolvedor Full-stack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    linkedin: '#',
    image: 'https://via.placeholder.com/150',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Nosso time</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="description">{member.description}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" /> {/* Usa a imagem local */}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
