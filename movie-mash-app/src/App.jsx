import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import TrendingMovies from './components/TrendingMovies'
import SearchHistory from './components/SearchHistory'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import { searchMovies, getMovieDetails } from './services/movieService'
import { addToSearchHistory } from './services/searchHistoryService'

function App() {
  // App State
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingDetails, setLoadingDetails] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [currentSearchQuery, setCurrentSearchQuery] = useState('')

  // Handle search from SearchBar
  const handleSearch = async (searchQuery) => {
    setLoading(true)
    setError('')
    setHasSearched(true)
    setMovies([]) // Clear previous results
    setCurrentSearchQuery(searchQuery)

    // Add to search history
    addToSearchHistory(searchQuery)

    try {
      const result = await searchMovies(searchQuery)

      if (result.success) {
        setMovies(result.movies)
        setError('')
      } else {
        setMovies([])
        setError(result.error)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  // Handle movie card click (updated to work with both search results and trending)
  const handleMovieClick = async (movieIdOrMovie) => {
    setLoadingDetails(true)
    setError('')

    try {
      // Handle both movie object (from search) and imdbID (from trending)
      const imdbID = typeof movieIdOrMovie === 'string' ? movieIdOrMovie : movieIdOrMovie.imdbID

      const result = await getMovieDetails(imdbID)

      if (result.success) {
        setSelectedMovie(result.movie)
      } else {
        setError(`Failed to load movie details: ${result.error}`)
      }
    } catch {
      setError('Failed to load movie details. Please try again.')
    } finally {
      setLoadingDetails(false)
    }
  }

  // Handle back to search results
  const handleBackToResults = () => {
    setSelectedMovie(null)
    setError('')
  }

  // Handle home navigation
  const handleGoHome = () => {
    setSelectedMovie(null)
    setMovies([])
    setHasSearched(false)
    setCurrentSearchQuery('')
    setError('')
  }

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Floating Home Button - Show when not on home page */}
      {(hasSearched || selectedMovie) && (
        <button
          onClick={handleGoHome}
          className="fixed top-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 group"
          title="Go to Home"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Home
          </span>
        </button>
      )}

      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1
            className="text-5xl font-bold text-white mb-3 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={handleGoHome}
            title="Go to Home"
          >
            🎬 Movie Mash
          </h1>
          <p className="text-gray-300 text-lg">
            Discover your favorite movies
          </p>
        </header>

        <main>
          {/* Show SearchBar only when not viewing movie details */}
          {!selectedMovie && <SearchBar onSearch={handleSearch} />}

          {/* Error Message */}
          {error && !loading && !loadingDetails && (
            <ErrorMessage
              message={error}
              onRetry={() => setError('')}
            />
          )}

          {/* Movie Details View */}
          {selectedMovie && !loadingDetails && (
            <MovieDetails
              movie={selectedMovie}
              onBack={handleBackToResults}
            />
          )}

          {/* Loading Movie Details */}
          {loadingDetails && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-300">Loading movie details...</p>
            </div>
          )}

          {/* Loading Search Results */}
          {loading && !selectedMovie && <LoadingSpinner />}

          {/* Movie Results */}
          {!loading && !selectedMovie && hasSearched && movies.length > 0 && (
            <div className="max-w-6xl mx-auto mb-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Search Results for "{currentSearchQuery}" ({movies.length} movie{movies.length !== 1 ? 's' : ''} found)
              </h2>
              <MovieList movies={movies} onMovieClick={handleMovieClick} />
            </div>
          )}

          {/* No Results Message */}
          {!loading && !selectedMovie && hasSearched && movies.length === 0 && !error && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">
                🎬 No movies found for "{currentSearchQuery}"
              </p>
              <p className="text-gray-400 mt-2">
                Try searching for another movie!
              </p>
            </div>
          )}

          {/* Welcome Message */}
          {!hasSearched && !loading && !selectedMovie && (
            <div className="py-12">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <p className="text-gray-300 text-xl mb-6">
                  🎬 Welcome to Movie Mash!
                </p>
                <p className="text-gray-400 mb-8">
                  Search for your favorite movies above to get started.
                </p>

                {/* Popular Search Suggestions */}
                <div className="mb-8">
                  <p className="text-gray-400 text-sm mb-4">Popular searches:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['Marvel', 'Batman', 'Comedy', 'Horror', 'Action', 'Disney'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSearch(suggestion.toLowerCase())}
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white transition-colors text-sm"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search History */}
                <div className="max-w-md mx-auto mb-12">
                  <SearchHistory onSearchSelect={handleSearch} />
                </div>
              </div>

              {/* Trending Movies Section */}
              <div className="max-w-7xl mx-auto">
                <TrendingMovies onMovieSelect={handleMovieClick} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
