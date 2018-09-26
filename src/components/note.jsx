
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {notesAction} from '../actions';

class Note extends Component{
    state = {
        text : "",
        updateNoteId: null,

    }

    resetForm = () => {
        this.setState({ text : "" , updateNoteId: null});
    }

    selectForEdit = (id) => {
        let note = this.props.notes[id];
        this.setState({
            text : note.text,
            updateNoteId : id
        })
    }

    submitNote = (e) => {
        e.preventDefault();
        if (this.state.updateNoteId === null){
            this.props.addNote(this.state.text);
        } else {
            this.props.updateNote(this.state.updateNoteId, this.state.text);
        }
        this.resetForm();
    }
    render(){
        return (
            <div>
                <h3>Welcome To Your Note</h3>

                <h3>Add New Note</h3>
                <form onSubmit={this.submitNote}>
                <input
                value={this.state.text}
                placeholder="Enter Note here..."
                onChange={(e) => this.setState({text : e.target.value})}
                required />
                <input type="submit" value='Save Note'/>
                <button onClick={this.resetForm}>Reset</button>
                </form>

                <h2> Notes </h2>
                <table>
                    <tbody>
                        {this.props.notes.map( (note,id) => (
                            <tr key={`note_${id}`}>
                                <td>{note.text}</td>
                                <td><button onClick={() => this.selectForEdit(id)}>EDIT</button></td>
                                <td><button onClick={() => this.props.deleteNote(id)}>DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes : state.notesReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote : (text) => {
            dispatch(notesAction.addNote(text));
        },
        updateNote : (id,text) => {
            dispatch(notesAction.updateNote(id,text))
        },
        deleteNote : (id) => {
            dispatch(notesAction.deleteNote(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Note);