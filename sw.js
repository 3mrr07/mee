const CACHE_NAME = 'hme-v7';
const ASSETS = [
  './',
  './index.html',
  './departments/qowa.html',
  './departments/tasmim.html',
  './departments/taqa.html',
  './departments/electron.html',
  './departments/tahakum.html',
  './departments/mechatronics.html',
  './departments/maaden.html',
  './union.html',
  './robotics.html',
  './guide.html',
  './quiz.html',
  './compare.html',
  './css/style.css',
  './js/site-data.js',
  './js/translations.js',
  './js/i18n.js',
  './js/main.js',
  './offline.html',
  './manifest.json',
  './img/favicon.svg',
  './img/icon-192.png',
  './img/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(() => {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match('./offline.html'));
    })
  );
});