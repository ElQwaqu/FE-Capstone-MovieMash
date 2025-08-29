function LoadingSpinner() {
    return (
        <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-6"></div>
            <p className="text-gray-300 text-lg">
                🎬 Searching for movies...
            </p>
        </div>
    )
}

export default LoadingSpinner
