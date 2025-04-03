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
        categories:["Street","Men","Women","Couple","Denim"],
        image:"../images/C2.jpeg"
    },

    {
        id:13,
        name:"ASPHALT ANARCHY SERIES",
        price:599,
        categories:["Street","Men","Women","Couple","Series"],
        image:"../images/C3.jpeg"
    },
        
    {
        id:14,
        name:"MIDNIGHT CRUISER",
        price:99,
        categories:["Street","Men","Women","Couple","Accessories"],
        image:"../images/M1.jpeg"
    },
        
    {
        id:15,
        name:"CYBER PUNKER",
        price:49,
        categories:["Street","Men","Women","Couple","Accessories"],
        image:"../images/M2.jpeg"
    },
        
    {
        id:16,
        name:"WILD TYPE",
        price:79,
        categories:["Street","Men","Women","Couple","Accessories"],
        image:"../images/M3.jpeg"
    },

    {
        id:17,
        name:"LOVE FROM CUPID",
        price:39,
        categories:["Street","Men","Women","Couple","Accessories"],
        image:"../images/M4.jpeg"
    },

    {
        id:18,
        name:"BASIC ASPHALT TSHIRT BUNDLE",
        price:299,
        categories:["Street","Men","Women","Couple","Shirt"],
        image:"../images/T1.jpeg"
    },

    {
        id:19,
        name:"UNFINISHED PROTEST",
        price:159,
        categories:["Street","Men","Women","Shirt"],
        image:"../images/T2.jpeg"
    },

    {
        id:18,
        name:"GENERATION DELETE",
        price:199,
        categories:["Street","Men","Women","Shirt"],
        image:"../images/T3.jpeg"
    },

    {
        id:18,
        name:"PAIN KILLER TSHIRT BUNDLE",
        price:599,
        categories:["Street","Men","Women","Shirt"],
        image:"../images/T4.jpeg"
    },

    {
        id:19,
        name:"GLITCHED HEART",
        price:299,
        categories:["Street","Men","Women","Shirt"],
        image:"../images/T5.jpeg"
    },

    {
        id:20,
        name:"BINARY POET",
        price:259,
        categories:["Street","Men","Women","Shirt"],
        image:"../images/T6.jpeg"
    },

    {
        id:21,
        name:"NEON GHOST",
        price:199,
        categories:["Street","Men","Women","Shirt"],
        image:"../images/T7.jpeg"
    },

    {
        id:21,
        name:"DEAR GLORIA",
        price:149,
        categories:["Street","Men","Women","Shirt"],
        image:"../images/T8.jpeg"
    },
    
    {
        id:22,
        name:"GEAR GOD",
        price:2999,
        categories:["Street","Men","Women","Watch","Accessories"],
        image:"../images/W1.jpeg"
    },

    {
        id:23,
        name:"RUSTED HEART",
        price:2599,
        categories:["Street","Men","Women","Watch","Accessories"],
        image:"../images/W2.jpeg"
    },

    {
        id:24,
        name:"CHAIN REACTION",
        price:1999,
        categories:["Street","Men","Women","Watch","Accessories"],
        image:"../images/W3.jpeg"
    },

    {
        id:22,
        name:"GLITCH GUARDIAN",
        price:1899,
        categories:["Street","Men","Women","Watch","Accessories"],
        image:"../images/W4.jpeg"
    },
    
    {
        id:23,
        name:"SKATE OR DIE",
        price:399,
        categories:["Street","Men","Women","Shoes"],
        image:"../images/X1.jpeg"
    },
        
    {
        id:24,
        name:"RAVE BOOST",
        price:359,
        categories:["Street","Men","Women","Shoes"],
        image:"../images/X2.jpeg"
    },
        
    {
        id:25,
        name:"STREET STROKE",
        price:429,
        categories:["Street","Men","Women","Shoes"],
        image:"../images/X3.jpeg"
    },
        
    {
        id:26,
        name:"ZERO GRAVITY",
        price:199,
        categories:["Street","Men","Women","Shoes"],
        image:"../images/X4.jpeg"
    },
            
    {
        id:27,
        name:"ASPHALT REAPER",
        price:799,
        categories:["Street","Men","Women","Skateboard"],
        image:"../images/H1.jpeg"
    },
            
    {
        id:28,
        name:"PIPE DREAM",
        price:899,
        categories:["Street","Men","Women","Skateboard"],
        image:"../images/H2.jpeg"
    },
            
    {
        id:29,
        name:"RUST EMPIRE",
        price:999,
        categories:["Street","Men","Women","Skateboard"],
        image:"../images/H3.jpeg"
    },

                
    {
        id:30,
        name:"Royal Luminance",
        price:599,
        categories:["Formal","Men","Women","Shirt"],
        image:"../images/S1.jpeg"
    },

                
    {
        id:31,
        name:"Versailles Silk",
        price:999,
        categories:["Formal","Men","Women","Shirt"],
        image:"../images/S2.jpeg"
    },

                
    {
        id:32,
        name:"Golden Mist",
        price:1299,
        categories:["Formal","Men","Women","Shirt"],
        image:"../images/S3.jpeg"
    },

                
    {
        id:33,
        name:"Glacier Vein",
        price:999,
        categories:["Formal","Men","Women","Shirt"],
        image:"../images/S4.jpeg"
    },

    {
        id:34,
        name:"Monolith Pleat",
        price:599,
        categories:["Formal","Men","Women","Trousers"],
        image:"../images/P1.jpeg"
    },

    {
        id:35,
        name:"Bridge Culotte",
        price:499,
        categories:["Formal","Men","Women","Trousers"],
        image:"../images/P2.jpeg"
    },

    {
        id:36,
        name:"Noir Liquid",
        price:699,
        categories:["Formal","Men","Women","Trousers"],
        image:"../images/P3.jpeg"
    },

    {
        id:37,
        name:"Solar Stream",
        price:399,
        categories:["Formal","Men","Women","Trousers"],
        image:"../images/P4.jpeg"
    },

    {
        id:38,
        name:"Crown Knot",
        price:199,
        categories:["Formal","Men","Women","Suit","Tie","Accessories"],
        image:"../images/L1.jpeg"
    },

    {
        id:39,
        name:"Throne Silk",
        price:259,
        categories:["Formal","Men","Women","Suit","Tie","Accessories"],
        image:"../images/L2.jpeg"
    },

    {
        id:40,
        name:"Golden Mist",
        price:299,
        categories:["Formal","Men","Women","Suit","Tie","Accessories"],
        image:"../images/L3.jpeg"
    },

    {
        id:41,
        name:"Regal Blood",
        price:159,
        categories:["Formal","Men","Women","Suit","Tie","Accessories"],
        image:"../images/L4.jpeg"
    },

    {
        id:42,
        name:"Imperial Arch",
        price:1299,
        categories:["Formal","Men","Suit","Shoes","Accessories"],
        image:"../images/X5.jpeg"
    },

    {
        id:43,
        name:"Silent Decree",
        price:1199,
        categories:["Formal","Men","Suit","Shoes","Accessories"],
        image:"../images/X6.jpeg"
    },

    {
        id:44,
        name:"Venom Stiletto",
        price:1799,
        categories:["Formal","Women","Suit","Shoes","Accessories"],
        image:"../images/X7.jpeg"
    },

    {
        id:45,
        name:"Liquid Crown",
        price:999,
        categories:["Formal","Women","Suit","Shoes","Accessories"],
        image:"../images/X8.jpeg"
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
    
    // 从 URL 参数中获取多个类别
    const urlParams = new URLSearchParams(window.location.search);
    const categoriesParam = urlParams.get('categories');
    
    if (categoriesParam) {
        // 解码并分割为数组
        const selectedCategories = decodeURIComponent(categoriesParam).split(',');
        
        // 选中对应的复选框并更新筛选状态
        selectedCategories.forEach(category => {
            const checkbox = document.querySelector(`input[value="${category}"]`);
            if (checkbox) {
                checkbox.checked = true;
                if (!currentFilters.categories.includes(category)) {
                    currentFilters.categories.push(category);
                }
            }
        });
        
        // 应用筛选
        filterItems();
        
        // 可选：清理URL参数（不刷新页面）
        window.history.replaceState({}, document.title, window.location.pathname);
    }
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
            currentFilters.categories.every(cat => item.categories.includes(cat))
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