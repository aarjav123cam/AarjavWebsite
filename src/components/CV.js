import React from 'react';
import cv from './cv.pdf';

const CV = () => {

  return (
    <div>
      <h2>CV</h2>
      <h3>Latest CV</h3>

      <a
        href={cv}
        download="cv"
        target="_blank"
        rel="noreferrer"
      >
        <button>Download CV</button>
      </a>

    </div>
  );
}

export default CV;
