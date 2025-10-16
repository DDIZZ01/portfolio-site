// script.js
document.getElementById('year').textContent = new Date().getFullYear();

// Simple tab activation based on hash
function activateTab() {
  const hash = window.location.hash || '#home';
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === hash);
  });
  document.querySelectorAll('main section').forEach(sec => {
    sec.style.display = ( '#' + sec.id === hash ) ? 'block' : 'none';
  });
}
window.addEventListener('hashchange', activateTab);
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('main section').forEach(sec => sec.style.display = 'none');
  activateTab();
});
