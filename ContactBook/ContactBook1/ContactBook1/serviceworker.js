const cacheName = 'v1';
const cacheAssets = [
    '/',
    '/Views/_View.cshtml',
    'README.md'
];


self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log("service worker: caching files");
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    console.log('activated');
});

self.addEventListener('fetch', (e) => {
    console.log('fetch');
    
});

