window.addEventListener('DOMContentLoaded', () => {
  console.log("Mile Board Mini PRO Loaded");
  const style = document.createElement('style');
  style.innerHTML = `
    body { zoom: 0.8; overflow: hidden; -webkit-app-region: drag; }
    button { -webkit-app-region: no-drag; }
  `;
  document.head.appendChild(style);
});
