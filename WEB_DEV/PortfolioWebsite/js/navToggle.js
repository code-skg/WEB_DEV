const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggleBtn.addEventListener('click', (e) => {
  nav.classList.toggle('show');
  toggleBtn.classList.toggle('active');
  e.stopPropagation(); // Prevent triggering the outside click event
});

// Hide nav when clicking outside
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !toggleBtn.contains(e.target)) {
    nav.classList.remove('show');
    toggleBtn.classList.remove('active');
  }
});
