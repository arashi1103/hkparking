const CACHE = 'hk-parking-v1';
const STATIC = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
];

// Install: cache static shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
  );
});

// Activate: remove old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Fetch strategy:
//   - API calls (carpark data) → network first, no cache (live data)
//   - Map tiles               → cache first (tiles rarely change)
//   - Everything else         → cache first, fall back to network
self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Live API — always network, never cache
  if (url.includes('api.data.gov.hk')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Map tiles — cache first (stale-while-revalidate)
  if (url.includes('cartocdn.com') || url.includes('openstreetmap.org')) {
    e.respondWith(
      caches.open(CACHE).then(async cache => {
        const cached = await cache.match(e.request);
        const fetchPromise = fetch(e.request).then(res => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Static shell — cache first
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
