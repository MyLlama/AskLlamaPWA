// public/service-worker.js
const CACHE_NAME = 'my-app-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/app.css', // Add your app's CSS file path
  //'/js/app.js', // Add your app's JS file path
  // Add paths for other assets like images and fonts
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
