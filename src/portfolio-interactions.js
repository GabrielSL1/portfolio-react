// Progressive enhancement: original navigation and full skills grid remain the base layout.
export function setupPortfolioInteractions(root) {
  if (!root) return;
  const nav = root.querySelector('.top .nav-links');
  const header = root.querySelector('.top');
  if (!nav || !header) return;

  root.classList.add('js-interactions');
  const compact = window.matchMedia('(max-width: 800px)');
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

  return () => {
    menu.removeEventListener('click', onToggle);
    nav.removeEventListener('click', onNavClick);
    document.removeEventListener('pointerdown', onOutside);
    document.removeEventListener('keydown', onEscape);
    compact.removeEventListener('change', onBreakpoint);
    menu.remove();
    nav.hidden = false;
    nav.removeAttribute('id');
    root.classList.remove('js-interactions');
  };
}
