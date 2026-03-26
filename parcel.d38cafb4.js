let t=document.getElementById("app");(async()=>{try{let a=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20"),s=(await a.json()).map(t=>{let a=t.images[0];if("string"==typeof a&&a.startsWith("["))try{a=JSON.parse(a)[0]}catch(t){a="https://placehold.co/600x400?text=No+Image"}return`
                <article class="Card">
                    <div class="Card-image-container">
                        <img src="${a}" alt="${t.title}" loading="lazy" onerror="this.src='https://placehold.co/600x400?text=Error+Loading'">
                    </div>
                    <div class="Card-content">
                        <h2>${t.title}</h2>
                        <div class="Card-info">
                            <span class="price">$${t.price}</span>
                            <button class="buy-btn">Add to Cart</button>
                        </div>
                    </div>
                </article>
            `}).join("");t.innerHTML=`<div class="Main"><section class="Items">${s}</section></div>`}catch(a){t.innerHTML='<p class="Error">Ups! Algo salió mal al cargar los productos.</p>'}})();
//# sourceMappingURL=parcel.d38cafb4.js.map
