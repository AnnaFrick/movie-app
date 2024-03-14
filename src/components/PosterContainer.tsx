// Container that lists the posters of the movies

import React from "react";
import MoviePoster from "./MoviePoster";

interface PosterContainerProps {
    movies: Array<any>;
}

// MoviePoster takes a movie object and displays the poster, title and rate of the movie
const PosterContainer: React.FC<PosterContainerProps> = ({ movies }) => {

    const limitedMovies = movies.slice(0, 5);
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
            {limitedMovies.map((movie) => (
                <MoviePoster
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
};

export default PosterContainer;
