import React from 'react';

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <p>Over the years, I've had the opportunity to work on some intriguing projects and roles:</p>
      <ul>
        <li><strong>Machine Learning Engineer, THG (April 2023-Current):</strong> Part of the ML team, I work on model building, model integrity maintainance and deployment on cloud platforms (GCP, in our case). Created gRPC API for services.</li>
        <li><strong>Software Engineer, THG (Sep 2022 - March 2023):</strong> Junior full-stack developer. Worked on several in-house projects in Java Spring Boot and Typescript React. Learned testing, deployment, Git and how to think like a developer more generally.</li>
        <li><strong>ML Research Intern, Faraday Institution (Summer 2021):</strong> Created surrogate models for thermal runaway of Li-Ion batteries using Gaussian processes, which significantly reduced computation time.</li>
      </ul>
    </div>
  );
}

export default Experience;
