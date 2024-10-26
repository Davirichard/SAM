// Evento para exibir a imagem selecionada
document.getElementById('imagem').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagemPreview');
    const cancelarButton = document.getElementById('cancelarImagem');

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
document.getElementById('cancelarImagem').addEventListener('click', function() {
    const imagemInput = document.getElementById('imagem');
    const preview = document.getElementById('imagemPreview');
    const cancelarButton = document.getElementById('cancelarImagem');

    imagemInput.value = ''; // Limpa o input de arquivo
    preview.src = ''; // Limpa a pré-visualização
    preview.style.display = 'none'; // Esconde a imagem
    cancelarButton.style.display = 'none'; // Esconde o botão de cancelar
});

// Evento para lidar com o envio do formulário
document.getElementById('comunicadoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const titulo = document.getElementById('titulo').value;
    const corpo = document.getElementById('corpo').value;
    const destinatarios = Array.from(document.getElementById('destinatarios').selectedOptions).map(option => option.value);
    const imagem = document.getElementById('imagem').files[0];
    const alerta = document.getElementById('alerta').checked;
    const notificacaoChat = document.getElementById('notificacaoChat').checked;

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
