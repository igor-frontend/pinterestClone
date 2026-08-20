import requestImages from "../api.js";
import "./Grid.css";

const createGrid = async (query = "") => {
    const app = document.querySelector("#app");
    const oldMain = app.querySelector(".grid-container");
    if (oldMain) {
        oldMain.remove();
    }

    const main = document.createElement("main");
    main.className = "grid-container";

    try {
        const data = await requestImages(query);
        if (!data || data.length === 0) {
            const message = document.createElement("p");
            message.className = "no-results";
            message.textContent = query
                ? `No se encontraron imágenes para "${query}". Intenta otra búsqueda.`
                : "No hay imágenes disponibles en este momento.";

            main.appendChild(message);
            app.appendChild(main);
            return;
        }

        data.forEach((foto) => {
            const card = document.createElement("div");
            card.className = "grid-element";

            const imageWrapper = document.createElement("div");
            imageWrapper.className = "img-wrapper";

            const image = document.createElement("img");
            image.src = foto.urls.regular;
            image.alt = foto.alt_description || foto.description || `Imagen de inspiración compartida por ${foto.user.name}`;

            const overlay = document.createElement("div");
            overlay.className = "grid-hover-overlay";

            const visitButton = document.createElement("a");
            visitButton.href = foto.links.html;
            visitButton.target = "_blank";
            visitButton.rel = "noopener noreferrer";
            visitButton.className = "btn-visitar";
            visitButton.textContent = "Visitar";

            const stats = document.createElement("div");
            stats.className = "hover-stats";

            const views = document.createElement("span");
            views.textContent = `👁️ ${foto.views || 0}`;

            const likes = document.createElement("span");
            likes.textContent = `❤️ ${foto.likes || 0}`;

            stats.appendChild(views);
            stats.appendChild(likes);
            overlay.appendChild(visitButton);
            overlay.appendChild(stats);

            imageWrapper.appendChild(image);
            imageWrapper.appendChild(overlay);

            const avatar = document.createElement("img");
            avatar.src = foto.user.profile_image.small;
            avatar.alt = `Fotografía de perfil de ${foto.user.name}`;
            avatar.className = "avatar";

            const username = document.createElement("p");
            username.className = "username";
            username.textContent = foto.user.name;

            const uploadDate = document.createElement("p");
            uploadDate.className = "upload-date";
            uploadDate.textContent = new Date(foto.created_at).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "short",
                year: "numeric"
            });

            card.appendChild(imageWrapper);
            card.appendChild(avatar);
            card.appendChild(username);
            card.appendChild(uploadDate);

            main.appendChild(card);
        });

        app.appendChild(main);
    } catch (error) {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        errorMessage.textContent = "Lo sentimos, hubo un problema de conexión al cargar la galería. Por favor reintenta más tarde.";

        main.appendChild(errorMessage);
        app.appendChild(main);
    }
};

export default createGrid;