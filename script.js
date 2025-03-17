// 获取相关元素
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// 更新滑动位置
function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

// 下一张
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

// 上一张
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

// 自动播放
let slideInterval = setInterval(nextSlide, 3000);

// 点击按钮切换
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

// 用户手动切换后，重置自动播放时间
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}
