// Datos de productos - MODIFICA AQUÍ PARA AGREGAR/EDITAR PRODUCTOS
const products = [
    {
        id: 1,
        name: "Reloj Digital Sublimable",
        price: "$8,50",
        originalPrice: "$11",
        images: [
			"https://sublimachile.cl/wp-content/uploads/2021/08/88-reloj-cubo-6.jpg",
			"https://www.sublifly.co/wp-content/uploads/2024/08/RELOJ-SUBLIMABLE.png",
            "https://www.suministro.cl/cdn/shop/files/Reloj-digital-tipo-cubo-con-3-caras-sublimables-me-8.webp?v=1725629446&width=1946",
            "https://www.suministro.cl/cdn/shop/files/Reloj-digital-tipo-cubo-con-3-caras-sublimables-me-1.webp?v=1725629445&width=1946"
        ],
        discount: "-22,73%",
        isOffer: true,
        inStock: true,
        sku: "1061050030p",
        description: "Reloj Digital Sublimable Tipo Cubo, personalizable con tus diseños. Incluye pantalla digital, alarma, y luz LED. Ideal para hogar u oficina.",
        features: [
            "Pantalla digital LCD",
            "Función de alarma",
            "Luz LED integrada",
            "Personalizable por sublimación",
            "Ideal para hogar u oficina",
            "Diseño tipo cubo moderno"
        ]
    },
    {
        id: 2,
        name: "Reloj Digital Sublimable de colores",
        price: "$11",
        originalPrice: "$15",
        images: [
            "https://www.suministro.cl/cdn/shop/files/Reloj-digital-tipo-cubo-con-3-caras-sublimables-me-16.webp?v=1725629446&width=1946",
			"https://www.productosgraficos.cl/wp-content/uploads/2022/09/reloj-sublimacion-4.jpg",
			"https://www.productosgraficos.cl/wp-content/uploads/2022/09/reloj-sublimacion-3.jpg",
            "https://www.productosgraficos.cl/wp-content/uploads/2022/09/reloj-sublimacion-5.jpg",
            "https://www.productosgraficos.cl/wp-content/uploads/2022/09/reloj-sublimacion-6.jpg"
        ],
        discount: "-26,67%",
        isOffer: true,
        inStock: true,
        sku: "1061050030p",
        description: "Reloj Digital Sublimable Tipo Cubo, personalizable con tus diseños. Incluye pantalla digital, alarma, y luz LED. Ideal para hogar u oficina.",
        features: [
            "Pantalla digital LCD",
            "Función de alarma",
            "Luz LED integrada",
            "Personalizable por sublimación",
            "Ideal para hogar u oficina",
            "Diseño tipo cubo moderno"
        ]
    }
];

// Variables globales
let currentProductImages = [];
let currentImageIndex = 0;
let currentQuantity = 1;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupModal();
});

// Renderizar productos en la grilla
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);

    const badges = product.isOffer || product.discount ? `
        <div class="product-badges">
            ${product.isOffer ? '<span class="badge">Oferta</span>' : ''}
            ${product.discount ? `<span class="badge">${product.discount}</span>` : ''}
        </div>
    ` : '';

    const stockOverlay = !product.inStock ? `
        <div class="stock-overlay">
            <span>Sin stock</span>
        </div>
    ` : '';

    card.innerHTML = `
        <div class="product-image-container">
            <img class="product-image" src="${product.images[0]}" alt="${product.name}">
            ${badges}
            ${stockOverlay}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-prices">
                <span class="current-price">${product.price}</span>
                ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
            </div>
            <button class="product-button ${product.inStock ? 'in-stock' : 'out-of-stock'}" 
                    ${!product.inStock ? 'disabled' : ''}>
                ${product.inStock ? 'Ver producto' : 'Sin stock'}
            </button>
        </div>
    `;

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupModal();
    document.querySelector('.nav-link:nth-child(1)').addEventListener('click', mostrarHome);
    document.querySelector('.nav-link:nth-child(2)').addEventListener('click', renderProducts);
    document.querySelector('.nav-link:nth-child(3)').addEventListener('click', mostrarOfertas);
    document.querySelector('.nav-link:nth-child(4)').addEventListener('click', mostrarContacto);
});

function mostrarHome() {
    document.getElementById('products-grid').innerHTML = '';
    const section = document.getElementById('dynamic-section');
    section.innerHTML = `
        <div class="dynamic-box">
            <h2>QUIÉNES SOMOS</h2>
            <p>La sublimación es más que una técnica, es una pasión. Nos encanta
            convertir tus ideas en objetos tangiblemente hermosos y significativos.
            Cada reloj y cada detalle que sublimamos lleva consigo el cuidado y el
            entusiasmo por entregar productos únicos que te hagan sonreír.
            ¡Permítenos ayudarte a personalizar tus momentos y tus espacios!</p>
        </div>
        <div class="dynamic-box">
            <h2>MISIÓN</h2>
            <p>Nuestra misión es transformar el tiempo en arte y recuerdo,
            ofreciendo relojes digitales sublimados que no solo informan la hora,
            sino que también reflejan la esencia, los momentos y la identidad
            de cada persona o marca. Nos comprometemos a entregar productos
            de alta calidad, duraderos y visualmente impactantes, creados con
            pasión y precisión, para que cada vistazo al reloj sea una experiencia
            significativa y personalizada.</p>
        </div>
        <div class="dynamic-box">
            <h2>VISIÓN</h2>
            <p>Nuestra visión es ser el referente principal en la creación
            de relojes digitales personalizados mediante la sublimación,
            reconocidos por nuestra innovación, calidad excepcional y capacidad
            de capturar historias y emociones en cada diseño. Aspiramos a expandir
            nuestra oferta y alcance, convirtiéndonos en la elección preferida
            para quienes buscan un regalo único, una pieza decorativa distintiva o
            una herramienta de marca que hable por sí misma, siempre con un enfoque
            en la sostenibilidad y la satisfacción total del cliente.</p>
        </div>
    `;
}

function mostrarOfertas() {
    const grid = document.getElementById('products-grid');
    const section = document.getElementById('dynamic-section');
    section.innerHTML = '';
    grid.innerHTML = '';

    const ofertas = products.filter(p => p.isOffer);
    if (ofertas.length === 0) {
        grid.innerHTML = '<p>No hay productos en oferta por ahora.</p>';
    } else {
        ofertas.forEach(producto => {
            grid.appendChild(createProductCard(producto));
        });
    }
}

function mostrarContacto() {
    document.getElementById('products-grid').innerHTML = '';
    const section = document.getElementById('dynamic-section');
    section.innerHTML = `
        <div class="dynamic-box" style="flex: 1 1 100%;">
            <h2>Contáctanos</h2>
            <form id="contact-form">
                <label>Nombre:</label>
                <input type="text" name="nombre" required>
                <label>Correo:</label>
                <input type="email" name="correo" required>
                <label>Mensaje:</label>
                <textarea name="mensaje" rows="5" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    `;

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        this.reset();
    });
}


// Abrir modal de producto
function openProductModal(product) {
    currentProductImages = product.images;
    currentImageIndex = 0;
    currentQuantity = 1;

    // Actualizar contenido del modal
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-sku').textContent = product.sku;
    document.getElementById('modal-product-price').textContent = product.price;
    document.getElementById('modal-original-price').textContent = product.originalPrice || '';
    document.getElementById('modal-original-price').style.display = product.originalPrice ? 'inline' : 'none';
    document.getElementById('modal-product-description').textContent = product.description;

    // Stock status
    const stockStatus = document.getElementById('modal-stock-status');
    stockStatus.textContent = product.inStock ? 'En stock' : 'Sin stock';
    stockStatus.className = `stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`;

    // Badges
    const badgesContainer = document.getElementById('product-badges');
    badgesContainer.innerHTML = '';
    if (product.isOffer) {
        badgesContainer.innerHTML += '<span class="badge">Oferta</span>';
    }
    if (product.discount) {
        badgesContainer.innerHTML += `<span class="badge">${product.discount}</span>`;
    }

    // Features
    const featuresList = document.getElementById('modal-product-features');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Botón agregar al carrito
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.disabled = !product.inStock;
    addToCartBtn.textContent = product.inStock ? 'Agregar al carrito' : 'Sin stock';

    // Actualizar imágenes
    updateModalImages();

    // Mostrar modal
    document.getElementById('product-modal').style.display = 'block';
}

// Actualizar imágenes del modal
function updateModalImages() {
    // Imagen principal
    document.getElementById('main-product-image').src = currentProductImages[currentImageIndex];

    // Miniaturas
    const thumbnailsContainer = document.getElementById('thumbnail-images');
    thumbnailsContainer.innerHTML = '';

    if (currentProductImages.length > 1) {
        currentProductImages.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
            thumbnail.onclick = () => {
                currentImageIndex = index;
                updateModalImages();
            };

            thumbnail.innerHTML = `<img src="${image}" alt="Imagen ${index + 1}">`;
            thumbnailsContainer.appendChild(thumbnail);

        });
    }
}

// Navegación de imágenes
function previousImage() {
    if (currentProductImages.length > 1) {
        currentImageIndex = (currentImageIndex - 1 + currentProductImages.length) % currentProductImages.length;
        updateModalImages();
    }
}

function nextImage() {
    if (currentProductImages.length > 1) {
        currentImageIndex = (currentImageIndex + 1) % currentProductImages.length;
        updateModalImages();
    }
}

// Cambiar cantidad
function changeQuantity(change) {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
        currentQuantity = newQuantity;
        document.getElementById('quantity').textContent = currentQuantity;
    }
}

// Configurar modal
function setupModal() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');

    // Cerrar modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Cerrar modal al hacer clic fuera
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Reset cantidad al cerrar
    modal.addEventListener('hide', () => {
        currentQuantity = 1;
        document.getElementById('quantity').textContent = '1';
    });
}

// Funciones adicionales que puedes personalizar

// Agregar al carrito (personaliza esta función)
function addToCart() {
    alert(`Producto agregado al carrito. Cantidad: ${currentQuantity}`);
}

// Agregar a favoritos (personaliza esta función)
function addToWishlist() {
    alert('Producto agregado a favoritos');
}

// Compartir producto (personaliza esta función)
function shareProduct() {
    alert('Compartiendo producto...');
}
