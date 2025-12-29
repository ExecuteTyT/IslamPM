import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const computed = window.getComputedStyle(target);
      setIsPointer(computed.cursor === 'pointer' || target.tagName === 'BUTTON' || target.tagName === 'A');
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  // Hide on touch devices basically via CSS media query, but also return null if easy check
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-green rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 1}px, ${position.y - 1}px) scale(${isPointer ? 4 : 1})`,
        }}
      />
      {/* Trailing ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-neon-green/30 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
