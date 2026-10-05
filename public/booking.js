document.querySelectorAll('[data-demo-placement]').forEach(link => link.addEventListener('click', () => {
 if (navigator.globalPrivacyControl || navigator.doNotTrack === '1') return;
 try { navigator.sendBeacon?.('/api/events', JSON.stringify({event:'demo_click',placement:link.dataset.demoPlacement})); } catch {}
}));
