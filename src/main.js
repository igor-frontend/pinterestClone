import createHeader from "./components/Header/Header.js";
import createGrid from "./components/Grid/Grid.js";

const app = document.querySelector("#app");

const buscar = async (query) => {
    const title = app.querySelector(".discover-title");
    if (title) {
        title.textContent = `Resultados para: "${query}"`;
    }
    await createGrid(query);
};

const volverAlInicio = async () => {
    const title = app.querySelector(".discover-title");
    if (title) {
        title.textContent = "Discover images";
    }

    const input = app.querySelector(".search-input");
    if (input) {
        input.value = "";
    }
    await createGrid();
};

const header = createHeader(buscar, volverAlInicio);
app.appendChild(header);

const title = document.createElement("h1");
title.className = "discover-title";
title.textContent = "Discover images";
app.appendChild(title);

volverAlInicio();