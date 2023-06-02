import React, { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import CV from './CV';
import sparta from './sparta.pdf';
import helot_exploit from './helot_exploit.pdf'
import helot_perioikoi from './helot_perioikoi.pdf'

function MainContent() {
  const [section, setSection] = useState('about');

  const renderSection = () => {
    switch(section) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      case 'CV':
        return <CV/> 
      default:
        return <About />;
    }
  }

  return (
    <main>
      <nav>
        <button onClick={() => setSection('about')}>About</button>
        <button onClick={() => setSection('projects')}>Projects</button>
        <button onClick={() => setSection('experience')}>Experience</button>
        <button onClick={() => setSection('CV')}>CV</button>
        <button onClick={() => setSection('contact')}>Contact</button>

        

      </nav>
      <a href={sparta} target="_blank" rel="noopener noreferrer">
        <button>Open PDF</button>
      </a>
      <a href={helot_exploit} target="_blank" rel="noopener noreferrer">
        <button>Open PDF</button>
      </a>
      <a href={helot_perioikoi} target="_blank" rel="noopener noreferrer">
        <button>Open PDF</button>
      </a>
      {renderSection()}
    </main>
  );
}

export default MainContent;
