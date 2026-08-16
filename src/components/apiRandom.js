const API_KEY = 'rdZOXl6t8zb7Rk-Vnbz7jkq1HkVNuGRXauyq4i3fg3w';

const requestRandom = async () =>{
    try {
        const fetchAPI = await fetch(`https://api.unsplash.com/photos/random?count=20&client_id=${API_KEY}`);
        const data = await fetchAPI.json();
        console.log("STATUS:", fetchAPI.status);
        console.log("DATA:", data);
        return data
    } catch (error) {
        console.error("Error en fetch:", error);
    }
}

export default requestRandom