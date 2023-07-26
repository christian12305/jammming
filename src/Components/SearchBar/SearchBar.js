import React, {useEffect, useState} from 'react';
import './SearchBar.css';

function SearchBar(props){

    const [input, setInput] = useState("");

    const search = () =>{
        props.onSearch(input);
    }

    const handleChange = () =>{
        
    }

    return (
        <div className ="SearchBar">
            <input placeholder="Entre una canción, álbum o artista" onChange={handleChange}/>
            <button className="SearchButton" onClick={search}>
                BUSCAR
            </button>
        </div>
    );
    
}

export default SearchBar;