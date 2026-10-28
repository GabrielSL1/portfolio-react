import { useEffect, useRef } from 'react';
import { portfolioMarkup } from './portfolio-content';
import { setupPortfolioInteractions } from './portfolio-interactions';
import './design.css';
import './App.css';

export default function App() {
  const contentRef = useRef(null);

  useEffect(() => setupPortfolioInteractions(contentRef.current), []);

  useEffect(() => {
    const root = contentRef.current;
    const progress = root?.querySelector('.led-progress');
    const header = root?.querySelector('.top');
    if (!progress || !header) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${distance > 0 ? Math.min(100, Math.max(0, window.scrollY / distance * 100)) : 0}%`;
      document.documentElement.style.setProperty('--header-offset', `${header.getBoundingClientRect().height + 24}px`);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const resize = typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;
    resize?.observe(header);
    resize?.observe(root);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      window.cancelAnimationFrame(frame);
      resize?.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.documentElement.style.removeProperty('--header-offset');
    };
  }, []);

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
