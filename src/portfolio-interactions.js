// Progressive enhancement: original navigation and full skills grid remain the base layout.
export function setupPortfolioInteractions(root) {
  if (!root) return;
  const nav = root.querySelector('.top .nav-links');
  const header = root.querySelector('.top');
  const track = root.querySelector('.skills-grid');
  if (!nav || !header || !track) return;

  root.classList.add('js-interactions');
  const compact = window.matchMedia('(max-width: 800px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const menu = document.createElement('button');
  menu.type = 'button';
  menu.className = 'menu-toggle';
  menu.textContent = 'Menu';
  menu.setAttribute('aria-controls', 'primary-navigation');
  nav.id = 'primary-navigation';
  header.insertBefore(menu, nav);

  const setMenu = (open, restoreFocus = false) => {
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Fechar menu' : 'Menu';
    nav.hidden = compact.matches && !open;
    if (restoreFocus) menu.focus();
  };
  const onToggle = () => setMenu(menu.getAttribute('aria-expanded') !== 'true');
  const onBreakpoint = () => {
    const focusedLink = nav.contains(document.activeElement);
    setMenu(false, compact.matches && focusedLink);
  };
  const onNavClick = (event) => {
    if (event.target.closest('a') && compact.matches) setMenu(false, true);
  };
  const onOutside = (event) => {
    if (compact.matches && !header.contains(event.target)) setMenu(false);
  };
  const onEscape = (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      setMenu(false, true);
    }
  };
  menu.addEventListener('click', onToggle);
  nav.addEventListener('click', onNavClick);
  document.addEventListener('pointerdown', onOutside);
  document.addEventListener('keydown', onEscape);
  compact.addEventListener('change', onBreakpoint);
  setMenu(false);

  const cards = [...track.querySelectorAll('.skill-group')];
  const toolbar = document.createElement('div');
  toolbar.className = 'skills-controls';
  const status = document.createElement('span');
  status.className = 'skills-position';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  status.setAttribute('aria-atomic', 'true');
  const controls = document.createElement('div');
  controls.className = 'skills-buttons';
  const createArrow = (label, symbol) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'carousel-button';
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-controls', 'skills-carousel');
    button.textContent = symbol;
    return button;
  };
  const previous = createArrow('Habilidades anteriores', '←');
  const next = createArrow('Próximas habilidades', '→');
  controls.append(previous, next);
  toolbar.append(status, controls);
  track.before(toolbar);
  track.id = 'skills-carousel';
  track.classList.add('skills-carousel');
  track.setAttribute('role', 'region');
  track.setAttribute('aria-roledescription', 'carrossel');
  track.setAttribute('aria-label', 'Habilidades');
  track.tabIndex = 0;
  cards.forEach((card, index) => {
    card.setAttribute('role', 'group');
    card.setAttribute('aria-roledescription', 'slide');
    card.setAttribute('aria-label', `${card.querySelector('h3').textContent.trim()}, ${index + 1} de ${cards.length}`);
  });

  const step = () => cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth;
  const update = () => {
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
    const start = Math.max(0, Math.round(track.scrollLeft / step()));
    const visible = Math.max(1, Math.round(track.clientWidth / step()));
    const end = Math.min(cards.length, start + visible);
    status.textContent = `${start + 1}${end > start + 1 ? `–${end}` : ''} de ${cards.length}`;
  };
  const moveTo = (left) => track.scrollTo({ left, behavior: reduced.matches ? 'instant' : 'smooth' });
  const goPrevious = () => moveTo(track.scrollLeft - step());
  const goNext = () => moveTo(track.scrollLeft + step());
  const onKeys = (event) => {
    if (event.target !== track) return;
    if (event.key === 'ArrowLeft') goPrevious();
    else if (event.key === 'ArrowRight') goNext();
    else if (event.key === 'Home') moveTo(0);
    else if (event.key === 'End') moveTo(track.scrollWidth);
    else return;
    event.preventDefault();
  };
  let scrollTimer;
  const onScroll = () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(update, 100);
  };
  previous.addEventListener('click', goPrevious);
  next.addEventListener('click', goNext);
  track.addEventListener('keydown', onKeys);
  track.addEventListener('scroll', onScroll, { passive: true });
  track.addEventListener('scrollend', update);
  window.addEventListener('resize', update);
  const resize = typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null;
  resize?.observe(track);
  update();

  return () => {
    clearTimeout(scrollTimer);
    resize?.disconnect();
    menu.removeEventListener('click', onToggle);
    nav.removeEventListener('click', onNavClick);
    document.removeEventListener('pointerdown', onOutside);
    document.removeEventListener('keydown', onEscape);
    compact.removeEventListener('change', onBreakpoint);
    window.removeEventListener('resize', update);
    previous.removeEventListener('click', goPrevious);
    next.removeEventListener('click', goNext);
    track.removeEventListener('keydown', onKeys);
    track.removeEventListener('scroll', onScroll);
    track.removeEventListener('scrollend', update);
    menu.remove();
    toolbar.remove();
    nav.hidden = false;
    nav.removeAttribute('id');
    track.classList.remove('skills-carousel');
    for (const attr of ['id', 'role', 'aria-roledescription', 'aria-label', 'tabindex']) track.removeAttribute(attr);
    cards.forEach(card => {
      for (const attr of ['role', 'aria-roledescription', 'aria-label']) card.removeAttribute(attr);
    });
    root.classList.remove('js-interactions');
  };
}
