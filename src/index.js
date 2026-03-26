const $app = document.getElementById('app');
const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=20";

const main = async () => {
    try {
        const response = await fetch(API);
        const products = await response.json();

        const output = products.map(product => {
            // Limpieza robusta de la imagen
            let imgUrl = product.images[0];
            
            // Si la API manda un string "[url]" en lugar de un array
            if (typeof imgUrl === 'string' && imgUrl.startsWith('[')) {
                try {
                    imgUrl = JSON.parse(imgUrl)[0];
                } catch(e) {
                    imgUrl = "https://placehold.co/600x400?text=No+Image";
                }
            }

            return `
                <article class="Card">
                    <div class="Card-image-container">
                        <img src="${imgUrl}" alt="${product.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=Error+Loading'">
                    </div>
                    <div class="Card-content">
                        <h2>${product.title}</h2>
                        <div class="Card-info">
                            <span class="price">$${product.price}</span>
                            <button class="buy-btn">Add to Cart</button>
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        $app.innerHTML = `<div class="Main"><section class="Items">${output}</section></div>`;

    } catch (error) {
        $app.innerHTML = `<p class="Error">Ups! Algo salió mal al cargar los productos.</p>`;
    }
}

main();