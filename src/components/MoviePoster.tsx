// A poster for a movie
// Includes showing a .jpg, the title of the movie, and the rate of the movie

import React from 'react';
import { Movie } from './types';

interface MoviePosterProps {
    movie: Movie;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ movie }) => {
    const { poster_path, original_title, popularity } = movie;
    const fullPosterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className="relative text-center">
      <img
        src={fullPosterPath}
        alt={original_title}
        className="border-slate transition duration-300 hover:border-white hover:border-solid"
      />
      {/* Overlay for title and popularity */}
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-300 hover:opacity-100">
        <h2 className="text-lg font-semibold text-white">{original_title}</h2>
        <p className="text-sm text-gray-200">Popularity: {popularity}</p>
      </div>
    </div>
    );
};

export default MoviePoster;
