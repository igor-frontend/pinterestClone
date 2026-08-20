import "./Header.css";

const createHeader = (onSearch, onHomeClick) => {
    const header = document.createElement("header");
    header.className = "pinterest-header";

    const headerLeft = document.createElement("div");
    headerLeft.className = "header-left";

    const logoBtn = document.createElement("button");
    logoBtn.className = "logo-btn";
    logoBtn.setAttribute("aria-label", "Volver a la página de inicio");
    logoBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#E60023">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.63 7.85 6.43 9.39-.09-.79-.17-2 .03-2.87.19-.79 1.22-5.26 1.22-5.26s-.31-.62-.31-1.54c0-1.44.83-2.52 1.88-2.52.88 0 1.31.67 1.31 1.47 0 .89-.57 2.22-.86 3.45-.24 1.03.52 1.87 1.54 1.87 1.85 0 3.27-1.95 3.27-4.77 0-2.49-1.79-4.24-4.35-4.24-2.96 0-4.7 2.22-4.7 4.52 0 .9.34 1.86.77 2.38.08.1.1.17.07.27-.08.33-.26 1.05-.29 1.19-.05.18-.16.22-.36.13-1.34-.62-2.17-2.58-2.17-4.16 0-3.39 2.46-6.5 7.1-6.5 3.73 0 6.62 2.66 6.62 6.2 0 3.71-2.34 6.7-5.59 6.7-1.09 0-2.12-.57-2.47-1.24 0 0-.54 2.06-.67 2.56-.24.94-.9 2.11-1.34 2.83 1 .31 2.06.48 3.16.48 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
    `;
    logoBtn.addEventListener("click", onHomeClick);

    const navLinks = document.createElement("div");
    navLinks.className = "nav-links";

    const startBtn = document.createElement("button");
    startBtn.className = "btn btn-dark";
    startBtn.textContent = "Inicio";
    startBtn.addEventListener("click", onHomeClick);

    navLinks.appendChild(startBtn);
    headerLeft.appendChild(logoBtn);
    headerLeft.appendChild(navLinks);

    const searchForm = document.createElement("form");
    searchForm.className = "search-form";
    searchForm.setAttribute("role", "search");

    const searchBtn = document.createElement("button");
    searchBtn.type = "submit";
    searchBtn.className = "search-submit-btn";
    searchBtn.setAttribute("aria-label", "Buscar imágenes");
    searchBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style="opacity: 0.6;">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
    `;

    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.className = "search-input";
    searchInput.placeholder = "Buscar imágenes de inspiración...";
    searchInput.name = "query";
    searchInput.autocomplete = "off";
    searchInput.setAttribute("aria-label", "Caja de búsqueda de imágenes");

    searchForm.appendChild(searchBtn);
    searchForm.appendChild(searchInput);

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = searchInput.value.trim();
        if (value) onSearch(value);
    });

    const headerRight = document.createElement("div");
    headerRight.className = "header-right";

    const profileBtn = document.createElement("button");
    profileBtn.className = "profile-btn";
    profileBtn.setAttribute("aria-label", "Perfil de usuario");
    profileBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" style="opacity: 0.7;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
    `;

    headerRight.appendChild(profileBtn);
    header.appendChild(headerLeft);
    header.appendChild(searchForm);
    header.appendChild(headerRight);

    return header;
};

export default createHeader;