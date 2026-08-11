const ACADEMY_CACHE = "academy-of-the-future-v1";
const ACADEMY_FILES = ["./akademia-buducnosti.html", "./akademia-buducnosti.css", "./akademia-buducnosti.js", "../style.css"];
self.addEventListener("install", (event) => { event.waitUntil(caches.open(ACADEMY_CACHE).then((cache) => cache.addAll(ACADEMY_FILES))); self.skipWaiting(); });
self.addEventListener("activate", (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (event) => { if (event.request.method !== "GET") return; event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request))); });
