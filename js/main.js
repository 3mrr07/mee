/* ============================================================
   HME Website - Main JavaScript (theme + nav + animations)
   ============================================================ */

// --- Theme (Dark/Light Mode) ---
function initTheme() {
  const saved = localStorage.getItem('theme');
  const theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '&#9790;' : '&#9728;';
    btn.setAttribute('aria-label', theme === 'dark' ? tr('theme.darkAria') : tr('theme.lightAria'));
  }
}

// --- Scroll Animations ---
let __obs = null;
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate-in').forEach((el) => el.classList.add('visible'));
    return;
  }
  if (__obs) __obs.disconnect();
  __obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.animate-in:not(.visible)').forEach((el) => __obs.observe(el));
}

// --- Smooth Scroll to Section ---
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// --- Active Nav State ---
function initActiveNav() {
  const path = location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.topbar-actions a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.replace(/\/+$/, '') === path) link.classList.add('active');
  });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  const theme = initTheme();
  updateThemeIcon(theme);
  initActiveNav();
  requestAnimationFrame(initScrollAnimations);
});

// --- PWA Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}