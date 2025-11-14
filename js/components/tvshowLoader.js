const apiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES&page=3';
const apiToken = '19921ed0-dc21-485c-9981-8115cdcade13';


let allShows = []

async function fetchTvShows() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiToken
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch TV shows');
        }

        const data = await response.json();
        console.log(data);

        const tvShows = data.items.filter(tvShow => tvShow.type === 'TV_SHOW' || tvShow.type === 'TV_SERIES');
        allShows = tvShows;
        renderTvShows(allShows);
    } catch (error) {
        console.error('Error fetching TV shows:', error);
    }
}

function renderTvShows(tvShows) {
    const tvShowsContainer = document.getElementById('tvShowsContainer');
    tvShowsContainer.innerHTML = '';



    tvShows.forEach(tvShow => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'col-sm-6', 'col-lg-3');
        tvShowsContainer.append(card);
        const savedLanguage = localStorage.getItem('language');

        if (savedLanguage === 'en') {
            card.innerHTML = `
                    <div class="movie-card">
                        <img src="${tvShow.posterUrl || ''}" alt="${tvShow.nameOriginal || 'No title'}">
                        <div class="movie-title">${tvShow.nameOriginal || 'No title'}</div>
                    </div>
                `;
        } else {
            card.innerHTML = `
                    <div class="movie-card">
                        <img src="${tvShow.posterUrl || ''}" alt="${tvShow.nameRu || 'Без названия'}">
                        <div class="movie-title">${tvShow.nameRu || 'Без названия'}</div>
                    </div>
                `;
        }
    });
}


function filterShows(query) {


    const filteredShows = allShows.filter(show => {
        let name = ""
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage == "en") {
            name = show.nameOriginal || '';
        } else {
            name = show.nameRu || '';
        }
        return name.toLowerCase().includes(query.toLowerCase());
    });
    renderTvShows(filteredShows);
}

document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value;
    filterShows(query);
});


fetchTvShows();


