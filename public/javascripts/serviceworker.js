var currentCache = 'demo-cache';
self.addEventListener('install', event => {
  event.waitUntil(
  caches.open(currentCache).then(function(cache) {
  console.log("Adding content to cache.");
  return cache.addAll([
  '../views/index_offline.ejs',
  '/stylesheets/style.css'
  ]);
  })
  );
});


self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(error => {
        console.log("Page unavailable. Returning offline content.");
        return caches.match('../views/index_offline.ejs');
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
  );
  }
});

this.addEventListener('activate', event => {
  var activeCaches = [currentCache];
  console.log("Service worker activated. Checking cache is up-to-date.");
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (activeCaches.indexOf(key) === -1) {
          console.log("Deleting old cache " + key);
          return caches.delete(key);
        }
      }));
    })
  );
});
