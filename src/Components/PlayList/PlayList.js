import React, { useState } from 'react';
import TrackList from '../TrackList/Tracklist';

const PlayList = (props) =>{

    const handleChange = (event) =>{
        props.onNameChange(event.target.value);
    }
    
    return (
        <div className="Playlist">
            <input onChange={handleChange} defaultValue={props.playlistName}/>
            <TrackList 
                tracks={props.playlistTracks}
                isRemovable={true}
                onRemove={props.onRemove}
            />
            <button className="Playlist-save" onClick={props.onSave}>Save to Spotify</button>
        </div>
    );
}

export default PlayList;