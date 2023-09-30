import './App.css';
import Header from './components/header/Header';
import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Certificates from './components/certificates/Certificates';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Badges from './components/badges/Badges';

function App() {
  return (
    <div className="App">
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Badges />
        <Certificates />
        <Contacts />
      </main>
        <Footer />
        <Scrollup />
    </div>
  );
}

export default App;
