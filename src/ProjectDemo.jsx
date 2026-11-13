import { useEffect, useRef, useState } from 'react';
import { mediaPath } from './project-media';

export default function ProjectDemo({ title, site, video, poster, posterAlt, captions, description, posterKind = 'logo', posterWidth = 640, posterHeight = 480 }) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  useEffect(() => {
    const player = videoRef.current;
    if (!player) return;
    // Playback is user initiated. Reduced motion never starts a recording automatically.
    const pauseWhenHidden = () => { if (document.hidden) player.pause(); };
    const observer = typeof IntersectionObserver === 'function'
      ? new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) player.pause(); })
      : null;
    observer?.observe(player);
    document.addEventListener('visibilitychange', pauseWhenHidden);
    return () => {
      player.pause();
      observer?.disconnect();
      document.removeEventListener('visibilitychange', pauseWhenHidden);
    };
  }, [video, failed]);

  return <figure className="project-demo" aria-label={`Demonstração do ${title}`}>
    <div className={`demo-stage${!video || failed ? ` demo-fallback${posterKind === 'screenshot' ? ' demo-screenshot' : ''}` : ''}`}>
      {video && !failed ? <video ref={videoRef} controls muted loop playsInline preload="none"
        poster={mediaPath(poster)} aria-label={`Vídeo demonstrando o ${title}`} onError={() => setFailed(true)}>
        <source src={mediaPath(video)} type="video/mp4" onError={() => setFailed(true)} />
        {captions && <track src={mediaPath(captions)} kind="captions" srcLang="pt-BR" label="Português" default />}
        Seu navegador não suporta vídeo HTML5.
      </video> : posterFailed ? <span className="demo-text-fallback">{title}</span>
        : <a href={site} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${title} no site`}>
          <img className="flow-logo" src={mediaPath(poster)} alt={posterAlt} loading="lazy" decoding="async"
            width={posterWidth} height={posterHeight} onError={() => setPosterFailed(true)} /></a>}
    </div>
    <figcaption>
      <p>{video && !failed ? description || 'Demonstração real da aplicação. Reprodução sem som.'
        : failed ? 'Não foi possível carregar o vídeo. Você pode conhecer a aplicação pelo link “Abrir site”.'
          : 'A gravação da aplicação ainda não foi adicionada. Enquanto isso, conheça o projeto pelo link “Abrir site”.'}</p>
    </figcaption>
  </figure>;
}
