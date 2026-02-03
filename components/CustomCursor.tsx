import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollowerPosition = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1
      }));
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const followerInterval = setInterval(updateFollowerPosition, 16);
    
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearInterval(followerInterval);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [position]);

  return (
    <>
      <div
        className={`cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: position.x - 6,
          top: position.y - 6,
        }}
      />
      <div
        className={`cursor-follower ${isHovering ? 'hover' : ''}`}
        style={{
          left: followerPosition.x - 20,
          top: followerPosition.y - 20,
        }}
      />
    </>
  );
};

export default CustomCursor;