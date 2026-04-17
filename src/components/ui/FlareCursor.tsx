'use client';

import React, { useEffect, useState } from 'react';

const FlareCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Skip cursor on touch/mobile devices (pointer: coarse = touchscreen)
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(
      window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
    );
  };

  useEffect(() => {
    if (isTouchDevice) return;
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  const flareSize = isPointer ? 0 : 5;

  const cursorStyle = isPointer ? { left: '-100px', top: '-100px' } : {};

  return (
    <div
      className={`flare ${isPointer ? 'pointer' : ''}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`
      }}
    ></div>
  );
};

export default FlareCursor;
