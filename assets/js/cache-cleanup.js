(function () {
  var storageKey = 'zada_almu_min_cache_reset_v1';

  if (localStorage.getItem(storageKey)) {
    return;
  }

  localStorage.setItem(storageKey, '1');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      return Promise.all(registrations.map(function (registration) {
        return registration.unregister();
      }));
    }).catch(function () {});
  }

  if ('caches' in window) {
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        return caches.delete(key);
      }));
    }).catch(function () {});
  }

  var separator = window.location.href.indexOf('?') === -1 ? '?' : '&';
  window.location.replace(window.location.href + separator + 'cache-bust=' + Date.now());
}());
