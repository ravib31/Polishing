const cacheName = "v1";

// call install event
self.addEventListener("install", (e) => {
  console.log("Service worker:Install");
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
self.addEventListener("fetch", (e) => {
  console.log("Service worker:Fetch");
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
