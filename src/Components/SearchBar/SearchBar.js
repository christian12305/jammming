import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar(props){

    const [input, setInput] = useState("");

    const search = () =>{
        props.onSearch(input);
    }

    const handleChange = (event) =>{
        setInput(event.target.value);
    }

    return (
        <div className ="SearchBar">
            <input placeholder="Entre una canción, artista o álbum" onChange={handleChange} onFocus={(e) => e.target.select()}/>
            <button className="SearchButton" onClick={search}>
                BUSCAR
            </button>
        </div>
    );
    
}

export default SearchBar;