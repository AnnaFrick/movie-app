import React, { useState } from 'react';
import RootLayout from '@/app/layout';
import SideBar from '@/components/SideBar';
import SearchField from '@/components/SearchField';
import ListSearchResults from '@/components/ListSearchResults';

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // State to store search results

  // Function to handle search results
  const handleSearchResults = (results: any[]) => {
    setSearchResults(results);
  };

  return (
    <RootLayout>
      <div className="flex">
        <SideBar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <SearchField onSearch={handleSearchResults} /> {/* Pass handleSearchResults function as prop */}
          {/* Display search results */}
          {searchResults.length > 0 && (
            <div>
              <h2>Search Results</h2>
              <ListSearchResults results={searchResults} /> {/* Pass search results to ListSearchResults component */}
            </div>
          )}
        </main>
      </div>
    </RootLayout>
  );
};

export default SearchPage;
