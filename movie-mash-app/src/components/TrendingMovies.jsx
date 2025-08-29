import { useState, useEffect } from 'react'
import { getTrendingMovies } from '../services/movieService'
import MovieCard from './MovieCard'
import LoadingSpinner from './LoadingSpinner'

function TrendingMovies({ onMovieSelect }) {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        loadTrendingMovies()
    }, [])

    const loadTrendingMovies = async () => {
        setLoading(true)
        setError('')

        const result = await getTrendingMovies()

        if (result.success) {
            setTrendingMovies(result.movies)
        } else {
            setError(result.error)
        }

        setLoading(false)
    }

    const refreshTrending = () => {
        loadTrendingMovies()
    }

    if (loading) {
        return (
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        🔥 Trending Now
                    </h2>
                </div>
                <div className="flex justify-center py-8">
                    <LoadingSpinner />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        🔥 Trending Now
                    </h2>
                    <button
                        onClick={refreshTrending}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
                <div className="text-center py-8">
                    <p className="text-gray-400 mb-4">{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    🔥 Trending Now
                </h2>
                <button
                    onClick={refreshTrending}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 border border-gray-600"
                    title="Refresh trending movies"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Refresh
                </button>
            </div>

            {/* Movies Grid */}
            {trendingMovies.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {trendingMovies.map((movie) => (
                        <div key={movie.imdbID} className="transform hover:scale-105 transition-transform duration-300">
                            <MovieCard
                                movie={movie}
                                onClick={() => onMovieSelect(movie.imdbID)}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-8">
                    <p className="text-gray-400">No trending movies available</p>
                </div>
            )}

            {/* Footer note */}
            <div className="mt-6 pt-4 border-t border-gray-700">
                <p className="text-gray-500 text-sm text-center">
                    💡 Trending movies are curated from popular titles. Click refresh for a new selection!
                </p>
            </div>
        </div>
    )
}

export default TrendingMovies
