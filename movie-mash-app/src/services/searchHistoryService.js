// Search History Management
const SEARCH_HISTORY_KEY = 'movieMash_searchHistory'
const MAX_HISTORY_ITEMS = 8

export const getSearchHistory = () => {
    try {
        const history = localStorage.getItem(SEARCH_HISTORY_KEY)
        return history ? JSON.parse(history) : []
    } catch {
        return []
    }
}

export const addToSearchHistory = (searchTerm) => {
    try {
        if (!searchTerm || searchTerm.trim() === '') return

        const normalizedTerm = searchTerm.trim().toLowerCase()
        let history = getSearchHistory()

        // Remove if already exists (to avoid duplicates)
        history = history.filter(term => term.toLowerCase() !== normalizedTerm)

        // Add to beginning
        history.unshift(searchTerm.trim())

        // Keep only the latest MAX_HISTORY_ITEMS
        history = history.slice(0, MAX_HISTORY_ITEMS)

        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history))
        return history
    } catch {
        return []
    }
}

export const clearSearchHistory = () => {
    try {
        localStorage.removeItem(SEARCH_HISTORY_KEY)
        return []
    } catch {
        return []
    }
}

export const removeFromSearchHistory = (searchTerm) => {
    try {
        const normalizedTerm = searchTerm.toLowerCase()
        let history = getSearchHistory()
        history = history.filter(term => term.toLowerCase() !== normalizedTerm)
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history))
        return history
    } catch {
        return getSearchHistory()
    }
}
