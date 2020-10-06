import React from 'react';
import { useDispatch } from "react-redux";
import "./Meme.css"

function Meme({imgURL, topText, bottomText, id}) {
    const dispatch = useDispatch();
    const remove = () => dispatch({ type: "REMOVE_MEME", id: id});
    return (
        <div className="memeContainer">
            <img className="memeImage" src={imgURL}/>
            <p className="memeTopText">{topText}</p>
            <p className="memeBottomText">{bottomText}</p>
            <button className="deleteButton" onClick={remove}>Delete</button>
        </div>
    )
}

export default Meme;