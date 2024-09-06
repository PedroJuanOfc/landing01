import React from 'react';
import './Contato.css';

const Contato = () => {
  return (
    <div className="contato-container">
      <h1>Entre em contato</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form className="contato-form">
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Seu nome" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Seu email" />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..."></textarea>

        <div className="contato-terms">
          <input type="checkbox" id="termos" name="termos" />
          <label htmlFor="termos">Eu concordo com os <a href="#termos">Termos</a></label>
        </div>

        <button type="submit" className="contato-submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
