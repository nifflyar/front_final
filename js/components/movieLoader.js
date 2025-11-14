
const apiUrlMovies = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top';
const apiToken = '19921ed0-dc21-485c-9981-8115cdcade13';

let allMovies = []; 

async function fetchMovies() {
    try {
        const response = await fetch(apiUrlMovies, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }

        const data = await response.json();
        allMovies = data.films;
        renderMovies(allMovies);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function renderMovies(movies) {
    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'col-sm-6', 'col-lg-3');
        const savedLanguage = localStorage.getItem('language');

        if (savedLanguage === 'en') {
            card.innerHTML = `
                <div class="movie-card">
                    <img src="${movie.posterUrl || ''}" alt="${movie.nameEn || 'No title'}">
                    <div class="movie-title">${movie.nameEn || 'No title'}</div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="movie-card">
                    <img src="${movie.posterUrl || ''}" alt="${movie.nameRu || 'Без названия'}">
                    <div class="movie-title">${movie.nameRu || 'Без названия'}</div>
                </div>
            `;
        }

        moviesContainer.append(card);
    });
}

function filterMovies(query) {
    
    
    const filteredMovies = allMovies.filter(movie => {
        let name = ""
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage == "en") {
            name = movie.nameEn || '';
        } else {
            name = movie.nameRu || '';
        }
        return name.toLowerCase().includes(query.toLowerCase());
    });
    renderMovies(filteredMovies);
}

document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value;
    filterMovies(query);
});

fetchMovies();
