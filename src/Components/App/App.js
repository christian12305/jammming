import React, {useState} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/PlayList';
import Spotify from '../../Modules/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Nuevo Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const updateName = (name) =>{
      setPlaylistName(name);
  }

  const search = (input) =>{
    if(input !== '')
      Spotify.search(input).then(setSearchResults);
  }

  const addTrack = (track) =>{

    if(!playlistTracks.includes(track)){
      setPlaylistTracks((prev)=> [...prev, track]);
    }

  }

  const removeTrack = (track) =>{

    if(playlistTracks.includes(track)){
      setPlaylistTracks((prev) => 
        prev.filter((currTrack)=> currTrack.id !== track.id));
    }

  }

  const savePlaylist = () =>{
    const uris = playlistTracks.map((track)=> track.uri);
    //saves playlist and clears for a new one
    Spotify.savePlaylist(playlistName, uris).then(()=>{
      updateName("Nuevo Playlist");
      setPlaylistTracks([]);
    })
  }

  return (
    <div >
      <h1>Ja<span className="Green">mmm</span>ing</h1>

      <div className="App">

        <SearchBar onSearch={search}/>

        <div className="App-playlist">

          <SearchResults searchResults={searchResults} onAdd={addTrack}/>
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updateName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
 