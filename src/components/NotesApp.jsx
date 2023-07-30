import React from "react";
import Header from "./Header.jsx";
import NoteInput from "./NoteInput.jsx";
import NoteList from "./NoteList.jsx";
import { getInitialData } from "../utils/index.js";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                return {
                    ...note,
                    archived: true,
                }
            }
            return note;
        });
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                    }
                ]
            }
        });
    }

    onSearchChangeEventHandler(event) {
        this.setState(() => {
            if (event.target.value === '') {
                return {
                    search: event.target.value,
                    notes: getInitialData(),
                }
            } else {
                return {
                    search: event.target.value,
                    notes: this.state.notes.filter(note => note.title.toLowerCase().includes(event.target.value.toLowerCase())),
                }
            }
        });
    }

    render() {
        return (
            <>
                <Header onSearch={this.onSearchChangeEventHandler} />
                <main className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler}/>

                    <h4 className="section-heading">Catatan Aktif</h4>
                    <NoteList notes={this.state.notes.filter(note => !note.archived)}
                              onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>

                    <h4 className="section-heading">Arsip</h4>
                    <NoteList notes={this.state.notes.filter(note => note.archived)}
                              onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>

                </main>
            </>
        );
    }
}

export default NotesApp;