import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/Tracklist'

const SearchResults = (props) =>{
    return (
        <div className='SearchResults'>
            <h2>Your results:</h2>
            <TrackList tracks={props.searchResults}/>
        </div>
    );
}

export default SearchResults;