import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/PlayList';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const updateName = (name) =>{
      setPlaylistName(name);
  }

  const search = (input) =>{
    //search in spotify the given input
    //update searchResults
  };

  const addTrack = (track) =>{

    if(!playlistTracks.includes(track.id)){
      setPlaylistTracks((prev)=> [...prev, track]);
    }

  }

  const removeTrack = (track) =>{

    if(playlistTracks.includes(track.id)){
      setPlaylistTracks((prev)=> prev.filter((currTrack)=> currTrack.id !== track.id));
    }

  }


  return (
    <div >
      <h1>Ja<span className="Blue">m</span><span className="White">m</span><span className="Red">m</span>ing</h1>

      <div className="App">

        <SearchBar onSearch={search}/>

        <div className="App-playlist">

          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updateName}
            onRemove={removeTrack}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
 