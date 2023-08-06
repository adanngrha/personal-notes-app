import React from 'react';
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput.jsx";

const AddPage = () => {
    const navigate = useNavigate();

    const onAddNoteHandler = (note) => {
        console.log(note);
        addNote(note);
        navigate('/');
    }

    return (
        <NoteInput addNote={onAddNoteHandler}/>
    );
}

export default AddPage;