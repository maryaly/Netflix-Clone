import React, { useState } from 'react';
import './Search.css'
import { fetchMovies } from '../../api/tmdb.js';
import MovieCard from '../../components/MovieCard/MovieCard.jsx';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="movies-container">
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Search
