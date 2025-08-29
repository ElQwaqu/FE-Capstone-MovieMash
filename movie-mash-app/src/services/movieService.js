// OMDB API Service
const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL

// Search for movies
export const searchMovies = async (searchTerm) => {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`)
        const data = await response.json()

        if (data.Response === 'True') {
            return {
                success: true,
                movies: data.Search,
                totalResults: data.totalResults
            }
        } else {
            return {
                success: false,
                error: data.Error || 'No movies found'
            }
        }
    } catch {
        return {
            success: false,
            error: 'Network error. Please check your connection.'
        }
    }
}

// Get detailed movie information
export const getMovieDetails = async (imdbID) => {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`)
        const data = await response.json()

        if (data.Response === 'True') {
            return {
                success: true,
                movie: data
            }
        } else {
            return {
                success: false,
                error: data.Error || 'Movie details not found'
            }
        }
    } catch {
        return {
            success: false,
            error: 'Network error. Please check your connection.'
        }
    }
}

// Get trending movies (simulated with popular movies since OMDB doesn't have trending endpoint)
export const getTrendingMovies = async () => {
    const trendingTitles = [
        'Avengers: Endgame',
        'The Batman',
        'Top Gun: Maverick',
        'Spider-Man: No Way Home',
        'Dune',
        'Oppenheimer',
        'Barbie',
        'John Wick',
        'The Matrix',
        'Inception'
    ]

    try {
        // Get a random selection of 6 movies from our trending list
        const shuffled = trendingTitles.sort(() => 0.5 - Math.random())
        const selectedTitles = shuffled.slice(0, 6)

        const moviePromises = selectedTitles.map(async (title) => {
            const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
            const data = await response.json()
            return data.Response === 'True' ? data : null
        })

        const movies = await Promise.all(moviePromises)
        const validMovies = movies.filter(movie => movie !== null)

        if (validMovies.length > 0) {
            return {
                success: true,
                movies: validMovies
            }
        } else {
            return {
                success: false,
                error: 'No trending movies found'
            }
        }
    } catch {
        return {
            success: false,
            error: 'Network error. Please check your connection.'
        }
    }
}
