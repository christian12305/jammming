import React from 'react';

const Track = (props) =>{

    const addTrack = () =>{
        props.onAdd(props.track);
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
            </div>
            <button className="Track-action" onClick={addTrack}>+</button>
        </div>
    );
}

export default Track;