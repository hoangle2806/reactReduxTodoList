
import {combineReducers} from 'redux';
import notesReducer from './note';

const ponyApp = combineReducers({
    notesReducer,
})

export default ponyApp;