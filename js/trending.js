document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.querySelector(".cart-icon");
    const cartPanel = document.getElementById("cartPanel");
    const cartCloseBtn = document.getElementById("cartCloseBtn");
    const cartCounter = document.getElementById("cartCounter");
    const cartTotal = document.getElementById("cartTotal");
    const cartItems = document.getElementById("cartItems");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    let cart = [];

    // cart icon (need unify!)
    cartIcon.addEventListener("click", function() {
        cartPanel.style.display = "block";
    });

    cartCloseBtn.addEventListener("click", function() {
        cartPanel.style.display = "none";
    });

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = this.getAttribute("data-product-id");
            cart.push(productId);
            updateCart();
        });
    });

    function updateCart() {
        cartCounter.textContent = cart.length;
        cartTotal.textContent = cart.length;
        cartItems.innerHTML = cart.length > 0 ? cart.map(id => `<p>商品 ${id}</p>`).join("") : "<div class='empty-cart'>您还没有将任何商品加入购物车</div>";
    }
});
