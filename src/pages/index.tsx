import React, { useState } from "react";
import RootLayout from "@/app/layout";
import ListTrending from "@/components/ListTrending";
import ListNowPlaying from "@/components/ListNowPlaying";
import ListTopRated from "@/components/ListTopRated";
import SideBar from "@/components/SideBar";
import SearchField from "@/components/SearchField";

const HomePage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // State to store search results

  // Function to handle search results
  const handleSearchResults = (results: any[]) => {
    setSearchResults(results);
  };

  return (
    <RootLayout>
      <SearchField onSearch={handleSearchResults} />
      <div className="flex">
      <SideBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ListTrending />
        <ListNowPlaying />
        <ListTopRated />
      </main>
      </div>
    </RootLayout>
  );
};

export default HomePage;
