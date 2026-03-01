// Common slider script used on home page
// Syncs text and image slides together

const imageSlides = document.querySelectorAll('.slider-images .slider-content');
const textSlides = document.querySelectorAll('.slider-text .slider-content');
let slideIndex = 0;

function showSlide(index) {
    // Show image and text at the same index
    imageSlides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    textSlides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// when DOM is ready start the cycle
window.addEventListener('DOMContentLoaded', () => {
    const totalSlides = Math.max(imageSlides.length, textSlides.length);
    if (totalSlides > 0) {
        showSlide(0); // Show first slide
        setInterval(() => {
            slideIndex = (slideIndex + 1) % totalSlides;
            showSlide(slideIndex);
        }, 3000);
    }
});
