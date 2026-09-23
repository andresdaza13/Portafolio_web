/* ============================================================
   includes.js
   Inyecta partials/nav.html y partials/footer.html donde
   encuentre [data-include="..."]. Evita repetir el mismo <nav>
   en 5 archivos distintos: un solo lugar para editarlo.
============================================================ */
export async function includeHTML() {
  const nodes = document.querySelectorAll('[data-include]');
  await Promise.all(Array.from(nodes).map(async (el) => {
    const res = await fetch(el.getAttribute('data-include'));
    el.outerHTML = res.ok ? await res.text() : '';
  }));
}
