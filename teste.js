const headerImg = document.getElementById('header-img');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

// Função para abrir o modal
headerImg.addEventListener('click', () => {
  modal.style.display = 'flex';
  modal.style.top = `${headerImg.offsetHeight}px`; // Ajusta a posição
});

// Função para fechar o modal
closeBtn.addEventListener('click', () => {
  modal.style.top = '100%'; // Volta para fora da tela
  setTimeout(() => (modal.style.display = 'none'), 500); // Esconde após animação
});
