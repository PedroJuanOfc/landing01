import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Informacoes from './components/Informacoes';
import AprendizagemOnline from './components/AprendizagemOnline';
import InovacoesAprendizagem from './components/InovacoesAprendizagem';
import Footer from './components/Footer';
import Contato from './components/Contato';
import Team from './components/NossoTime';
import Timeline from './components/Timeline';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página principal */}
          <Route path="/" element={
            <>
              <Navbar />
              <Banner />
              <Informacoes />
              <AprendizagemOnline />
              <InovacoesAprendizagem />
              <Timeline />
              <Team /> {/* NossoTime */}
              <Footer />
            </>
          } />
          {/* Página de contato */}
          <Route path="/contato" element={
            <>
              <Navbar />
              <Contato />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
