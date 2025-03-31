document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.querySelector(".cart-icon");
    const cartPanel = document.getElementById("cartPanel");
    const cartCloseBtn = document.getElementById("cartCloseBtn");
    const cartCounter = document.getElementById("cartCounter");
    const cartTotal = document.getElementById("cartTotal");
    const cartItems = document.getElementById("cartItems");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    let cart = [];

    // 购物车图标点击显示购物车
    cartIcon.addEventListener("click", function() {
        cartPanel.style.display = "block";
    });

    // 关闭购物车
    cartCloseBtn.addEventListener("click", function() {
        cartPanel.style.display = "none";
    });

    // 添加商品到购物车
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = this.getAttribute("data-product-id");
            cart.push(productId);
            updateCart();
        });
    });

    // 更新购物车
    function updateCart() {
        cartCounter.textContent = cart.length;
        cartTotal.textContent = cart.length;
        cartItems.innerHTML = cart.length > 0 ? cart.map(id => `<p>商品 ${id}</p>`).join("") : "<div class='empty-cart'>您还没有将任何商品加入购物车</div>";
    }
});
