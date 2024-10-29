// Evento para exibir a imagem selecionada
document.getElementById('imagemInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagemPreview');
    const cancelarButton = document.getElementById('cancelarImagemButton');

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result; // Define a imagem da pré-visualização
            preview.style.display = 'block'; // Mostra a imagem
            cancelarButton.style.display = 'inline-block'; // Mostra o botão de cancelar
        }

        reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    } else {
        preview.src = ''; // Limpa a pré-visualização se nenhum arquivo for selecionado
        preview.style.display = 'none'; // Esconde a imagem
        cancelarButton.style.display = 'none'; // Esconde o botão de cancelar
    }
});

// Evento para cancelar a imagem selecionada
document.getElementById('cancelarImagemButton').addEventListener('click', function() {
    const imagemInput = document.getElementById('imagemInput');
    const preview = document.getElementById('imagemPreview');
    const cancelarButton = document.getElementById('cancelarImagemButton');

    imagemInput.value = ''; // Limpa o input de arquivo
    preview.src = ''; // Limpa a pré-visualização
    preview.style.display = 'none'; // Esconde a imagem
    cancelarButton.style.display = 'none'; // Esconde o botão de cancelar
});

// Lida com a exibição do conteúdo extra
document.querySelectorAll('.input label').forEach(label => {
    label.addEventListener('click', function(event) {
        // Previne o evento padrão do clique no label
        event.preventDefault();

        // Seleciona o conteúdo extra associado
        const extraInfo = this.nextElementSibling; // Pega o próximo elemento (extra-info)

        // Fecha todos os outros conteúdos extra
        document.querySelectorAll('.extra-info').forEach(extra => {
            if (extra !== extraInfo) {
                extra.style.display = 'none';
                extra.style.opacity = '0'; // Esconde com transição
            }
        });

        // Alterna a visibilidade do conteúdo extra correspondente
        if (extraInfo.style.display === 'block') {
            extraInfo.style.display = 'none';
            extraInfo.style.opacity = '0'; // Esconde com transição
        } else {
            extraInfo.style.display = 'block';
            extraInfo.style.opacity = '1'; // Mostra com transição
        }
    });
});

// Garante que o conteúdo extra fique aberto se o checkbox for marcado
document.querySelectorAll('.extra-info input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const extraInfo = this.closest('.extra-info');
        if (this.checked) {
            extraInfo.style.display = 'block'; // Mantém visível se o checkbox estiver marcado
            extraInfo.style.opacity = '1'; // Mostra com transição
        }
    });
});

// Evento para lidar com o envio do formulário
document.getElementById('comunicadoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const titulo = document.getElementById('titulo').value;
    const corpo = document.getElementById('corpo').value;
    const destinatarios = Array.from(document.getElementById('destinatarios').selectedOptions).map(option => option.value);
    const imagem = document.getElementById('imagemInput').files[0];
    const alerta = document.getElementById('confirmAlerta').checked; // Alerta
    const notificacaoChat = document.getElementById('confirmNotificacaoChat').checked; // Notificação

    // Mensagem de sucesso
    let mensagem = `Comunicação enviada com sucesso!\nTítulo: ${titulo}\nDestinatários: ${destinatarios.join(', ')}`;
    
    if (imagem) {
        mensagem += `\nImagem anexada: ${imagem.name}`;
    }

    if (alerta) {
        mensagem += `\nALERTA IMPORTANTE: Esta comunicação é urgente!`;
    }

    if (notificacaoChat) {
        mensagem += `\nNotificação enviada para o chat.`;
    }

    document.getElementById('mensagem').innerText = mensagem;

    // Limpa o formulário
    document.getElementById('comunicadoForm').reset();
});
