import React from 'react';
import './MovieCard.css'
import { Link, useNavigate } from 'react-router-dom';
import { IMAGE_URL2 } from '../../utils/Constances/Constance';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/200x270?text=No+Image';

const MovieCard = ({ movie }) => {

  const navigate = useNavigate();

   // Determine which image to show
  const posterSrc = movie.poster_path ? `${IMAGE_URL2}${movie.poster_path}` : PLACEHOLDER_IMAGE;


  return (
    <div className="movie-card" onClick={() => {
      if (movie.key) {
        navigate("/movie", { state: { key: movie.key } })
      } else {
        navigate(`/movie/${movie.id}`);
      }
    }}>
      <img
        src={posterSrc}
        alt={movie.title || 'Movie Poster'}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = PLACEHOLDER_IMAGE; // Fallback image
        }}
      />
      <p>{movie.original_title}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
