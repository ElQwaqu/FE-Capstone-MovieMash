import MovieCard from './MovieCard'

function MovieList({ movies, onMovieClick }) {
  // Show message if no movies
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-300 text-lg">
          🎬 No movies found. Try searching for something!
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Movie Grid - Larger cards with better spacing */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={onMovieClick}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieList
