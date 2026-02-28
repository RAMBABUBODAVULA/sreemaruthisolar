// Common slider script used on home page

const imageSlides = document.querySelectorAll('.slider-images .slider-content');
const textSlides = document.querySelectorAll('.slider-text .slider-content');
let imageIndex = 0;
let textIndex = 0;

function showSlide(slides, index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide(slides, index) {
    return (index + 1) % slides.length;
}

function showImageSlide() {
    showSlide(imageSlides, imageIndex);
    imageIndex = nextSlide(imageSlides, imageIndex);
}

function showTextSlide() {
    showSlide(textSlides, textIndex);
    textIndex = nextSlide(textSlides, textIndex);
}

// when DOM is ready start the cycles
window.addEventListener('DOMContentLoaded', () => {
    if (imageSlides.length && textSlides.length) {
        setInterval(showImageSlide, 3000);
        setInterval(showTextSlide, 3000);
        showImageSlide();
        showTextSlide();
    }
});