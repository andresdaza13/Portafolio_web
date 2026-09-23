/* ============================================================
   MÓDULO: avatar.js
   El parpadeo y la flotación del avatar ya están en CSS
   (animations.css) porque son animaciones constantes: CSS es
   más eficiente para eso, el navegador las optimiza solo.

   Aquí en JS solo manejamos lo que SÍ depende de una acción del
   usuario: que el avatar "mire" hacia el cursor (parallax sutil).
   Es la diferencia clave: CSS para lo automático, JS para lo
   que responde a interacción.
============================================================ */
export function initAvatarParallax(selector = '.avatar-wrap', maxOffset = 8) {
  const wrap = document.querySelector(selector);
  if (!wrap) return;

  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  let ticking = false;

  document.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetX = ((e.clientX - cx) / cx) * maxOffset;
    targetY = ((e.clientY - cy) / cy) * maxOffset;
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  });

  function update() {
    // Interpolación suave (easing) hacia el punto objetivo, en vez
    // de saltar directo: se siente más natural.
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    wrap.style.transform = `translate(${currentX}px, ${currentY}px)`;
    ticking = false;
  }
}
