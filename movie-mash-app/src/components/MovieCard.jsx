function MovieCard({ movie, onClick }) {
  // Handle missing poster image
  const posterUrl = movie.Poster && movie.Poster !== 'N/A'
    ? movie.Poster
    : 'https://via.placeholder.com/400x600/374151/9CA3AF?text=No+Image'

  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer group"
      onClick={() => onClick(movie)}
    >
      {/* Movie Poster */}
      <div className="aspect-[2/3] bg-gray-700 relative overflow-hidden">
        <img
          src={posterUrl}
          alt={movie.Title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x600/374151/9CA3AF?text=No+Image'
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
          {movie.Title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-xs">
            {movie.Year}
          </p>
          {movie.Type && (
            <p className="text-blue-400 text-xs capitalize bg-gray-700 px-2 py-1 rounded">
              {movie.Type}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
