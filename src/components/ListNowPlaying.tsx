// Takes a poster conatiner that lists the now playing movies by using the posters of the movies

import React, { useState, useEffect } from "react";
import PosterContainer from "./PosterContainer";
import nowPlaying from "@/lib/api/now-playing";

// PosterContainer takes a list of movies and displays the posters, titles and rates of the movies
const ListNowPlaying: React.FC = () => {
    const [movies, setMovies] = useState<Array<any>>([]);

    useEffect(() => {
        const fetchNowPlayingMovies = async () => {
            try {
                const nowPlayingMovies = await nowPlaying();
                console.log("Now playing movies:", nowPlayingMovies);
                setMovies(nowPlayingMovies);
            } catch (error) {
                console.error("Trending movies error:", error);
            }
        };

        fetchNowPlayingMovies();

        // Cleanup function (optional)
        return () => {
            // Any cleanup code can go here
        };
    }, []);

    return (
        <div>
            <h2 className={`mb-3 text-2xl font-semibold`}>Now playing</h2>
            <PosterContainer movies={movies} />
        </div>
    );
};

export default ListNowPlaying;