import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Leaders from './components/Leaders';
import Subsidiaries from './components/Subsidiaries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Leaders />
      <Subsidiaries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;