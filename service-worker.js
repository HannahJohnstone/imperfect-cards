self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('imperfect-cards-v1').then(cache => cache.addAll([
    './','./index.html','./manifest.json','./service-worker.js'
  ])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});