if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/nintendo-switch/sw.js', { scope: '/nintendo-switch/' })})}