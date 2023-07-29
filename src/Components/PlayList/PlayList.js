import TrackList from '../TrackList/Tracklist';
import './Playlist.css'

const PlayList = (props) =>{

    const handleChange = (event) =>{
        props.onNameChange(event.target.value);
    }
    
    return (
        <div className="Playlist">
            <input onChange={handleChange} value={props.playlistName} onFocus={(e) => e.target.select()}/>
            <TrackList 
                tracks={props.playlistTracks}
                isRemovable={true}
                onRemove={props.onRemove}
            />
            <button className="Playlist-save" onClick={props.onSave}>
                GUARDAR EN SPOTIFY
            </button>
        </div>
    );
}

export default PlayList;