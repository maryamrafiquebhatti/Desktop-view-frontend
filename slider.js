document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    // Function to update slider position and dots
    function updateSlider() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        const offset = -currentIndex * slideWidth;
        slider.style.transform = `translateX(${offset}px)`;
        updateDots();
    }

    // Function to update dot styles
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Event listener for previous button
    document.querySelector('.slider-nav.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });

    // Event listener for next button
    document.querySelector('.slider-nav.next').addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Initialize slider
    updateSlider(); // Initial call to set the correct position and dots
});
