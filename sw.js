const CACHE_NAME = 'differ-v3.22-offline';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    // External Dependencies (CDNs)
    'https://unpkg.com/react@18/umd/react.production.min.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    'https://unpkg.com/diff@5.1.0/dist/diff.min.js',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// 1. Install Service Worker & Cache Assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting(); // Activate immediately
});

// 2. Activate & Clean Up Old Caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.map((k) => {
                if (k !== CACHE_NAME) {
                    return caches.delete(k);
                }
            })
        ))
    );
    self.clients.claim(); // Take control of open tabs
});

// 3. Fetch Strategy: Cache First, Fallback to Network
self.addEventListener('fetch', (e) => {
    // Skip cross-origin POST requests (like API calls to Ollama/OpenAI)
    if (e.request.method !== 'GET') return;

    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request).catch(() => {
                // Optional: Return offline fallback here if needed
            });
        })
    );
});