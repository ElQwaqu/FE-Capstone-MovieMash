function ErrorMessage({ message, onRetry }) {
    return (
        <div className="max-w-md mx-auto text-center py-12">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
                <div className="text-6xl mb-4">❌</div>
                <h3 className="text-xl font-semibold text-white mb-2">Oops!</h3>
                <p className="text-gray-300 mb-6">{message}</p>

                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
                    >
                        🔄 Try Again
                    </button>
                )}

                {!onRetry && (
                    <p className="text-sm text-gray-400">
                        Try searching for another movie!
                    </p>
                )}
            </div>
        </div>
    )
}

export default ErrorMessage
