const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const UPDATE_NOTE = "UPDATE_NOTE";

export const addNote = (text) => {
    return {
        type : ADD_NOTE,
        text
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id,
    }
}

export const updateNote = (id,text) => {
    return {
        type : UPDATE_NOTE,
        id,
        text
    }
}