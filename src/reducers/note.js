
const ADD_NOTE = "ADD_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";
const DELETE_NOTE = "DELETE_NOTE";

const initialState = [
    {text : "Write Code!"}
]

export default function notesReducer(state = initialState,action){
    let noteList = state.slice();

    switch (action.type){
        case ADD_NOTE:
            return [...state,{text : action.text}]
        case DELETE_NOTE:
            noteList.splice(action.id,1);
            return noteList;
        case UPDATE_NOTE:
            let noteToUpdate = noteList[action.id]
            noteToUpdate.text = action.text;
            noteList.splice(action.id,1,noteToUpdate);
            return noteList;
        default:
            return state;
    }
}