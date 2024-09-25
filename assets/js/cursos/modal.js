function toggleModal(event) {
    const currentModal = event.target.closest('.menu-opition').querySelector('.modal');
    
    // Fecha todas as modais
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => {
        if (modal !== currentModal) {
            modal.style.display = 'none';
        }
    });

    // Alterna a visibilidade da modal atual
    currentModal.style.display = currentModal.style.display === 'block' ? 'none' : 'block';
}

function closeModal(event) {
    const modal = event.target.closest('.modal');
    modal.style.display = 'none';
}

function editCourse() {
    alert("Editar curso");
    // Aqui você pode adicionar a lógica para editar o curso
}

function deleteCourse() {
    alert("Deletar curso");
    // Aqui você pode adicionar a lógica para deletar o curso
}
