import React, {useState, useEffect } from "react";
import { getMoviesByGenre } from "@/lib/api/discover";
import PosterContainer from "./PosterContainer";

const ListMoviesGenre = ({ genre }: { genre: string }) => {

    const [movies, setMovies] = useState<Array<any>>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await getMoviesByGenre(genre);
                setMovies(movies);
            } catch (error) {
                console.error("ListMoviesGenre error:", error);
            }
        };

        fetchMovies();
    }, [genre]);

    return (
        <div>
            <h2 className={`mb-3 text-2xl font-semibold`}>Movies</h2>
            <PosterContainer movies={movies} />
        </div>
    );
}

export default ListMoviesGenre;
