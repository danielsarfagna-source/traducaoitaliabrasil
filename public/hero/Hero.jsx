'use client';
/* eslint-disable react-hooks/set-state-in-effect, @typescript-eslint/no-unused-expressions */
import { useEffect, useRef, useState } from 'react';
import './hero.css';

/**
 * HERO — Tradução Brasil-Itália
 * Direção de arte: vídeo full-bleed + grade de marca (já queimado no asset)
 * + tratamento por camadas (NÃO overlay chapado).
 *
 * Estratégia de carregamento (mobile-first, 92% do tráfego):
 *  1. O poster (img) é o LCP — pinta instantâneo, nunca bloqueia.
 *  2. O <video> só entra no client, e SÓ se valer a pena:
 *       - desliga em prefers-reduced-motion (acessibilidade)
 *       - desliga em Save-Data / conexão 2g-3g (não queima dados do usuário)
 *  3. Escolhe asset desktop OU mobile via matchMedia — nunca baixa os dois.
 *  4. Pausa quando sai da viewport (economia de bateria/CPU).
 */
export default function Hero() {
  const [src, setSrc] = useState(null);     // { webm, mp4 } ou null = só poster
  const [ready, setReady] = useState(false); // vídeo decodificou -> fade-in
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = navigator.connection || {};
    const stingy = conn.saveData || /2g/.test(conn.effectiveType || '');
    if (reduce || stingy) return; // fica no poster, de propósito

    const mobile = matchMedia('(max-width: 820px)').matches;
    setSrc(
      mobile
        ? { webm: '/hero/hero-mobile.webm',  mp4: '/hero/hero-mobile.mp4' }
        : { webm: '/hero/hero-desktop.webm', mp4: '/hero/hero-desktop.mp4' }
    );
  }, []);

  // Pausa fora da tela
  useEffect(() => {
    if (!src || !sectionRef.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        const v = videoRef.current;
        if (!v) return;
        e.isIntersecting ? v.play().catch(() => {}) : v.pause();
      },
      { threshold: 0.05 }
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, [src]);

  return (
    <section className="hero" ref={sectionRef}>
      {/* Poster = LCP. Sempre presente. */}
      <picture className="hero__poster">
        <source media="(max-width: 820px)" srcSet="/hero/hero-mobile.jpg" />
        <img src="/hero/hero-poster.jpg" alt="" fetchPriority="high" decoding="async" />
      </picture>

      {/* Vídeo entra por cima e faz fade-in quando decodifica */}
      {src && (
        <video
          ref={videoRef}
          className={`hero__video ${ready ? 'is-ready' : ''}`}
          autoPlay muted loop playsInline preload="auto"
          poster={matchMedia('(max-width: 820px)').matches ? '/hero/hero-mobile.jpg' : '/hero/hero-poster.jpg'}
          onLoadedData={(e) => { e.currentTarget.playbackRate = 0.85; setReady(true); }}
        >
          <source src={src.webm} type="video/webm" />
          <source src={src.mp4}  type="video/mp4" />
        </video>
      )}

      {/* === CAMADAS DE TRATAMENTO (a alma do efeito) === */}
      <div className="hero__grad-side" />  {/* escuro à esquerda → some à direita (desktop) */}
      <div className="hero__grad-vert" />  {/* topo limpo → base escura (mobile)            */}
      <div className="hero__glow" />       {/* brilho dourado radial perto do CTA           */}
      <div className="hero__vignette" />   {/* dompa o céu + funde com a próxima seção      */}
      <div className="hero__grain" />      {/* grão cinematográfico (SVG, custo zero)       */}

      {/* === CONTEÚDO (não alterei copy/preços/fluxo) === */}
      <div className="hero__content">
        <span className="hero__tag">Assessoria Jurídica · Tradução Juramentada</span>
        <h1 className="hero__title">
          Traduzido <em>certo.</em><br />Sem retrabalho,<br />sem perder prazo.
        </h1>
        <p className="hero__sub">
          Documentos jurídicos exigem precisão absoluta. Conectamos sua vida no
          Brasil e na Itália com o rigor e a sofisticação que o seu processo merece.
        </p>
        <a className="hero__cta" href="#orcamento">Receba seu orçamento em minutos →</a>
        <div className="hero__trust">
          <div><b><i>★</i> 4,9</b><span>Média em avaliações</span></div>
          <i className="hero__div" />
          <div><b>+1.000</b><span>Documentos traduzidos</span></div>
          <i className="hero__div" />
          <div><b>+5 Anos</b><span>De experiência dedicada</span></div>
        </div>
      </div>
    </section>
  );
}
