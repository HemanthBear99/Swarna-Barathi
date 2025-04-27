const CACHE_NAME = 'swarnabarathi-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.PNG',
  '/placeholder.svg',
  '/robots.txt',
  '/sitemap.xml',
];

// Install service worker and cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app shell');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Log the request URL for debugging
  console.log('Fetching:', event.request.url);

  // Normalize the URL to handle both localhost and IP address
  const url = new URL(event.request.url);
  const normalizedUrl = new URL(
    url.pathname + url.search,
    self.location.origin
  );
  const normalizedRequest = new Request(normalizedUrl, event.request);

  event.respondWith(
    caches.match(normalizedRequest).then((response) => {
      // Cache hit - return response
      if (response) {
        console.log('Cache hit for:', normalizedUrl.toString());
        return response;
      }

      console.log('Cache miss for:', normalizedUrl.toString());

      // Clone the request because it's a stream that can only be consumed once
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then((response) => {
          // Check if we received a valid response
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            console.log('Invalid response for:', normalizedUrl.toString());
            return response;
          }

          // Clone the response because it's a stream that can only be consumed once
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching new response for:', normalizedUrl.toString());
            cache.put(normalizedRequest, responseToCache);
          });

          return response;
        })
        .catch((error) => {
          console.error('Fetch error:', error);
          // Return a fallback response if needed
          return new Response('Network error occurred', { status: 503 });
        });
    })
  );
});
