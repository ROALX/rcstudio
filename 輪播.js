// script.js
let slideIndex = 0;
const slides = document.querySelectorAll('.rectangle-container');
const dotsContainer = document.querySelector('.carousel-dots');
const dots = [];

// 创建轮播点
slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
    dots.push(dot);
});

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    slideIndex = index;
}

function autoSlide() {
    const numSlidesToShow = 3; // 每次滑动三个新闻
    slideIndex = (slideIndex + numSlidesToShow) % slides.length;
    showSlide(slideIndex);
}

// 设置定时器来自动播放
setInterval(autoSlide, 8000); // 8秒切换一次

// 初始显示第一组幻灯片
showSlide(slideIndex);



