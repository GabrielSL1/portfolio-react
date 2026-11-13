import { useEffect, useRef, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const footer = document.querySelector('footer');
    const update = () => {
      frame = 0;
      setVisible(window.scrollY > Math.max(320, window.innerHeight * 0.6));
      // Keep the control above the footer's links, including on small screens.
      const clearance = footer ? window.innerHeight - footer.getBoundingClientRect().top + 16 : 20;
      buttonRef.current?.style.setProperty('--back-top-bottom', `${Math.max(20, clearance)}px`);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;
    if (footer) observer?.observe(footer);
    update();
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer?.disconnect();
    };
  }, []);

  const returnToTop = () => {
    // Move keyboard focus out of a control that is about to disappear.
    document.getElementById('inicio')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };

  return <button ref={buttonRef} type="button" className={`back-to-top${visible ? ' is-shown' : ''}`}
    onClick={returnToTop} tabIndex={visible ? 0 : -1} aria-hidden={!visible}
    aria-label="Voltar ao início" title="Voltar ao início">
    <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 10 6-6 6 6M12 4v16" /></svg>
  </button>;
}
