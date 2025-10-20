import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/tmdb.js';
import './MovieDetails.css'
import { IMAGE_URL2 } from '../../utils/Constances/Constance';

// Placeholder image URL
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/300x450?text=No+Image';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

if (!movie) return <p>Loading...</p>;

const posterSrc = movie.poster_path ? `${IMAGE_URL2}${movie.poster_path}` : PLACEHOLDER_IMAGE;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img
        src={posterSrc}
        alt={movie.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = PLACEHOLDER_IMAGE;
        }}
      />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: ⭐ {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
