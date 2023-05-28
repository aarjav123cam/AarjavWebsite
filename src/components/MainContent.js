import React, { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import CV from './CV';

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

      {renderSection()}
    </main>
  );
}

export default MainContent;
