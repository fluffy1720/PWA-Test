self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/main.css", "./images/rw192.png"]);
        })
    );
});

self.addEventListener("fetch", e  =>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fech(e.request);
        })
    );
});