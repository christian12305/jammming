import React, {useState} from 'react';
import TrackList from '../TrackList/Tracklist';
import './Playlist.css';

const PlayList = (props) =>{

    const [buttonText, setButtonText] = useState('GUARDAR EN SPOTIFY');
    const [playlistContent, setPlaylistContent] = useState('');

    const handleChange = (event) =>{
        props.onNameChange(event.target.value);
    }

    const handleClick = (event) =>{
        
        props.onSave(event.target);
        
        setTimeout(()=>{
            setButtonText('GUARDADO!!');
            setPlaylistContent('El playlist ha sido guardado exitosamente!')
        }, 1000);

        setTimeout(()=>{
            setButtonText('GUARDAR EN SPOTIFY');
            setPlaylistContent('');
        }, 5000)
        
    }
    
    return (
        <div className="Playlist">
            <input onChange={handleChange} value={props.playlistName} onFocus={(e) => e.target.select()}/>
            <TrackList 
                tracks={props.playlistTracks}
                isRemovable={true}
                onRemove={props.onRemove}
            />
            <h2 className='Playlist-saved'>{playlistContent}</h2>
            <button className="Playlist-save" onClick={handleClick}>
                {buttonText}
            </button>
        </div>
    );
}

export default PlayList;