if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/ToolkitPWA/sw.js', { scope: '/ToolkitPWA/' })})}