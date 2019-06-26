if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('serviceworker.js')
            .then(reg => console.log("service worker registered " + reg))
            .catch(err => console.log("service worker registration failed " + err));
    })

}