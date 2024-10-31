// Função para alternar a exibição do conteúdo extra de confirmação
function toggleInfoExtra(type) {
    const infoExtraAlerta = document.getElementById('infoExtraAlerta');
    const infoExtraChat = document.getElementById('infoExtraChat');
    
    if (type === 'alerta') {
      // Alterna a visibilidade do conteúdo extra do alerta e oculta o do chat
      infoExtraAlerta.style.display = infoExtraAlerta.style.display === 'block' ? 'none' : 'block';
      infoExtraChat.style.display = 'none'; 
      document.getElementById('confirmAlerta').checked = false; // Reseta a confirmação do alerta
    } else if (type === 'chat') {
      // Alterna a visibilidade do conteúdo extra do chat e oculta o do alerta
      infoExtraChat.style.display = infoExtraChat.style.display === 'block' ? 'none' : 'block';
      infoExtraAlerta.style.display = 'none'; 
      document.getElementById('confirmChat').checked = false; // Reseta a confirmação do chat
    }
  }
  
  // Função para pré-visualizar a imagem selecionada
  function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = URL.createObjectURL(event.target.files[0]);
    imagePreview.style.display = 'block';
  }
  
  // Script principal para gerenciar a navegação entre etapas
  document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;
    
    // Mostra a primeira etapa ao carregar
    steps[currentStep].classList.add('active');
  
    // Adiciona eventos de clique aos rótulos de Alerta e Chat para exibir o conteúdo extra
    document.querySelector('label[for="alerta"]').addEventListener('click', function() {
      toggleInfoExtra('alerta');
    });
    document.querySelector('label[for="chat"]').addEventListener('click', function() {
      toggleInfoExtra('chat');
    });
  
    // Avançar para a próxima etapa
    document.querySelectorAll('.next').forEach(button => {
      button.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
          steps[currentStep].classList.remove('active');
          currentStep++;
          steps[currentStep].classList.add('active');
        }
      });
    });
  
    // Voltar para a etapa anterior
    document.querySelectorAll('.back').forEach(button => {
      button.addEventListener('click', () => {
        if (currentStep > 0) {
          steps[currentStep].classList.remove('active');
          currentStep--;
          steps[currentStep].classList.add('active');
        }
      });
    });
  
    // Submissão do formulário
    document.getElementById('comunicadoForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Comunicado publicado com sucesso!');
    });
  });
  