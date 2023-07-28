import React, {useEffect, useState} from 'react';
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
            <input placeholder="Entre el título de una canción" onChange={handleChange}/>
            <button className="SearchButton" onClick={search}>
                BUSCAR
            </button>
        </div>
    );
    
}

export default SearchBar;