// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Loading portfolio...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const textInterval = setInterval(() => {
      setText(prev => {
        if (prev === 'Loading portfolio...') return 'Initializing components...';
        if (prev === 'Initializing components...') return 'Preparing animations...';
        if (prev === 'Preparing animations...') return 'Almost ready...';
        return 'Loading portfolio...';
      });
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="loader-container">
      {/* Animated Background */}
      <div className="loader-bg">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="loader-content">
        {/* Animated Logo */}
        <div className="loader-logo">
          <div className="logo-circle">
            <div className="logo-inner">
              <span className="logo-text">OG</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            <div className="progress-glow" />
          </div>
          <div className="progress-text">
            {text} <span className="progress-percent">{progress}%</span>
          </div>
        </div>

        {/* Loading Tips */}
        <div className="loading-tips">
          <div className="tip">
            <i className="fas fa-lightbulb tip-icon"></i>
            <span className="tip-text">Tip: Check out my AI skills section</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
