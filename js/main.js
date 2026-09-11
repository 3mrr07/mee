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

// --- Mobile Nav Menu ---
function toggleNavMenu() {
  const nav = document.getElementById('topbar-nav');
  if (nav) nav.classList.toggle('open');
}

function closeNavMenu() {
  const nav = document.getElementById('topbar-nav');
  if (nav) nav.classList.remove('open');
}

// --- Active Nav State ---
function initActiveNav() {
  function normalize(path) {
    return decodeURIComponent(path).replace(/\/+/g, '/').replace(/\/+$/, '') || '/index.html';
  }
  var current = normalize(location.pathname);
  document.querySelectorAll('.topbar-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.indexOf('#') > -1) return;
    var resolved = normalize(new URL(href, location.href).pathname);
    if (resolved === current ||
        (current === '/index.html' && resolved === '/') ||
        (resolved === '/index.html' && current === '/')) {
      link.classList.add('active');
    }
  });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  const theme = initTheme();
  updateThemeIcon(theme);
  initActiveNav();
  document.querySelectorAll('.topbar-nav a').forEach((link) => {
    link.addEventListener('click', closeNavMenu);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.topbar, .topbar-nav')) closeNavMenu();
  });
  requestAnimationFrame(initScrollAnimations);
});

// --- PWA Service Worker ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}