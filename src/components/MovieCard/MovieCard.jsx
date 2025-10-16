import React from 'react';
import './MovieCard.css'
import { Link, useNavigate } from 'react-router-dom';
import { IMAGE_URL2 } from '../../utils/Constances/Constance';
import Button from '@mui/material/Button';

const MovieCard = ({ movie }) => {

  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => {
      if (movie.key) {
        navigate("/movie", { state: { key: movie.key } })
      } else {
        navigate(`/movie/${movie.id}`);
      }
    }}>
      <img
        src={`${IMAGE_URL2}${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
