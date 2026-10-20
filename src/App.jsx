import { useEffect, useRef } from 'react';
import { portfolioMarkup } from './portfolio-content';
import './App.css';

export default function App() {
  const contentRef = useRef(null);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    root.classList.add('js-motion');
    const revealItems = root.querySelectorAll('section h2, .project-card, .project-detail, .about, footer, .skill-group');
    revealItems.forEach((item) => item.classList.add('reveal'));

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={contentRef} className="portfolio-root" dangerouslySetInnerHTML={{ __html: portfolioMarkup }} />
  );
}
