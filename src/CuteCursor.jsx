import React, { useEffect, useState } from 'react';
import './CuteCursor.css'; // Create a CSS file for styling
import tedxLogo from './config/works/cursor.png';

const CuteCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => document.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="cute-cursor" style={{ left: position.x, top: position.y }}>
      <img src={tedxLogo} alt="cute cursor" />
    </div>
  );
};

export default CuteCursor;
