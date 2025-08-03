'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('body::after');
    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
      document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
    };

    const handleMouseEnter = () => {
      document.body.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
      document.body.classList.remove('cursor-hover');
    };

    // Add mouse move listener
    document.addEventListener('mousemove', updateCursor);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return null;
}
