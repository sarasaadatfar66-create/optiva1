// OPTIVA Vision - Shared Utilities & Error Guard
(function() {
  // Gracefully suppress benign environment WebSocket errors in preview iframe
  window.addEventListener('error', function(event) {
    var msg = (event && event.message) ? event.message : '';
    if (msg.indexOf('WebSocket') !== -1 || msg.indexOf('vite') !== -1 || msg.indexOf('transport') !== -1) {
      if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
      if (typeof event.preventDefault === 'function') event.preventDefault();
      return true;
    }
  }, true);

  window.addEventListener('unhandledrejection', function(event) {
    var reason = (event && event.reason) ? (event.reason.message || String(event.reason)) : '';
    if (reason.indexOf('WebSocket') !== -1 || reason.indexOf('vite') !== -1 || reason.indexOf('transport') !== -1) {
      if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
      if (typeof event.preventDefault === 'function') event.preventDefault();
      return true;
    }
  }, true);

  // Global mobile menu toggle helper
  window.toggleMobileMenu = function() {
    var drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) {
      drawer.classList.toggle('hidden');
      drawer.classList.toggle('flex');
    }
  };
})();
