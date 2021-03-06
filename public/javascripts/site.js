if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./javascripts/serviceworker.js', {scope: './javascripts/'}).then(function(registration) {
      console.log("Service worker registered successfully.");
    }, function(error) {
      console.log("Error registering service worker: " + error);
    });
  });
}
