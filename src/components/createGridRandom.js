import requestRandom from "./apiRandom.js"

const createGridRandom = async() =>{
    let input = document.querySelector("#input>input");
    const query = input ? input.value : "";

    let gridContainer = document.createElement("main");
    const data = await requestRandom(query);
    if (!data || !Array.isArray(data)) return;

    for (let i = 0; i < data.length; i++){
        const div = document.createElement("div");
        div.className = "grid-element";

        const foto = data[i];
        const fecha = new Date(foto.created_at).toLocaleDateString("es-ES", {
            day: "numeric", month: "short", year: "numeric"
        });

        div.innerHTML = `
            <div class="img-wrapper">
                <img src="${foto.urls.regular}" alt="image">
                <div class="grid-hover-overlay">
                    <a href="${foto.links.html}" target="_blank" class="btn-visitar">Visitar</a>
                    <div class="hover-stats">
                        <span>👁️ ${foto.views || 0}</span>
                        <span>❤️ ${foto.likes}</span>
                    </div>
                </div>
            </div>
            <img src="${foto.user.profile_image.small}" class="avatar">
            <p class="username">${foto.user.name}</p>
            <p class="likes">${foto.likes} likes</p>
            <p class="upload-date">${fecha}</p>
        `;
        gridContainer.appendChild(div);
    }
    document.body.appendChild(gridContainer);
}

export default createGridRandom;
