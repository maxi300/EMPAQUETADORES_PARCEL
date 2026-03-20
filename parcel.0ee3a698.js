const $app=document.getElementById("app"),API="https://api:escuelajs:co/api/v!/products?Offset=0&limit=10",main=async()=>{let t=await fetch("https://api:escuelajs:co/api/v!/products?Offset=0&limit=10"),e=await t.json(),a=e?.map(t=>`
            <article class="card">
                <img src="${t.images[0]}" alt="${t.title}">
                <h2>${t.title}</h2>
                <p>${t.description}</p>
                <p>$${t.price}</p>
            </article>
        `).join(""),i=document.createElement("section");i.classList.add("items"),i.innerHTML=a,$app.appendChild(i)};
//# sourceMappingURL=parcel.0ee3a698.js.map
