// 分类对应图片数据和按钮样式配置
const categoriesWithStyles = {
    new: [
        {
            image: '../images/展示区/L5S.png',
            productId: 'L5S',
            buttonStyle: {
                bottom: '40px',
                left: '20%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0,0,0,0.9)',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '0'
            }
        },
        {
            image: '../images/展示区/L6S.png',
            productId: 'L6S',
            buttonStyle: {
                bottom: '55%',
                left: '20px',
                transform: 'none',
                backgroundColor: 'rgba(20,20,20,0.9)',
                color: '#f8f8f8',
                padding: '10px 25px'
            }
        },
        {
            image: '../images/展示区/L9.jpeg',
            productId: 'L9',
            buttonStyle: {
                top: '80%',
                left: '5%',
                transform: 'none',
                backgroundColor: 'rgba(20,20,20,0.9)',
                color: '#f8f8f8',
                padding: '10px 25px'
            }
        },
        {
            image: '../images/展示区/L8.jpeg',
            productId: 'L8',
            buttonStyle: {
                top: '80%',
                left: '70%',
                transform: 'none',
                backgroundColor: 'rgba(20,20,20,0.9)',
                color: '#f8f8f8',
                padding: '10px 25px'
            }
        }
    ]
};

// 商品数据
const products = {
    "C1": { name: "Street Style Color Block Sweatshirt", price: 299, image: "../images/C1.jpeg" },
    "C2": { name: "Denim Couple Streetwear Set", price: 599, image: "../images/C2.jpeg" },
    "L5S": { name: "Best-seller Suit for Lady", price: 999, image: "../images/展示区/L5S.jpeg" },
    "L6S": { name: "Best-seller suit for gentlemen", price: 899, image: "../images/展示区/L6S.png" },
    "L9": { name: "Limited Edition Fur Coat", price: 799, image: "../images/展示区/L9.jpeg" },
    "L8": { name: "Fashion Suit Set", price: 699, image: "../images/展示区/L8.jpeg" }
};

const slider = document.getElementById('slider');
let currentIndex = 0;
let currentCategory = 'new';
let cartItems = [];

const cartCounter = document.getElementById('cartCounter');
const cartPanel = document.getElementById('cartPanel');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

// 结算按钮
const checkoutButton = document.createElement('button');
checkoutButton.textContent = "Checkout";
checkoutButton.className = "checkout-btn";
checkoutButton.style.display = "none";
checkoutButton.addEventListener("click", () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "checkout.html";
});
cartPanel.appendChild(checkoutButton);

// 渲染轮播
function renderSlider(category) {
    slider.innerHTML = '';
    categoriesWithStyles[category].forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';

        const img = document.createElement('img');
        img.src = item.image;

        const addBtn = document.createElement('button');
        addBtn.className = 'slider-add-btn';
        addBtn.textContent = 'ADD TO CART';

        // 样式
        Object.keys(item.buttonStyle).forEach(property => {
            addBtn.style[property] = item.buttonStyle[property];
        });

        // 点击事件
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const product = products[item.productId];
            if (product) {
                cartItems.push({ id: Date.now(), ...product });
                updateCartUI();
                cartPanel.style.display = 'block';
            }
        });

        slide.appendChild(img);
        slide.appendChild(addBtn);
        slider.appendChild(slide);
    });
    currentIndex = 0;
    updateSlider();
}

// 更新轮播位置
function updateSlider() {
    const offset = -currentIndex * 760;
    slider.style.transform = `translateX(${offset}px)`;
}

// 更新购物车UI
function updateCartUI() {
    cartCounter.textContent = cartItems.length;
    cartCounter.style.display = cartItems.length ? 'block' : 'none';
    cartTotal.textContent = cartItems.length;
    checkoutButton.style.display = cartItems.length ? 'block' : 'none';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">You have not put anything in the cart.</div>';
    } else {
        cartItemsContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" width="50" height="50">
                <div style="flex:1; padding:0 10px">
                    <div>${item.name}</div>
                    <div style="color:#666">¥${item.price}</div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">Remove</button>
            </div>
        `).join('');
    }

    // 绑定删除
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.getAttribute('data-id'));
            cartItems = cartItems.filter(item => item.id !== itemId);
            updateCartUI();
        });
    });

    // 动画
    if (cartItems.length > 0) {
        cartCounter.style.transform = 'scale(1.3)';
        setTimeout(() => cartCounter.style.transform = 'scale(1)', 200);
    }
}

// 左右按钮
document.querySelector('.prev-btn')?.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});
document.querySelector('.next-btn')?.addEventListener('click', () => {
    if (currentIndex < categoriesWithStyles[currentCategory].length - 1) {
        currentIndex++;
        updateSlider();
    }
});

// 购物车浮窗开关
document.querySelector('.cart-container').addEventListener('click', (e) => {
    e.stopPropagation();
    cartPanel.style.display = cartPanel.style.display === 'block' ? 'none' : 'block';
    updateCartUI();
});
document.getElementById('cartCloseBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    cartPanel.style.display = 'none';
});

// 初始化
document.addEventListener("DOMContentLoaded", () => {
    renderSlider(currentCategory);
    updateCartUI();
});
// 绑定商品展示区的按钮
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const productId = button.getAttribute('data-product-id');
        const product = products[productId];
        if (product) {
            cartItems.push({ id: Date.now(), ...product });
            updateCartUI();
            cartPanel.style.display = 'block';
        }
    });
});
