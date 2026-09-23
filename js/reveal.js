/* ============================================================
   MÓDULO: reveal.js
   Anima con un fundido cualquier elemento con clase ".reveal"
   cuando entra en pantalla. Usa IntersectionObserver: el
   navegador avisa solo cuándo un elemento es visible, sin que
   nosotros calculemos scroll manualmente en cada frame.

   "export" hace que initReveal esté disponible para otros
   archivos que hagan "import { initReveal } from './reveal.js'"
============================================================ */
export function initReveal(selector = '.reveal', staggerMs = 80) {
  const elements = document.querySelectorAll(selector);

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('is-visible'), i * staggerMs);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}
