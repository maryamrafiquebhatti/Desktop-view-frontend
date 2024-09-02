document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.custom-slider-nav.prev');
    const nextButton = document.querySelector('.custom-slider-nav.next');
    const slider = document.querySelector('.custom-picture-cards-slider');
    const slides = document.querySelectorAll('.custom-picture-card');
    let index = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.length - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        index = (index < slides.length - 1) ? index + 1 : 0;
        updateSlider();
    });

    // Initialize the slider
    updateSlider();
});
