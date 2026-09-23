/* ============================================================
   main.js — punto de entrada para páginas "simples"
   (index, sobre-mi, contacto): inyecta nav/footer, activa el
   scroll-reveal y el parallax del avatar (si existe en la página).
   Páginas con lógica propia (proyectos, admin) importan sus
   módulos directamente en vez de usar este archivo.
============================================================ */
import { includeHTML } from './includes.js';
import { initReveal } from './reveal.js';
import { initAvatarParallax } from './avatar.js';

await includeHTML();
initReveal('.reveal');
initAvatarParallax('.avatar-wrap');
