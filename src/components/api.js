const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const requestImages = async (query = "") => {
    const url = query
        ? `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=20&client_id=${ACCESS_KEY}`
        : `https://api.unsplash.com/photos/random?count=20&client_id=${ACCESS_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return query ? (data.results || []) : (data || []);
    } catch (error) {
        console.error("Fallo crítico en la llamada de red Unsplash:", error);
        throw error;
    }
};

export default requestImages;