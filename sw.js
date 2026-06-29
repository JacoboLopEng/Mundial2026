self.addEventListener('push', e => {
  let title = '⚽ Mundial 2026';
  let body = '¡Tienes novedades en la porra!';
  try {
    const data = e.data ? e.data.json() : {};
    title = data.title || title;
    body = data.body || body;
  } catch(err) {}
  e.waitUntil(self.registration.showNotification(title, {
    body: body,
    icon: '/Mundial2026/icon.png',
    badge: '/Mundial2026/icon.png',
    vibrate: [200, 100, 200]
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/Mundial2026/'));
});
