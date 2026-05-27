const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',  // Modifié ici (sans icons/)
  './icon-512.png'   // Modifié ici (sans icons/)
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});