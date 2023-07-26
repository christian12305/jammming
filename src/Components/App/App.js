import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/PlayList';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = (input) =>{
    //search in spotify the given input
  };

  return (
    <div >
      <h1>Ja<span className="Blue">m</span><span className="White">m</span><span className="Red">m</span>ing</h1>

      <div className="App">

        <SearchBar onSearch={search}/>

        <div className="App-playlist">

          {/**
           * Add a SearchResults
           * Add a Playlist
           */}

          <SearchResults searchResults={searchResults}/>
          <Playlist />

        </div>
      </div>
    </div>
  );
}

export default App;
 