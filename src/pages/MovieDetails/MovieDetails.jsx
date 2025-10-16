import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/tmdb.js';
import './MovieDetails.css'
import { IMAGE_URL2 } from '../../utils/Constances/Constance';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={`${IMAGE_URL2}${movie.poster_path}`} alt={movie.title}/>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: ⭐ {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
