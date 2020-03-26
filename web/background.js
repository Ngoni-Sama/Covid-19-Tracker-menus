chrome.runtime.onInstalled.addListener(function() {    // add an action here
 if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('flutter_service_worker.js');
      });
    }
});
