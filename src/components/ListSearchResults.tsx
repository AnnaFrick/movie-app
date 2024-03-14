import React, {useState, useEffect} from 'react';
import PosterContainer from './PosterContainer';

interface ListSearchResultsProps {
  results: any[]; // Array of search results
}

// Function being called from SearchField component
// Function to receive search results and display them


const ListSearchResults: React.FC<ListSearchResultsProps> = ({ results }) => {

    const [movies, setMovies] = useState<Array<any>>([]);

    const calledFromSearchField = (results: any[]) => {
        setMovies(results);
    }

  return (
    <div>
      <h2>Search Results</h2>
        <PosterContainer movies={results} />    
    </div>
  );
};

export default ListSearchResults;
