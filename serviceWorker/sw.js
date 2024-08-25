const cacheName = "v1";

const cacheAssets = ["Index.html", "About.html", "/js/main.js"];
// call install event
self.addEventListener("install", (e) => {
  console.log("Service worker:Install");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service worker:Cache open");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// call Activated event
self.addEventListener("install", (e) => {
  console.log("Service worker:Activated");
  // remove unwanted cache
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("server worker:clearing old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// call Fetch Event
self.addEventListener("fetch", e => {
  console.log("Service worker:Fetch");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
