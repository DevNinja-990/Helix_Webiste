document.addEventListener('mousemove', (e) => {
  const glow = document.getElementById('glow');
  glow.style.setProperty('--x', `${e.clientX}px`);
  glow.style.setProperty('--y', `${e.clientY}px`);
});
