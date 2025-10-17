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

 fetch('https://u4s9egb3h5.execute-api.us-east-1.amazonaws.com/prod/visitor-count')
  .then(response => response.json())
  .then(data => {
    console.log('Visitor count response:', data); // Add this line
    document.getElementById('visitor-count').textContent = data.count ?? 'N/A';
  })
  .catch(error => {
    console.error('Error fetching visitor count:', error);
    document.getElementById('visitor-count').textContent = 'N/A';
  });

});
