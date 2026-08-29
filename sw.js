/* ================================================
   AppFX Service Worker — Offline-first PWA
   ================================================ */

const CACHE_NAME  = 'appfx-v1';
const CACHE_URLS  = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap',
];

/* ---------- INSTALL: pre-cache recursos ---------- */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

/* ---------- ACTIVATE: limpiar caches viejos ------ */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ---------- FETCH: cache-first strategy ---------- */
self.addEventListener('fetch', e => {
  // Solo GET
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      return fetch(e.request)
        .then(res => {
          // Cachear respuestas válidas (no opacas)
          if (res && res.status === 200 && res.type !== 'opaque') {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => {
          // Offline fallback para navegación
          if (e.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

/* ---------- MENSAJE: forzar actualización -------- */
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
