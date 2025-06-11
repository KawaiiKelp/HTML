const slider = document.getElementById('slider');
const slides = slider.children
const totalSlides = slides.length;
let currentSlide = 0;

function updateSlide() {
    const slideHeight = slides[0].offsetHeight;
    slider.style.transform = `translateY(-${currentSlide * slideHeight}px)`;
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
}, 2000);