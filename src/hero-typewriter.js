// Keep the original words in the layout and accessibility tree throughout typing.
export function setupHeroTypewriter(root) {
  const target = root?.querySelector('[data-typewriter]');
  if (!target) return;

  const text = target.textContent;
  if (!text.trim()) return;
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const loopPause = 1500;
  let timer;
  let running = false;
  const bounds = target.getBoundingClientRect();
  let visible = bounds.bottom > 0 && bounds.top < window.innerHeight;

  const stop = () => {
    running = false;
    window.clearTimeout(timer);
    target.classList.remove('is-typing');
    target.textContent = text;
  };

  const start = () => {
    if (running) return;
    running = true;
    const words = [];
    const fragment = document.createDocumentFragment();
    for (const part of text.split(/(\s+)/)) {
      if (!part.trim()) {
        fragment.append(document.createTextNode(part));
        continue;
      }
      const word = document.createElement('span');
      word.className = 'typewriter-word';
      const reserve = document.createElement('span');
      reserve.className = 'typewriter-reserve';
      reserve.textContent = part;
      const output = document.createElement('span');
      output.className = 'typewriter-output';
      output.setAttribute('aria-hidden', 'true');
      word.append(reserve, output);
      fragment.append(word);
      words.push({ output, characters: Array.from(part) });
    }
    target.replaceChildren(fragment);
    target.classList.add('is-typing');

    let wordIndex = 0;
    let characterIndex = 0;
    const restart = () => {
      words.forEach(({ output }) => {
        output.textContent = '';
        output.classList.remove('is-current');
      });
      wordIndex = 0;
      characterIndex = 0;
      type();
    };
    const type = () => {
      const word = words[wordIndex];
      word.output.classList.add('is-current');
      word.output.textContent += word.characters[characterIndex++];
      if (characterIndex === word.characters.length) {
        if (wordIndex === words.length - 1) {
          word.output.classList.remove('is-current');
          timer = window.setTimeout(restart, loopPause);
          return;
        }
        word.output.classList.remove('is-current');
        wordIndex++;
        characterIndex = 0;
      }
      timer = window.setTimeout(type, 65);
    };
    timer = window.setTimeout(type, 350);
  };

  const sync = () => {
    if (motion.matches || document.hidden || !visible) stop();
    else start();
  };
  const observer = typeof IntersectionObserver === 'function'
    ? new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    })
    : null;
  observer?.observe(target);
  motion.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
  sync();
  return () => {
    observer?.disconnect();
    stop();
    motion.removeEventListener('change', sync);
    document.removeEventListener('visibilitychange', sync);
  };
}
