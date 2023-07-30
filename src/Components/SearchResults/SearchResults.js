import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/Tracklist'

const SearchResults = (props) =>{
    return (
        <div className='SearchResults'>
            <h2>Resultados:</h2>
            <TrackList 
                tracks={props.searchResults} 
                onAdd={props.onAdd}
                isRemovable={false}
            />
        </div>
    );
}

export default SearchResults;