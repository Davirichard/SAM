// Seleção dos elementos
const notificationToggle = document.getElementById('notification-toggle');
const notificationContent = document.getElementById('notification-content');
const profileToggle = document.getElementById('profile-toggle');
const profileContent = document.getElementById('profile-content');

// Função para abrir/fechar um dropdown com animação
function toggleDropdown(content) {
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        setTimeout(() => (content.style.display = 'none'), 400); // Fecha após a animação
    } else {
        content.style.display = 'block';
        setTimeout(() => content.classList.add('show'), 10); // Animação suave
    }
}

// Fechar todos os dropdowns
function closeAllDropdowns() {
    notificationContent.classList.remove('show');
    profileContent.classList.remove('show');
    notificationContent.style.display = 'none';
    profileContent.style.display = 'none';
}

// Abrir/fechar dropdown de notificações
notificationToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(notificationContent);
    profileContent.classList.remove('show');
    profileContent.style.display = 'none';
});

// Abrir/fechar dropdown de perfil
profileToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(profileContent);
    notificationContent.classList.remove('show');
    notificationContent.style.display = 'none';
});

// Fechar ao clicar fora
document.addEventListener('click', closeAllDropdowns);

