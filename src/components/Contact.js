import React from 'react';
import linkedinLogo from '../images/linkedin.png';  // adjust the path as needed
import githubLogo from '../images/github.png'; 


function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>If you'd like to get in touch or learn more about my work, I'd love to hear from you. You can reach me at aarjav.jain@gmail.com.</p>
      <p>Connect with me on social media:</p>
      <div className='social-box'>
        <a href="https://www.linkedin.com/in/aarjav-jain-459273147" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className='social-icon'/>
        </a>
        <a href="https://github.com/aarjav123cam" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className='social-icon'/>
        </a>
      </div>

    </div>
  );
}

export default Contact;

