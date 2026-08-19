import createGridRandom from "./components/createGridRandom";
import createGrid from "./components/createGrid";

document.querySelector("#app").innerHTML = `
  <header>
    <div class="header-left">
      <img class="logo" src="data:image/png;base64,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" alt="pinterest" style="cursor:pointer">
      <nav class="nav-links">
        <button class="btn btn-dark">Inicio</button>
        <button class="btn btn-ghost">Explorar</button>
        <button class="btn btn-ghost">Crear</button>
      </nav>
    </div>
    <form id="input" action="">
      <button type="submit" class="search-button-container">
        <img class="search-icon" src="https://cdn-icons-png.flaticon.com/512/16/16492.png" alt="lupa">
      </button>
      <input type="search" placeholder="Buscar" name="search" aria-label="Buscar imágenes">
    </form>
    <div class="header-right">
      <button class="profile-btn">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3UA-3LIT9fT4aA1LnE8Zm4lvb5DkV6MRRWLViD4PRw&s=10" alt="account">
      </button>
    </div>
  </header>
  <h1>Discover images</h1>
`;

let cacheInicial = null;
const form = document.querySelector("#input");
const logo = document.querySelector(".logo");
const btnInicio = document.querySelector(".btn-dark");

const limpiarPantalla = () => {
    document.querySelectorAll(".grid-element").forEach(removable => removable.remove());
    document.querySelectorAll("main").forEach(m => m.remove());
};

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const contenedorViejo = document.querySelector("main");
    await createGrid(); 
    contenedorViejo?.remove();
    form.querySelector("input").value = "";
});

const volverAlInicio = async () => {
    limpiarPantalla();
    form.querySelector("input").value = "";
    if (cacheInicial) {
        document.body.appendChild(cacheInicial.cloneNode(true));
    } else {
        await createGridRandom();
        cacheInicial = document.querySelector("main").cloneNode(true);
    }
};

logo.addEventListener("click", volverAlInicio);
btnInicio.addEventListener("click", volverAlInicio);
window.addEventListener("DOMContentLoaded", volverAlInicio);
