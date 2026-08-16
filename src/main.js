import createGridRandom from "./components/createGridRandom";
import createGrid from "./components/createGrid";

const button = document.querySelector(".search-icon");
const logo = document.querySelector(".logo");

button.addEventListener("click", ()=>{
    gridContainer.remove()
    let gridContainer = document.createElement("main");
    let toRemove = document.querySelectorAll(".grid-element");
    let input = document.querySelector("#input>input");
    toRemove.forEach(removable=>removable.remove())
    createGrid();
    input.value = ""
})

logo.addEventListener("click", ()=>{
    let gridContainer = document.querySelector("main");
    let toRemove = document.querySelectorAll(".grid-element");
    let input = document.querySelector("#input>input");
    toRemove.forEach(removable=>removable.remove())
    gridContainer.remove()
    createGridRandom();
    input.value = ""
})
window.addEventListener("load",createGridRandom)
