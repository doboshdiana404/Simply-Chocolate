// const slider = document.querySelector('.rewiews-list');
// const slides = document.querySelectorAll('.rewiews-item');
// const nextButton = document.getElementById('next');
// const prevButton = document.getElementById('prev');
// let currentIndex = 0;

// function updateSliderPosition() {
//   slider.style.transform = `translateX(-${currentIndex * 335}px)`;
// }

// nextButton.addEventListener('click', () => {
//   if (currentIndex < slides.length - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0; // Повернення на перший слайд
//   }
//   updateSliderPosition();
// });

// prevButton.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//   } else {
//     currentIndex = slides.length - 1; // Переход до останнього слайду
//   }
//   updateSliderPosition();
// });

document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('scrollContainer');
    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3; // Множник для пришвидшення скролу
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('touchend', () => {
        isDown = false;
    });

    scrollContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3; // Множник для пришвидшення скролу
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});