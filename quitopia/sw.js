// Minimal service worker so the site can be installed as a home-screen app.
// Always goes to the network, so new deploys show up immediately.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
