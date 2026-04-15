import { useRef, useEffect } from 'react';

/**
 * Wrap any section in <Reveal> to get a scroll-triggered fade+slide animation.
 * direction: 'up' | 'left' | 'right'
 * delay: milliseconds before the animation fires after the element enters the viewport
 */
export default function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);

  const dirClass = direction === 'left' ? 'reveal-left'
    : direction === 'right' ? 'reveal-right'
    : 'reveal';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </div>
  );
}
