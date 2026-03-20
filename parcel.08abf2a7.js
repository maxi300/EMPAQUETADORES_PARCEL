let e=document.getElementById("app");(async()=>{try{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20"),a=(await t.json()).map(e=>{let t=e.images[0];return t&&t.includes("[")&&(t=JSON.parse(e.images)[0]),`
                <article class="Card">
                    <img src="${t}" alt="${e.title}">
                    <h2>
                        ${e.title}
                        <span>$${e.price}</span>
                    </h2>
                </article>
            `}).join("");e.innerHTML=`<section class="Items">${a}</section>`}catch(e){console.error("ERROR DETECTADO:",e)}})();
//# sourceMappingURL=parcel.08abf2a7.js.map
