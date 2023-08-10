import React from 'react';
import {useNavigate} from 'react-router-dom';
import {addNote} from '../utils/network-data';
import NoteInput from '../components/NoteInput';

const AddPage = () => {
    const navigate = useNavigate();

    const onAddNoteHandler = async (note) => {
        await addNote(note);
        navigate('/');
    }

    return (
        <section className='add-new-page'>
            <NoteInput addNote={onAddNoteHandler}/>
        </section>
    );
}

export default AddPage;