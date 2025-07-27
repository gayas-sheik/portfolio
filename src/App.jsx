import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import TestimonialModal from './components/TestimonialModal';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const openModal = (testimonial) => {
    setModalData(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className="App">
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
          
          {activeSection === 'about' && <About onOpenModal={openModal} />}
          {activeSection === 'resume' && <Resume />}
          {activeSection === 'portfolio' && <Portfolio />}
          {activeSection === 'contact' && <Contact />}
          
          <TestimonialModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            testimonial={modalData} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;