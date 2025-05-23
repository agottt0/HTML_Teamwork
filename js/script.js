// classify pics and btns
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

// product info (if u want something available for cart panel, add its info here)
const products = {
    "D1": { name: "Power Suit · The Art of Command", price: 499, image: "../images/D1.jpeg" },
    "D2": { name: "Silhouette · The Poetry of Power", price: 799, image: "../images/D2.jpeg" },
    "D3": { name: "Metropolitan Maverick · The Rebel in Refinement", price: 599 , image: "../images/D3.jpeg" },
    "D4": { name: "Urban Statesman · The Contemporary Classic", price: 649, image: "../images/D4.jpeg" },
    "L5S": { name: "Best-seller Suit for Lady", price: 999, image: "../images/展示区/L5S.png" },
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

// check out btn
const checkoutButton = document.createElement('button');
checkoutButton.textContent = "Checkout";
checkoutButton.className = "checkout-btn";
checkoutButton.style.display = "none";
checkoutButton.addEventListener("click", () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "checkout.html";
});
cartPanel.appendChild(checkoutButton);

// render slider
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

        // style
        Object.keys(item.buttonStyle).forEach(property => {
            addBtn.style[property] = item.buttonStyle[property];
        });

        // on click:
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

// update the pos of the slider
function updateSlider() {
    const offset = -currentIndex * 760;
    slider.style.transform = `translateX(${offset}px)`;
}

// update cart ui
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

    // remove 
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(btn.getAttribute('data-id'));
            cartItems = cartItems.filter(item => item.id !== itemId);
            updateCartUI();
        });
    });

    // display
    if (cartItems.length > 0) {
        cartCounter.style.transform = 'scale(1.3)';
        setTimeout(() => cartCounter.style.transform = 'scale(1)', 200);
    }
}

// LR btn
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

// open and close cart panel
document.querySelector('.cart-container').addEventListener('click', (e) => {
    e.stopPropagation();
    cartPanel.style.display = cartPanel.style.display === 'block' ? 'none' : 'block';
    updateCartUI();
});
document.getElementById('cartCloseBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    cartPanel.style.display = 'none';
});

// ini
document.addEventListener("DOMContentLoaded", () => {
    renderSlider(currentCategory);
    updateCartUI();
});

// addtocart btn of attire picking area
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
