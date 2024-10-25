document.addEventListener("DOMContentLoaded", function() {
  // Conta o número de cards existentes
  const cardWrapper = document.querySelector('.card-wrapper');
  const numberOfCards = cardWrapper.querySelectorAll('.card').length;

  // Função para aplicar os estilos para menos de 3 cards
  function applyCustomStyles() {
    const cards = document.querySelectorAll('.card');

    if (numberOfCards === 1) {
      // Caso haja 1 card, ele deve ser centralizado
      cards.forEach(card => {
        card.style.maxWidth = '300px'; // Define a largura máxima
        card.style.margin = '10px auto'; // Centraliza o card com margem automática
      });
      cardWrapper.style.display = 'flex';
      cardWrapper.style.justifyContent = 'center'; // Centraliza o único card
      cardWrapper.style.flexDirection = 'column'; // Garante que o card esteja em coluna
    } else if (numberOfCards === 2) {
      // Caso haja 2 cards, centralizamos os dois cards
      cards.forEach(card => {
        card.style.width = '45%'; // Largura menor para os dois cards
        card.style.margin = '10px';
      });
      cardWrapper.style.display = 'flex';
      cardWrapper.style.justifyContent = 'center'; // Centraliza os dois cards
    } else {
      // Caso haja 3 ou mais cards
      cards.forEach(card => {
        card.style.width = '30%';
        card.style.margin = '10px';
      });
      cardWrapper.style.display = 'flex';
      cardWrapper.style.justifyContent = 'space-between'; // Mantém o comportamento anterior
    }

    // Responsividade: ao reduzir a tela, os cards ficam um abaixo do outro
    window.addEventListener('resize', function() {
      if (window.innerWidth <= 768) {
        cards.forEach(card => {
          card.style.width = '100%'; // Largura 100%
          card.style.margin = '10px 0'; // Margem entre os cards
        });
        cardWrapper.style.flexDirection = 'column'; // Coloca os cards em coluna
        cardWrapper.style.justifyContent = 'center'; // Centraliza cards em coluna
      } else {
        cardWrapper.style.flexDirection = 'row'; // Volta ao layout original

        // Ajusta os estilos dependendo do número de cards
        if (numberOfCards === 1) {
          cards.forEach(card => {
            card.style.width = '100%';
            card.style.margin = '10px 0';
          });
          cardWrapper.style.justifyContent = 'center'; // Centraliza o único card
        } else if (numberOfCards === 2) {
          cards.forEach(card => {
            card.style.width = '45%';
            card.style.margin = '10px';
          });
        } else {
          cards.forEach(card => {
            card.style.width = '30%';
            card.style.margin = '10px';
          });
        }
      }
    });

    // Configuração inicial para telas menores
    if (window.innerWidth <= 768) {
      cards.forEach(card => {
        card.style.width = '100%';
        card.style.margin = '10px 0';
      });
      cardWrapper.style.flexDirection = 'column'; // Cards ficam um abaixo do outro
      cardWrapper.style.justifyContent = 'center'; // Centraliza em coluna
      cardWrapper.style.alignItems = 'center'; // Garante que os cards estão alinhados ao centro
    }
  }

  // Função para remover os estilos personalizados
  function removeCustomStyles() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.width = ''; // Remove a largura personalizada
      card.style.margin = ''; // Remove a margem personalizada
    });
    cardWrapper.style.display = ''; // Remove o display flex aplicado
    cardWrapper.style.justifyContent = ''; // Remove o justify-content
    cardWrapper.style.flexWrap = ''; // Remove o flex-wrap
    cardWrapper.style.flexDirection = ''; // Remove o flexDirection aplicado
    cardWrapper.style.alignItems = ''; // Remove alinhamento
  }

  // Se houver mais de 3 cards, inicializa o Swiper normalmente
  if (numberOfCards > 3) {
    removeCustomStyles(); // Remove qualquer estilo dinâmico aplicado

    var swiper = new Swiper(".slider-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  } else {
    // Aplicar estilos especiais para menos de 3 cards
    applyCustomStyles();

    // Esconder botões de navegação e paginação
    document.querySelector('.swiper-button-next').style.display = 'none';
    document.querySelector('.swiper-button-prev').style.display = 'none';
    document.querySelector('.swiper-pagination').style.display = 'none';
  }
});

