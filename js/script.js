// 分类对应图片数据
const categories = {
    new: [
        '../images/展示区/L1.jpeg',
        '../images/展示区/L2.jpeg',
        '../images/展示区/L3.jpeg',
        '../images/展示区/L4.jpeg'
    ]
};

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
    const offset = -currentIndex * (760); // 图片宽度+margin
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


// ...（前面的分类和轮播代码保持不变）...

// 🟢 修改：初始化购物车数据
let cartItems = [];
const cartCounter = document.getElementById('cartCounter');

// 🟢 修改：商品数据对象
const products = {
    "C1": {
        name: "Street Style Color Block Sweatshirt",
        price: 299,
        image: "../images/C1.jpeg"
    },
    "C2": {
        name: "Denim Couple Streetwear Set",
        price: 599,
        image: "../images/C2.jpeg"
    }
};

// 🟢 修改：购物车图标点击事件
document.querySelector('.cart-container').addEventListener('click', (e) => {
    e.stopPropagation();
    const panel = document.getElementById('cartPanel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    updateCartUI(); // 🟢 每次打开都刷新内容
});

// 🟢 新增：关闭按钮点击事件
document.getElementById('cartCloseBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('cartPanel').style.display = 'none';
});

// 🟢 修改：添加购物车功能
document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const productId = `C${index + 1}`;
        const product = products[productId];
        
        cartItems.push({
            id: Date.now(),
            ...product
        });
        
        updateCartUI();
        
        // 保持浮窗打开状态
        document.getElementById('cartPanel').style.display = 'block';
    });
});

// 🟢 修改：更新购物车UI（完整实现）
function updateCartUI() {
    const counter = document.getElementById('cartCounter');
    const itemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // 更新计数器
    counter.textContent = cartItems.length;
    counter.style.display = cartItems.length ? 'block' : 'none';
    cartTotal.textContent = cartItems.length; // 🟢 更新标题中的数量
    
    // 更新浮窗内容
    if(cartItems.length === 0) {
        itemsContainer.innerHTML = '<div class="empty-cart">您还没有将任何商品加入购物车</div>';
    } else {
        itemsContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" width="50" height="50" style="object-fit: cover">
                <div style="flex:1; padding:0 10px">
                    <div>${item.name}</div>
                    <div style="color:#666">¥${item.price}</div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">移除</button>
            </div>
        `).join('');
    }
    
    // 🟢 新增：为所有移除按钮绑定事件
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.getAttribute('data-id'));
            cartItems = cartItems.filter(item => item.id !== itemId);
            updateCartUI();
        });
    });
    
    // 动画效果
    if(cartItems.length > 0) {
        counter.style.transform = 'scale(1.2)';
        setTimeout(() => counter.style.transform = 'scale(1)', 200);
    }
}

const checkoutButton = document.createElement('button');
checkoutButton.textContent = "结算";
checkoutButton.className = "checkout-btn";
checkoutButton.style.display = "none";
checkoutButton.addEventListener("click", () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "checkout.html";
});

document.getElementById("cartPanel").appendChild(checkoutButton);

// 修改 updateCartUI 以控制结算按钮显示
function updateCartUI() {
    const counter = document.getElementById('cartCounter');
    const itemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    counter.textContent = cartItems.length;
    counter.style.display = cartItems.length ? 'block' : 'none';
    cartTotal.textContent = cartItems.length;
    
    if (cartItems.length === 0) {
        itemsContainer.innerHTML = '<div class="empty-cart">您还没有将任何商品加入购物车</div>';
        checkoutButton.style.display = "none";
    } else {
        itemsContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" width="50" height="50">
                <div style="flex:1; padding:0 10px">
                    <div>${item.name}</div>
                    <div style="color:#666">¥${item.price}</div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">移除</button>
            </div>
        `).join('');
        checkoutButton.style.display = "block";
    }
    
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.getAttribute('data-id'));
            cartItems = cartItems.filter(item => item.id !== itemId);
            updateCartUI();
        });
    });
}

// 初始渲染
document.addEventListener("DOMContentLoaded", () => {
    renderSlider(currentCategory); // 🟢 页面加载时自动渲染轮播图
});

// 🟢 修改：初始化调用updateCartUI
updateCartUI();

// ...（后面的初始渲染代码保持不变）...

// 初始化隐藏小红点
updateCartCounter();


