document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.custom-slider-nav.prev');
    const nextButton = document.querySelector('.custom-slider-nav.next');
    const slider = document.querySelector('.custom-picture-cards-slider');
    let index = 0;

    function updateSlider() {
        const slides = document.querySelectorAll('.custom-picture-card');
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        index--;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        index++;
        updateSlider();
    });

    // Initialize slider
    updateSlider();
});
