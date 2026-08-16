import request from "./api.js"

let input = document.querySelector("#input>input");

const createGrid = async() =>{
    let gridContainer = document.createElement("main");
    const data = await request(input.value);
    for (let i = 0;i<data.results.length;i++){
        const div = document.createElement("div");
        div.className="grid-element";
        gridContainer.appendChild(div);
        const img = document.createElement("img");
        img.src = data.results[i].urls.regular;
        div.appendChild(img);
        const avatar = document.createElement("img");
        avatar.src = data.results[i].user.profile_image.small;
        avatar.className = "avatar";
        div.appendChild(avatar)
        const username = document.createElement("p");
        username.textContent = data.results[i].user.name;
        div.appendChild(username);
        const likes = document.createElement("p");
        likes.textContent = `${data.results[i].likes} likes`;
        div.appendChild(likes);
    }
    document.body.appendChild(gridContainer)
}

export default createGrid