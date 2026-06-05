'use client';

/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useRef, useState } from 'react';
import './hero-video.css';
import { WhatsAppButton } from './whatsapp-button';

type Src = {
  webm: string;
  mp4: string;
  poster: string;
  lastFrame: string;
} | null;

export function HeroVideo() {
  const [src, setSrc] = useState<Src>(null);
  const [ready, setReady] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frozenRef = useRef(false);
  const fallbackRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const maxTimeRef = useRef(0);

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection ?? {};
    const stingy = conn.saveData === true || /2g/.test(conn.effectiveType ?? '');
    const isMobile = matchMedia('(max-width: 820px)').matches;

    if (reduce || stingy) {
      setSrc({
        webm: '',
        mp4: '',
        poster: isMobile ? '/hero/hero-mobile-poster.jpg' : '/hero/hero-poster.jpg',
        lastFrame: isMobile ? '/hero/hero-last-mobile.jpg' : '/hero/hero-last-desktop.jpg',
      });
      setFrozen(true);
      return;
    }

    setSrc(
      isMobile
        ? {
            webm: '/hero/hero-mobile.webm',
            mp4: '/hero/hero-mobile.mp4',
            poster: '/hero/hero-mobile-poster.jpg',
            lastFrame: '/hero/hero-last-mobile.jpg',
          }
        : {
            webm: '/hero/hero-desktop.webm',
            mp4: '/hero/hero-desktop.mp4',
            poster: '/hero/hero-poster.jpg',
            lastFrame: '/hero/hero-last-desktop.jpg',
          }
    );
  }, []);

  const freeze = useCallback((video: HTMLVideoElement) => {
    if (frozenRef.current) return;
    frozenRef.current = true;
    video.pause();
    if (fallbackRef.current) clearTimeout(fallbackRef.current);
    setFrozen(true);
    console.log(`[HERO] congelado no último frame em ${video.currentTime.toFixed(3)}s`);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src?.webm) return;

    // (a) Assert: vídeo NÃO deve ter loop
    if (video.loop) {
      video.loop = false;
      console.warn('[HERO] AVISO: atributo loop detectado no mount — removido.');
    }

    const handleFreeze = () => freeze(video);

    const setupFallback = () => {
      if (fallbackRef.current) clearTimeout(fallbackRef.current);
      if (isFinite(video.duration) && video.duration > 0) {
        const remaining = (video.duration - video.currentTime + 1) * 1000;
        fallbackRef.current = setTimeout(handleFreeze, remaining);
      }
    };

    // (b) timeupdate — detecta regressão após quase-fim
    const onTimeUpdate = () => {
      if (!isFinite(video.duration) || video.duration <= 0) return;
      if (video.currentTime > maxTimeRef.current) {
        maxTimeRef.current = video.currentTime;
      }
      const nearEnd = maxTimeRef.current >= video.duration - 0.3;
      const regressed = video.currentTime < maxTimeRef.current - 0.5;
      if (nearEnd && regressed) {
        console.warn(
          `[HERO] ERRO: vídeo tentou voltar (${video.currentTime.toFixed(3)}s < max ${maxTimeRef.current.toFixed(3)}s)`
        );
        handleFreeze();
      }
    };

    // (c) Fallback via loadedmetadata
    const onLoadedMetadata = () => setupFallback();

    const onEnded = () => handleFreeze();

    video.addEventListener('ended', onEnded);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);

    // Se metadados já disponíveis no mount
    if (isFinite(video.duration) && video.duration > 0) {
      setupFallback();
    }

    return () => {
      if (fallbackRef.current) clearTimeout(fallbackRef.current);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, [src, freeze]);

  const hasVideo = Boolean(src?.webm);

  return (
    <section id="inicio" className="hero">
      {/* Poster SSR / antes do src client-side */}
      {!src && (
        <picture className="hero__poster">
          <source media="(max-width: 820px)" srcSet="/hero/hero-mobile-poster.jpg" />
          <img
            src="/hero/hero-poster.jpg"
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
        </picture>
      )}

      {/* Vídeo: toca uma única vez */}
      {hasVideo && (
        <video
          ref={videoRef}
          className={`hero__video${ready ? ' is-ready' : ''}`}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={src!.poster}
          onLoadedData={() => setReady(true)}
        >
          <source src={src!.webm} type="video/webm" />
          <source src={src!.mp4} type="video/mp4" />
        </video>
      )}

      {/* Overlay do frame final — fade-in 300ms ao congelar */}
      {src && (
        <img
          className={`hero__last-frame${frozen ? ' is-visible' : ''}`}
          src={src.lastFrame}
          alt=""
          aria-hidden="true"
        />
      )}

      {/* Camadas cinematográficas */}
      <div className="hero__grad-side" />
      <div className="hero__grad-vert" />
      <div className="hero__glow" />
      <div className="hero__vignette" />
      <div className="hero__grain" />

      {/* Conteúdo da hero */}
      <div className="hero__content">
        <span className="hero__tag">
          Tradução Juramentada · Rápido (24–48h) · Aceitamos PIX
        </span>

        <h1 className="hero__title">
          Seu documento traduzido <em>certo</em>
          <span className="hero__title-sub">— sem retrabalho, sem perder prazo.</span>
        </h1>

        <p className="hero__sub">
          Tradução juramentada oficial para a Itália — CNH, diplomas,
          certidões, permesso di soggiorno, cidadania e mais. Aceita em toda a Itália.
          Do primeiro contato até a entrega, tudo resolvido em português.
        </p>

        <div className="hero__cta-wrapper">
          <WhatsAppButton className="hero__cta">
            <svg className="hero__cta-wa" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar meu documento agora →
          </WhatsAppButton>
          <p className="hero__cta-microcopy">Resposta rápida pelo WhatsApp</p>
        </div>

        <div className="hero__trust">
          <div>
            <b><i>★</i> 4,9</b>
            <span>Média em avaliações</span>
          </div>
          <i className="hero__div" />
          <div>
            <b>+1.000</b>
            <span>Documentos traduzidos</span>
          </div>
          <i className="hero__div" />
          <div>
            <b>+5 Anos</b>
            <span>De experiência dedicada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
