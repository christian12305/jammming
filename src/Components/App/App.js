import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'

function App() {

  const search = () =>{

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

        </div>
      </div>
    </div>
  );
}

export default App;
 