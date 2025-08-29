import { useState } from 'react'

function SearchBar({ onSearch }) {
    // React State: This stores what the user types
    const [searchQuery, setSearchQuery] = useState('')

    // Event Handler: This runs when user types in the input
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    // Event Handler: This runs when user clicks Search button
    const handleSearch = () => {
        if (searchQuery.trim()) {
            onSearch(searchQuery.trim())
            // Don't clear the search query so user can see what they searched
        }
    }

    // Event Handler: This runs when user presses Enter
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className="max-w-lg mx-auto mb-12">
            <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                    type="button"
                    onClick={handleSearch}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                    disabled={!searchQuery.trim()}
                >
                    🔍 Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar