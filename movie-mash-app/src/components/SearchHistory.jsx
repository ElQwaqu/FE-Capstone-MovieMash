import { useState, useEffect } from 'react'
import { getSearchHistory, clearSearchHistory, removeFromSearchHistory } from '../services/searchHistoryService'

function SearchHistory({ onSearchSelect, className = '' }) {
    const [history, setHistory] = useState([])
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        loadHistory()
    }, [])

    const loadHistory = () => {
        const searchHistory = getSearchHistory()
        setHistory(searchHistory)
    }

    const handleClearAll = () => {
        clearSearchHistory()
        setHistory([])
    }

    const handleRemoveItem = (searchTerm, e) => {
        e.stopPropagation() // Prevent triggering the search
        const updatedHistory = removeFromSearchHistory(searchTerm)
        setHistory(updatedHistory)
    }

    const handleSearchSelect = (searchTerm) => {
        onSearchSelect(searchTerm)
    }

    if (history.length === 0) {
        return null
    }

    const displayHistory = isExpanded ? history : history.slice(0, 4)

    return (
        <div className={`bg-gray-800 rounded-lg p-4 border border-gray-700 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold flex items-center gap-2">
                    🕒 Recent Searches
                </h3>
                <button
                    onClick={handleClearAll}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                    title="Clear all search history"
                >
                    Clear All
                </button>
            </div>

            {/* History Items */}
            <div className="space-y-2">
                {displayHistory.map((searchTerm, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer group"
                        onClick={() => handleSearchSelect(searchTerm)}
                    >
                        <span className="text-gray-300 group-hover:text-white truncate">
                            {searchTerm}
                        </span>
                        <button
                            onClick={(e) => handleRemoveItem(searchTerm, e)}
                            className="text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all ml-2 flex-shrink-0"
                            title="Remove from history"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            {/* Show More/Less Button */}
            {history.length > 4 && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full mt-3 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                >
                    {isExpanded ? 'Show Less' : `Show ${history.length - 4} More`}
                </button>
            )}

            {/* Footer */}
            <div className="mt-3 pt-3 border-t border-gray-700">
                <p className="text-gray-500 text-xs text-center">
                    💡 Click any search to run it again
                </p>
            </div>
        </div>
    )
}

export default SearchHistory
