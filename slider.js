document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    const showSlide = (index) => {
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100; // Move slide container
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    };

    document.querySelector('.slider-nav.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    document.querySelector('.slider-nav.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    showSlide(currentSlide); // Initialize
});
// slider.js

document.addEventListener('DOMContentLoaded', () => {
    const mainSlider = document.getElementById('main-slider');
    const customSlider = document.getElementById('custom-slider');
    const mainDots = document.getElementById('dots-main').children;
    const customDots = document.getElementById('dots-custom').children;
    const mainPrev = document.getElementById('prev-main');
    const mainNext = document.getElementById('next-main');
    const customPrev = document.getElementById('prev-custom');
    const customNext = document.getElementById('next-custom');
    let mainIndex = 0;
    let customIndex = 0;

    function updateSlider(slider, dots, index) {
        const slides = slider.children;
        const slideWidth = slides[0].getBoundingClientRect().width;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;

        for (const dot of dots) {
            dot.classList.remove('active');
        }
        dots[index].classList.add('active');
    }

    function moveSlide(slider, dots, direction) {
        const slides = slider.children;
        if (direction === 'next') {
            mainIndex = (mainIndex + 1) % slides.length;
            customIndex = (customIndex + 1) % slides.length;
        } else {
            mainIndex = (mainIndex - 1 + slides.length) % slides.length;
            customIndex = (customIndex - 1 + slides.length) % slides.length;
        }
        updateSlider(slider, dots, direction === 'next' ? mainIndex : customIndex);
    }

    mainPrev.addEventListener('click', () => moveSlide(mainSlider, mainDots, 'prev'));
    mainNext.addEventListener('click', () => moveSlide(mainSlider, mainDots, 'next'));
    customPrev.addEventListener('click', () => moveSlide(customSlider, customDots, 'prev'));
    customNext.addEventListener('click', () => moveSlide(customSlider, customDots, 'next'));

    // Initial update
    updateSlider(mainSlider, mainDots, mainIndex);
    updateSlider(customSlider, customDots, customIndex);
});
