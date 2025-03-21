// 分类对应图片数据
const categories = {
    new: [
        'images/1.jpeg',
        'images/2.jpeg',
        'images/3.jpeg',
        'images/4.jpeg'
    ],
    hot: [
        'images/5.jpeg',
        'images/6.jpeg',
        'images/7.jpeg',
        'images/8.jpeg'
    ]
};

const categoryItems = document.querySelectorAll('.category-item');
const slider = document.getElementById('slider');
let currentIndex = 0;
let currentCategory = 'new'; // 默认类别

// 渲染当前类别的图片
function renderSlider(category) {
    slider.innerHTML = '';
    categories[category].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        slider.appendChild(img);
    });
    currentIndex = 0;
    updateSlider();
}

// 更新滑动位置
function updateSlider() {
    const offset = -currentIndex * (300 + 20); // 图片宽度+margin
    slider.style.transform = `translateX(${offset}px)`;
}

// 左右按钮事件
document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentIndex < categories[currentCategory].length - 1) {
        currentIndex++;
        updateSlider();
    }
});

// 悬停切换类别
categoryItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const category = e.target.getAttribute('data-category');
        if (category !== currentCategory) {
            currentCategory = category;
            renderSlider(category);
        }
    });
});

// 初始渲染
renderSlider(currentCategory);
