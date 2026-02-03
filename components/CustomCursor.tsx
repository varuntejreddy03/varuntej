import React, { useEffect, useRef, useState } from 'react';
import './../cursor.css';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTextMode, setIsTextMode] = useState(false);

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    if (isTouchDevice) return;

    // Add class to hide real cursor
    document.documentElement.classList.add('custom-cursor-active');

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Interactive elements
      const isInteractive = target.closest('a, button, [role="button"], .clickable');
      setIsHovering(!!isInteractive);

      // Text elements
      const isText = target.closest('input, textarea, [contenteditable="true"]');
      setIsTextMode(!!isText);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    // Animation loop
    let requestRef: number;

    const animate = () => {
      // Linear interpolation (lerp) for smooth movement
      // Dot follows quickly
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.25;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.25;

      // Follower follows with more lag
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }

      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`;
        followerRef.current.style.top = `${followerPos.current.y}px`;
      }

      requestRef = requestAnimationFrame(animate);
    };

    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.documentElement.classList.remove('custom-cursor-active');
      cancelAnimationFrame(requestRef);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className={`cursor-wrapper ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} ${isTextMode ? 'text-mode' : ''}`}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </div>
  );
};

export default CustomCursor;