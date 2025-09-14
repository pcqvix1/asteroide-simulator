const globeEl = document.getElementById('globe-container');

const globe = Globe()(globeEl)
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-day.jpg')
  .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
  .width(window.innerWidth)
  .height(window.innerHeight)
  .autoRotate(false) // Globo parado, só rotaciona com mouse
  .showAtmosphere(true)
  .atmosphereAltitude(0.2);

// Ajustar tamanho ao redimensionar a janela
window.addEventListener('resize', () => {
  globe.width(window.innerWidth);
  globe.height(window.innerHeight);
});
