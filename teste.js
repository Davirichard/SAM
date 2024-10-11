const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides; // Looping
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

// To enable touch swiping on mobile
let startX, endX;

document.querySelector('.slider').addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

document.querySelector('.slider').addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;
    if (startX > endX + 50) {
        showSlide(currentIndex + 1); // Swipe left
    } else if (startX < endX - 50) {
        showSlide(currentIndex - 1); // Swipe right
    }
});
