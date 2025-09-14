// Seleciona o container
const globeEl = document.getElementById('globe-container');

// Inicializa o globo
const GlobeInstance = Globe()(globeEl)
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-day.jpg')
  .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
  .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
  .showAtmosphere(true)
  .atmosphereAltitude(0.2)
  .autoRotate(false)  // Globo parado, gira só com mouse
  .width(window.innerWidth)
  .height(window.innerHeight);

// Ajusta tamanho ao redimensionar a janela
window.addEventListener('resize', () => {
  GlobeInstance.width(window.innerWidth);
  GlobeInstance.height(window.innerHeight);
});
