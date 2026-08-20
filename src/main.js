import createHeader from "./components/Header/Header.js";
import createGrid from "./components/Grid/Grid.js";

const app = document.querySelector("#app");
let cacheInicial = null;

const mostrarInicio = async () => {
    await createGrid();
    const main = app.querySelector(".grid-container");

    if (main) {
        cacheInicial = main.cloneNode(true);
    }
};
const buscar = async (query) => {
    const title = app.querySelector(".discover-title");
    if (title) {
        title.textContent = `Resultados para: "${query}"`;
    }
    await createGrid(query);
};

const volverAlInicio = () => {
    const title = app.querySelector(".discover-title");
    if (title) {
        title.textContent = "Discover images";
    }
    const input = app.querySelector(".search-input");
    if (input) {
        input.value = "";
    }
    const mainActual = app.querySelector(".grid-container");
    if (mainActual) {
        mainActual.remove(); // Lo destruimos por completo
    }
    if (cacheInicial) {
        app.appendChild(cacheInicial.cloneNode(true));
    } else {
        mostrarInicio();
    }
};


const header = createHeader(buscar, volverAlInicio);
app.appendChild(header);

const title = document.createElement("h1");
title.className = "discover-title";
title.textContent = "Discover images";
app.appendChild(title);

mostrarInicio();