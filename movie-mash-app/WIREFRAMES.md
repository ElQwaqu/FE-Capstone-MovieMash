# 🎬 Movie Database App - Wireframes

## 1. Home/Search Screen
```
┌─────────────────────────────────────────────────────────────────┐
│                        🎬 MOVIE MASH                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│    ┌─────────────────────────────────────────┐  [🔍 Search]     │
│    │  Search for movies...                   │                  │
│    └─────────────────────────────────────────┘                  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │              Welcome to Movie Mash!                        │ │
│  │         Search for your favorite movies above              │ │
│  │                                                             │ │
│  │               [🎭 Start Searching]                          │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 2. Search Results Screen
```
┌─────────────────────────────────────────────────────────────────┐
│                        🎬 MOVIE MASH                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│    ┌─────────────────────────────────────────┐  [🔍 Search]     │
│    │  avengers                               │                  │
│    └─────────────────────────────────────────┘                  │
│                                                                 │
│  Search Results for "avengers" (3 movies found)                │
│                                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                         │
│  │ [POSTER]│  │ [POSTER]│  │ [POSTER]│                         │
│  │   IMG   │  │   IMG   │  │   IMG   │                         │
│  │         │  │         │  │         │                         │
│  └─────────┘  └─────────┘  └─────────┘                         │
│  Avengers      Avengers:    Avengers:                          │
│  (2012)        Age of       Endgame                             │
│                Ultron       (2019)                              │
│                (2015)                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 3. Movie Details Screen
```
┌─────────────────────────────────────────────────────────────────┐
│ [← Back to Results]              🎬 MOVIE MASH                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐   ┌─────────────────────────────────────────┐  │
│  │             │   │  Avengers: Endgame (2019)              │  │
│  │   [POSTER]  │   │                                         │  │
│  │     IMG     │   │  ⭐ 8.4/10 (IMDB)                       │  │
│  │             │   │  🍅 94% (Rotten Tomatoes)               │  │
│  │             │   │                                         │  │
│  └─────────────┘   │  📖 Plot:                               │  │
│                    │  After the devastating events of        │  │
│                    │  Avengers: Infinity War, the universe  │  │
│                    │  is in ruins...                         │  │
│                    │                                         │  │
│                    │  🎭 Cast:                               │  │
│                    │  Robert Downey Jr., Chris Evans,       │  │
│                    │  Mark Ruffalo, Chris Hemsworth         │  │
│                    │                                         │  │
│                    │  🎬 Genre: Action, Adventure, Drama     │  │
│                    │  ⏱️ Runtime: 181 min                    │  │
│                    └─────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 4. Loading State
```
┌─────────────────────────────────────────────────────────────────┐
│                        🎬 MOVIE MASH                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│    ┌─────────────────────────────────────────┐  [🔍 Search]     │
│    │  batman                                 │                  │
│    └─────────────────────────────────────────┘                  │
│                                                                 │
│                                                                 │
│                       ⏳ Loading...                             │
│                   Searching for movies...                      │
│                                                                 │
│                      [SPINNER ANIMATION]                       │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 5. Error State
```
┌─────────────────────────────────────────────────────────────────┐
│                        🎬 MOVIE MASH                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│    ┌─────────────────────────────────────────┐  [🔍 Search]     │
│    │  xyz123invalid                          │                  │
│    └─────────────────────────────────────────┘                  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                      ❌ Oops!                               │ │
│  │                                                             │ │
│  │           No movies found for "xyz123invalid"              │ │
│  │                                                             │ │
│  │              Try searching for another movie!              │ │
│  │                                                             │ │
│  │                   [🔄 Try Again]                            │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 6. Mobile View (Movie Results)
```
┌─────────────────────┐
│   🎬 MOVIE MASH     │
├─────────────────────┤
│ ┌─────────────────┐ │
│ │ Search movies...│ │
│ └─────────────────┘ │
│        [🔍]         │
│                     │
│ Results for "action"│
│                     │
│ ┌─────────────────┐ │
│ │    [POSTER]     │ │
│ │      IMG        │ │
│ └─────────────────┘ │
│ Action Movie 1      │
│ (2023)             │
│                     │
│ ┌─────────────────┐ │
│ │    [POSTER]     │ │
│ │      IMG        │ │
│ └─────────────────┘ │
│ Action Movie 2      │
│ (2022)             │
│                     │
└─────────────────────┘
```

---

## 🎨 Design Guidelines

### Colors (Tailwind Classes)
- **Primary**: `bg-blue-600`, `text-blue-600`
- **Background**: `bg-gray-50`, `bg-gray-900` (for dark areas)
- **Text**: `text-gray-800`, `text-gray-600`, `text-white`
- **Accent**: `text-yellow-500` (for ratings/stars)

### Typography
- **Header**: `text-3xl font-bold`
- **Movie Titles**: `text-xl font-semibold`
- **Body Text**: `text-base`
- **Meta Info**: `text-sm text-gray-600`

### Components Spacing
- **Padding**: `p-4`, `p-6` for containers
- **Margins**: `mb-4`, `mr-4` for spacing
- **Grid**: `grid-cols-1 md:grid-cols-3 lg:grid-cols-4` for responsive movie cards

### Interactive Elements
- **Buttons**: Rounded corners, hover effects
- **Cards**: Shadow, hover animations
- **Search**: Focus states, clear button

---

## 🏗️ Component Breakdown

1. **Header** - App title and navigation
2. **SearchBar** - Input field with search button
3. **MovieCard** - Poster, title, year, click handler
4. **MovieGrid** - Responsive grid layout for cards
5. **MovieDetails** - Full movie information layout
6. **LoadingSpinner** - Animated loading indicator
7. **ErrorMessage** - User-friendly error display
8. **EmptyState** - Welcome message when no search yet

This wireframe gives us a clear visual guide for what we're building. Each screen has a specific purpose and the layout is simple but effective!
