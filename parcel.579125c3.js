const $app = document.getElementById('app');
// Nota: offset en minúscula para evitar errores de la API
const API = "https://api.escuelajs.co/api/v1/products?offset=0&limit=20";
const main = async ()=>{
    try {
        const response = await fetch(API);
        const products = await response.json();
        const output = products.map((product)=>{
            // Limpieza de URL de imagen para la API de Platzi
            // Esto limpia los corchetes y comillas extra que manda la API de Platzi
            let imgUrl = product.images[0];
            if (imgUrl && imgUrl.includes("[")) imgUrl = JSON.parse(product.images)[0];
            return `
                <article class="Card">
                    <img src="${imgUrl}" alt="${product.title}">
                    <h2>
                        ${product.title}
                        <span>$${product.price}</span>
                    </h2>
                </article>
            `;
        }).join('');
        // Usamos la clase "Items" con mayúscula para que el CSS la reconozca
        $app.innerHTML = `<section class="Items">${output}</section>`;
    } catch (error) {
        console.error("ERROR DETECTADO:", error);
    }
};
main();

//# sourceMappingURL=parcel.579125c3.js.map
