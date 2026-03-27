'use client';

// CustomCursor keeps the site-specific pointer treatment on non-touch devices.
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [textMode, setTextMode] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    function onMove(event: MouseEvent) {
      mouse.current = { x: event.clientX, y: event.clientY };
    }

    function onDown() {
      setClicking(true);
    }

    function onUp() {
      setClicking(false);
    }

    function onOver(event: MouseEvent) {
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest('a, button, [role="button"], .clickable')));
      setTextMode(Boolean(target.closest('input, textarea, [contenteditable="true"], select')));
    }

    let frame = 0;
    const animate = () => {
      dot.current.x += (mouse.current.x - dot.current.x) * 0.25;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.25;
      follower.current.x += (mouse.current.x - follower.current.x) * 0.12;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${dot.current.x}px`;
        dotRef.current.style.top = `${dot.current.y}px`;
      }

      if (followerRef.current) {
        followerRef.current.style.left = `${follower.current.x}px`;
        followerRef.current.style.top = `${follower.current.y}px`;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div className={`cursor-wrapper ${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''} ${textMode ? 'text-mode' : ''}`}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower" />
    </div>
  );
}
