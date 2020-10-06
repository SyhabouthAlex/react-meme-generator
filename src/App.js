import React from 'react';
import NewMemeForm from "./NewMemeForm";
import Meme from "./Meme";
import { useSelector } from "react-redux";
import './App.css';

function App() {
  const memes = useSelector(state => state.memes);
  return (
    <div className="App">
      <NewMemeForm/>
      {memes.map((meme) => (
        <Meme 
        key={meme.id}
        imgURL={meme.imageURL} 
        topText={meme.topText} 
        bottomText={meme.bottomText} 
        id={meme.id}
        />
      ))}
    </div>
  );
}

export default App;
