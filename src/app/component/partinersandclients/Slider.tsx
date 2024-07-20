/*import React from 'react';

type sliding = {
  children: React.ReactNode;
  animation?: 'from-left' | 'from-right';
  className?: string;
}

const Slider: React.FC<sliding> = ({ children, animation = 'from-left', className }) => {
  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ease-in-out ${className} ${
        animation === 'from-left' ? 'transform translate-x-full' : 'transform translate-x-full lg:translate-x-0'
      }`}
    >
      {children}
    </div>
  );
};

export default Slider;

*/

"use client";
import React, { useState, useEffect } from 'react';

interface MarqueeProps {
  children: React.ReactNode; // Content to display in the marquee
  speed: number; // Animation speed in milliseconds (e.g., 5000 for 5 seconds)
  direction: 'left' | 'right'; // Marquee direction (default: 'left')
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed, direction = 'left' }) => {
  const [marqueeWidth, setMarqueeWidth] = useState(0); // State to store marquee width

  useEffect(() => {
    // Calculate marquee width on component mount or text change
    const marqueeElement = document.querySelector('.marquee-inner');
    if (marqueeElement) {
      setMarqueeWidth(marqueeElement.scrollWidth);
    }
  }, [children]);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`marquee-inner flex items-center text-white ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {children}
        {children} {/* Duplicate content for seamless scrolling */}
      </div>
    </div>
  );
};

export default Marquee;