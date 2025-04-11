let currentIndex = 0;

function mover(direcao) {
  const carrossel = document.querySelector('.carrossel');
  const banners = document.querySelectorAll('.banner');
  const totalBanners = banners.length;
  const bannersVisiveis = 4;

  currentIndex += direcao;

  // Limitar o índice para evitar ultrapassar os banners
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > totalBanners - bannersVisiveis) {
    currentIndex = totalBanners - bannersVisiveis;
  }

  const deslocamento = currentIndex * (banners[0].offsetWidth + 20); // Largura + margem
  carrossel.style.transform = `translateX(-${deslocamento}px)`;
}
