function MovieDetails({ movie, onBack }) {
    // Create star rating display
    const renderStarRating = (rating) => {
        const numRating = parseFloat(rating)
        const stars = Math.round(numRating / 2) // Convert 10-point to 5-star
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < stars ? 'text-yellow-500' : 'text-gray-600'}`}>
                        ⭐
                    </span>
                ))}
                <span className="ml-2 text-gray-300">{rating}/10</span>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto">
            {/* Back Button - Floating */}
            <div className="mb-6">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 border border-gray-700"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Results
                </button>
            </div>

            {/* Main Content */}
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                <div className="p-8">
                    <div className="lg:flex gap-8">
                        {/* Movie Poster */}
                        <div className="lg:w-1/3 mb-8 lg:mb-0">
                            <div className="relative group">
                                <img
                                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600/374151/9CA3AF?text=No+Image'}
                                    alt={movie.Title}
                                    className="w-full rounded-lg shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x600/374151/9CA3AF?text=No+Image'
                                    }}
                                />
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        {/* Movie Info */}
                        <div className="lg:w-2/3">
                            {/* Title */}
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                {movie.Title}
                            </h1>

                            {/* Meta Information */}
                            <div className="flex flex-wrap gap-6 mb-6">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <span className="text-blue-400">📅</span>
                                    <span>{movie.Year}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <span className="text-blue-400">🎬</span>
                                    <span className="capitalize">{movie.Type}</span>
                                </div>
                                {movie.Runtime && (
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <span className="text-blue-400">⏱️</span>
                                        <span>{movie.Runtime}</span>
                                    </div>
                                )}
                                {movie.Rated && movie.Rated !== 'N/A' && (
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 bg-yellow-600 text-black text-xs font-bold rounded">
                                            {movie.Rated}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Rating */}
                            {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-2">Rating</h3>
                                    {renderStarRating(movie.imdbRating)}
                                </div>
                            )}

                            {/* Genre Tags */}
                            {movie.Genre && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Genres</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {movie.Genre.split(', ').map((genre, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors"
                                            >
                                                {genre}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Plot */}
                            {movie.Plot && movie.Plot !== 'N/A' && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Plot</h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">{movie.Plot}</p>
                                </div>
                            )}

                            {/* Cast */}
                            {movie.Actors && movie.Actors !== 'N/A' && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Cast</h3>
                                    <p className="text-gray-300">{movie.Actors}</p>
                                </div>
                            )}

                            {/* Director */}
                            {movie.Director && movie.Director !== 'N/A' && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-3">Director</h3>
                                    <p className="text-gray-300">{movie.Director}</p>
                                </div>
                            )}

                            {/* Additional Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {movie.Country && movie.Country !== 'N/A' && (
                                    <div className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="text-white font-semibold mb-1">Country</h4>
                                        <p className="text-gray-300 text-sm">{movie.Country}</p>
                                    </div>
                                )}
                                {movie.Language && movie.Language !== 'N/A' && (
                                    <div className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="text-white font-semibold mb-1">Language</h4>
                                        <p className="text-gray-300 text-sm">{movie.Language}</p>
                                    </div>
                                )}
                                {movie.BoxOffice && movie.BoxOffice !== 'N/A' && (
                                    <div className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="text-white font-semibold mb-1">Box Office</h4>
                                        <p className="text-gray-300 text-sm">{movie.BoxOffice}</p>
                                    </div>
                                )}
                                {movie.Awards && movie.Awards !== 'N/A' && (
                                    <div className="bg-gray-700 p-4 rounded-lg">
                                        <h4 className="text-white font-semibold mb-1">Awards</h4>
                                        <p className="text-gray-300 text-sm">{movie.Awards}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
