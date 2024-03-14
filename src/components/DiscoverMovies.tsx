import React, { useState, useEffect } from "react";
import { getGenres } from "@/lib/api/discover";
import ListMoviesGenre from "./ListMoviesGenre";

// Lists the genres of the movies
const DiscoverMovies: React.FC = () => {
    const [genres, setGenres] = useState<Array<any>>([]);
    const [selectedGenre, setSelectedGenre] = useState<string>("");

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genres = await getGenres();
                setGenres(genres);
            } catch (error) {
                console.error("ListGenres error:", error);
            }
        };

        fetchGenres();
    }, []);

    const handleGenreClick = (genreId: string) => {
        setSelectedGenre(genreId);
    };

    return (
        <div>
            <h2>Genres</h2>
            <ul className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <button
                            className="border border-white rounded-lg p-2 mb-2 hover:bg-gray-800 hover:border-gray-300 transition-colors"
                            onClick={() => handleGenreClick(genre.id)}
                        >
                            {genre.name}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedGenre && <ListMoviesGenre genre={selectedGenre} />}
        </div>
    );
};

export default DiscoverMovies;