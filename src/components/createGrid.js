import request from "./api.js"

const createGrid = async() =>{
    let input = document.querySelector("#input>input");
    const query = input ? input.value : "";

    let gridContainer = document.createElement("main");
    const data = await request(query);
    if (!data || !data.results) return;

    for (let i = 0; i < data.results.length; i++){
        const div = document.createElement("div");
        div.className = "grid-element";
        const foto = data.results[i];
        const fecha = new Date(foto.created_at).toLocaleDateString("es-ES", {
            day: "numeric", month: "short", year: "numeric"
        });
        div.innerHTML = `
            <div class="img-wrapper">
                <img src="${foto.urls.regular}" alt="image">
                <!-- Capa Hover real con datos y enlace a Unsplash -->
                <div class="grid-hover-overlay">
                    <a href="${foto.links.html}" target="_blank" class="btn-visitar">Visitar</a>
                    <div class="hover-stats">
                        <span>👁️ ${foto.views||1}</span>
                        <span>❤️ ${foto.likes}</span>
                    </div>
                </div>
            </div>
            <!-- Tu footer original con el avatar flotante -->
            <img src="${foto.user.profile_image.small}" class="avatar">
            <p class="username">${foto.user.name}</p>
            <p class="likes">${foto.likes} likes</p>
            <p class="upload-date">${fecha}</p>
        `;
        gridContainer.appendChild(div);
    }
    document.body.appendChild(gridContainer);
    console.log(data)
}

export default createGrid;
