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

const searchBox = document.querySelector('.header__search');
const searchInput = searchBox.querySelector('.header__input');
const toggleIcon = searchBox.querySelector('.header__icon');

// Função para abrir/fechar o search box
toggleIcon.addEventListener('click', () => {
    if (searchBox.classList.contains('expanded')) {
        searchBox.classList.remove('expanded');
        searchInput.value = ''; // Limpa o campo ao fechar
        searchInput.style.display = 'none'; // Oculta o input
        toggleIcon.style.transform = 'rotate(0deg)'; // Reseta a rotação do ícone
    } else {
        searchBox.classList.add('expanded');
        searchInput.style.display = 'block'; // Exibe o input ao expandir
        searchInput.focus(); // Coloca o cursor no input
    }
});

// Fechar o search ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target) && searchBox.classList.contains('expanded')) {
        searchBox.classList.remove('expanded');
        searchInput.value = ''; // Limpa o campo ao fechar
        searchInput.style.display = 'none'; // Oculta o input
        toggleIcon.style.transform = 'rotate(0deg)'; // Reseta a rotação do ícone
    }
});
