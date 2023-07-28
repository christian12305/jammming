import React, { useState } from 'react';
import TrackList from '../TrackList/Tracklist';

const PlayList = (props) =>{

    const handleChange = (event) =>{
        props.onNameChange(event.target.value);
    }
    
    return (
        <div className="Playlist">
            <input onChange={handleChange}/>
            <TrackList 
                tracks={props.playlistTracks}
            />
        </div>
    );
}

export default PlayList;