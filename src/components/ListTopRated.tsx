// Takes a poster conatiner that lists the top rated movies by using the posters of the movies

import React, { useState, useEffect } from "react";
import PosterContainer from "./PosterContainer";
import topRated from "@/lib/api/top-rated";

// PosterContainer takes a list of movies and displays the posters, titles and rates of the movies
const ListTopRated: React.FC = () => {
  const [movies, setMovies] = useState<Array<any>>([]);

  // Get the top rated movies
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
        try {
            const topRatedMovies = await topRated();
            console.log("Now playing movies:", topRatedMovies);
            setMovies(topRatedMovies);
        } catch (error) {
            console.error("Trending movies error:", error);
        }
    };

    fetchTopRatedMovies();

    // Cleanup function (optional)
    return () => {
        // Any cleanup code can go here
    };
}, []);

  return (
    <div>
      <h2 className={`mb-3 text-2xl font-semibold`}>Top rated</h2>
      <PosterContainer movies={movies} />
    </div>
  );
};

export default ListTopRated;