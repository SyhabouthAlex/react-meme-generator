const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
    console.log(action)
    switch (action.type) {
        case "ADD_MEME":
            return {...state, memes: [...state.memes, { ...action.meme }]}
        case "REMOVE_MEME":
            return {...state, memes: state.memes.filter((meme) => meme.id !== action.id)}
        default:
            return state;
    }
}

export default rootReducer;