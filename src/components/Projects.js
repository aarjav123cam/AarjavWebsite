import React from 'react';
import torus from '../images/torus.png';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="project-image" >
        <img src={torus} alt="torus" className="project-image" />
        <figcaption className="image-caption">Neural network solution of torus under Ricci flow, embedded into &#8477;&#178;. Coloured lines are some solutions to its geodesics.</figcaption> 
      </div>

      <p className="project-text">Here are a few projects I've been involved in:</p>
      <h4>Machine Learning</h4>
      <ul>  
        <li><strong>ML solutions Ricci Flow on real metrics:</strong> Using physics-informed neural networks to investigate metric solutions to the geometry problem of Ricci Flow: a curvature-based PDE on metrics which helped prove the famous Poincaré conjecture. Created embeddings of the solutions, and subsequent visualisations. Accepted by a NeurIPS workshop in 2023 and the full paper can be found on <a href="https://arxiv.org/abs/2212.05892">Arxiv</a>.   </li>
        <li><strong>Drift Detection in ML models:</strong> Investigating the issue of concept and data drift-an important issue to diagnose in production ML models. Trained a toy MNIST CNN model and simulated drift using various noise additions to calculate statistical deviations from which one can create automatic model retraining thresholds. This can help ensure an accurate production model.</li>
        <li><strong>Transformer Stock Price Prediction Model:</strong> Investigated the efficacy of transformer models for stock price prediction. By creating sequences of price data, created trading signals for various stock tickers, with mild success. </li>
      </ul>
      <h4>Software Engineering</h4>
      <ul>  
        <li><strong>Full stack task list project in Java and React:</strong> </li>
        <li><strong>Drift Detection in ML models:</strong> Investigating the issue of concept and data drift-an important issue to diagnose in production ML models. Trained a toy MNIST CNN model and simulated drift using various noise additions to calculate statistical deviations from which one can create automatic model retraining thresholds. This can help ensure an accurate production model.</li>
        <li><strong>Transformer Stock Price Prediction Model:</strong> Investigated the efficacy of transformer models for stock price prediction. By creating sequences of price data, created trading signals for various stock tickers, with mild success. </li>
      </ul>
      <h4>Physics</h4>
      <ul>  
      <li><strong>Modelling n-body Orbit:</strong> Wrote a Python script to model n-body orbit using numerical integration, testing solution stability and sensitivity to initial conditions.</li>

      </ul>
    </div>
  );
}

export default Projects;


// <li><strong>Digit Recognizer:</strong> Trained a TensorFlow model with a Convolutional Neural Network to recognize digits from the MNIST database.</li>
//         <li><strong>Housing Price Predictor:</strong> Developed a model using Random Forest and ensemble methods to predict housing prices.</li>
//         <li><strong>Titanic Survival Predictor:</strong> Used a Support Vector Classifier and data visualization techniques to predict the survival of passengers on the Titanic.</li>
//         <li><strong>Modelling n-body Orbit:</strong> Wrote a Python script to model n-body orbit using numerical integration, testing solution stability and sensitivity to initial conditions.</li>
