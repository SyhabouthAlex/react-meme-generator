import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import "./NewMemeForm.css";

function NewMemeForm() {
    const INITIAL_STATE = {
        imageURL: "",
        topText: "",
        bottomText: ""
    }
    const dispatch = useDispatch();
    const addMeme = (formData) => dispatch({type : "ADD_MEME", meme : {...formData, id: Math.floor(Math.random() * 10000)}});

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addMeme(formData);
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="imageURL">Image URL : </label>
            <input onChange={handleChange} name="imageURL" type="url"></input><br/>
            <label htmlFor="topText">Top Text : </label>
            <input onChange={handleChange} name="topText" type="text"></input><br/>
            <label htmlFor="bottomText">Bottom Text : </label>
            <input onChange={handleChange} name="bottomText" type="text"></input><br/>
            <button>Add!</button>
        </form>
    )
}

export default NewMemeForm;