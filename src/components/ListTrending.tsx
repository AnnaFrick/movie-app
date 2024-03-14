// Takes a poster conatiner that lists the trending movies by using the posters of the movies
// Uses the lib/api/trending to get the trending movies


import React, { useState, useEffect } from "react";
import PosterContainer from "./PosterContainer";
import trending from "@/lib/api/trending";

// PosterContainer takes a list of movies and displays the posters, titles and rates of the movies
const ListTrending: React.FC = () => {
  const [movies, setMovies] = useState<Array<any>>([]);

  // Get the trending movies
  useEffect(() => {
    const fetchTrendingMovies = async () => {
        try {
            const trendingMovies = await trending();
            console.log("Now playing movies:", trendingMovies);
            setMovies(trendingMovies);
        } catch (error) {
            console.error("Trending movies error:", error);
        }
    };

    fetchTrendingMovies();

    // Cleanup function (optional)
    return () => {
        // Any cleanup code can go here
    };
}, []);

  return (
    <div>
      <h2 className={`mb-3 text-2xl font-semibold`}>Trending</h2>
      <PosterContainer movies={movies} />
    </div>
  );
};

export default ListTrending;
