import { useRef, useEffect } from 'react';

export const useMagnetic = () => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Radius of influence
      const radius = 100;

      if (distance < radius) {
        // Strength of magnetic pull
        const strength = 18;
        const x = (distanceX / radius) * strength;
        const y = (distanceY / radius) * strength;

        el.style.transform = `translate(${x}px, ${y}px)`;
        // Optional: add a class to the cursor for interactive state if needed
      } else {
        el.style.transform = `translate(0px, 0px)`;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = `translate(0px, 0px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};
