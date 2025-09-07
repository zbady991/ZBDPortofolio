"use client";
import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const el = document.querySelector(a.getAttribute('href') || '');
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    };
    document.addEventListener('click', clickHandler);

    const revealEls = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('reveal-in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));

    const topBtn = document.getElementById('backToTop');
    const scrollHandler = () => { if (topBtn) topBtn.style.display = window.scrollY > 400 ? 'block' : 'none'; };
    window.addEventListener('scroll', scrollHandler);
    topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    return () => {
      document.removeEventListener('click', clickHandler);
      window.removeEventListener('scroll', scrollHandler);
      revealEls.forEach((el) => io.unobserve(el));
      io.disconnect();
    };
  }, []);

  return null;
}


