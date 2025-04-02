// 物品数据库
const itemsDatabase = [
    { 
        id: 1, 
        name: "Seraphina Silhouette", 
        price: 299, 
        categories: ["Outfit", "Women","Simple"],
        image: "../images/1.jpeg" 
    },

    { 
        id: 2, 
        name: "Celestia Couture", 
        price: 499, 
        categories: ["Outfit", "Women","Dark"],
        image: "../images/2.jpeg" 
    },

    { 
        id: 3, 
        name: "Ophelia Ensemble", 
        price: 999, 
        categories: ["Outfit","Suit", "Women","Dark","Formal"],
        image: "../images/3.jpeg" 
    },

    { 
        id: 4, 
        name: "Atlas Architecture", 
        price: 399, 
        categories: ["Outfit", "Men","Dark","Formal"],
        image: "../images/4.jpeg" 
    },    

    { 
        id: 5, 
        name: "Titan Tailoring Series", 
        price: 899 , 
        categories: ["Outfit","Suit", "Men","Light","Formal","Series"],
        image: "../images/5.jpeg" 
    },    

    { 
        id: 6, 
        name: "Polaris Precision", 
        price: 799, 
        categories: ["Outfit","Suit", "Men","Dark","Formal"],
        image: "../images/3.jpeg" 
    },

    {
        id:7,
        name:"GRINDWEAR VANGUARD",
        price:499,
        categories:["Street","Men","Women"],
        image:"../images/7.jpeg"
    },
    {
        id:8,
        name:"CONCRETE JUNGLE KIT",
        price:499,
        categories:["Street","Men","Women"],
        image:"../images/8.jpeg"
    },
    {
        id:9,
        name:"SK8-REBEL ARMOR",
        price:399,
        categories:["Street","Men","Women"],
        image:"../images/9.jpeg"
    },
    {
        id:10,
        name:"RETRO BOARDWALK",
        price:699,
        categories:["Street","Men","Women","Denim"],
        image:"../images/10.jpeg"
    },
    {
        id:11,
        name:"90S PAVEMENT LEGEND",
        price:699,
        categories:["Street","Men","Women"],
        image:"../images/C1.jpeg"
    },
    {
        id:12,
        name:"OLD-SCHOOL SLIDE COUPLE",
        price:1299,
        categories:["Street","Men","Women","Couple"],
        image:"../images/C2.jpeg"
    },
    {
        id:13,
        name:"ASPHALT ANARCHY SERIES",
        price:599,
        categories:["Street","Men","Women","Couple","Series"],
        image:"../images/C3.jpeg"
    },
];

// 获取所有唯一的类别
const allCategories = [...new Set(itemsDatabase.flatMap(item => item.categories))];

// DOM元素
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const resultsContainer = document.getElementById('resultsContainer');

// 当前筛选状态
let currentFilters = {
    searchTerm: '',
    categories: [],
    priceRanges: []
};

// 初始化页面
function init() {
    renderCategoryFilters();
    renderItems(itemsDatabase);
    setupEventListeners();
}

// 渲染类别筛选器
function renderCategoryFilters() {
    categoryFilters.innerHTML = allCategories.map(category => `
        <div class="filter-option">
            <input type="checkbox" id="cat-${category}" value="${category}">
            <label for="cat-${category}">${category}</label>
        </div>
    `).join('');
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索框输入事件
    searchInput.addEventListener('input', (e) => {
        currentFilters.searchTerm = e.target.value.toLowerCase();
        filterItems();
    });
    
    // 类别筛选变化
    categoryFilters.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const category = e.target.value;
            if (e.target.checked) {
                currentFilters.categories.push(category);
            } else {
                currentFilters.categories = currentFilters.categories.filter(c => c !== category);
            }
            filterItems();
        }
    });
    
    // 价格范围筛选变化
    document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.id.startsWith('price')) {
            checkbox.addEventListener('change', (e) => {
                const range = e.target.value;
                if (e.target.checked) {
                    currentFilters.priceRanges.push(range);
                } else {
                    currentFilters.priceRanges = currentFilters.priceRanges.filter(r => r !== range);
                }
                filterItems();
            });
        }
    });
}

// 筛选物品
function filterItems() {
    let filteredItems = itemsDatabase;
    
    // 按搜索词筛选
    if (currentFilters.searchTerm) {
        filteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(currentFilters.searchTerm)
        );
    }
    
    // 按类别筛选
    if (currentFilters.categories.length > 0) {
        filteredItems = filteredItems.filter(item => 
            currentFilters.categories.some(cat => item.categories.includes(cat))
        );
    }
    
    // 按价格范围筛选
    if (currentFilters.priceRanges.length > 0) {
        filteredItems = filteredItems.filter(item => {
            return currentFilters.priceRanges.some(range => {
                const [min, max] = range.split('-').map(Number);
                if (range.endsWith('+')) {
                    return item.price >= 1000;
                }
                return item.price >= min && item.price <= max;
            });
        });
    }
    
    renderItems(filteredItems);
}

// 创建商品卡片元素的函数
function createProductCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    
    // 图片容器
    const imageContainer = document.createElement('div');
    imageContainer.className = 'product-image-container';
    
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    imageContainer.appendChild(img);
    
    // 商品信息
    const infoContainer = document.createElement('div');
    infoContainer.className = 'item-info';
    
    const title = document.createElement('h3');
    title.textContent = item.name;
    
    const categories = document.createElement('div');
    item.categories.forEach(cat => {
        const categorySpan = document.createElement('span');
        categorySpan.className = 'category';
        categorySpan.textContent = cat;
        categories.appendChild(categorySpan);
    });
    
    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = `$${item.price}`;
    
    // 组装信息容器
    infoContainer.appendChild(title);
    infoContainer.appendChild(categories);
    infoContainer.appendChild(price);
    
    // 组装卡片
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);
    
    return card;
}
// 修改renderItems函数
function renderItems(items) {
    resultsContainer.innerHTML = '';
    
    if (items.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No match result found';
        resultsContainer.appendChild(noResults);
        return;
    }
    
    items.forEach(item => {
        const card = createProductCard(item);
        resultsContainer.appendChild(card);
    });
}

// 初始化应用
init();