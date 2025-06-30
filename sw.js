const CACHE_NAME = 'clicker-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png',
  './music/bg.mp3',
  './images/cat.png',
  './images/dog.png',
  './images/grandma.png',
  './images/alien.png',
  './images/auto.png',
  './images/upgrade.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});