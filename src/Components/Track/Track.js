import React from 'react';
import './Track.css';

const Track = (props) =>{

    const addTrack = () =>{
        props.onAdd(props.track);
    }

    const removeTrack = () =>{
        props.onRemove(props.track);
    }

    const addFunctionality = () =>{
        if(props.isRemovable){
            return(
                <button className="Track-action" onClick={removeTrack}>-</button>
            )
        }
        return(
            <button className="Track-action" onClick={addTrack}>+</button>
        )

    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {addFunctionality()}
        </div>
    );
}

export default Track;