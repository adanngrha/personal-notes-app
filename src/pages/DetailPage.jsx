import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {archiveNote, unarchiveNote, deleteNote, getNote} from "../utils/local-data.js";
import NoteDetail from "../components/NoteDetail.jsx";

const DetailPage = () => {
    const { id } = useParams();
    const [note, setNote] = useState(() => getNote(id));
    const navigate = useNavigate();

    const onArchiveHandler = (id) => {
        archiveNote(id);
        navigate('/');
    }

    const onUnarchiveHandler = (id) => {
        unarchiveNote(id);
        navigate('/');
    }

    const onDeleteHandler = (id) => {
        deleteNote(id);
        navigate('/');
    }

    if (note === null) {
        return <p>Note not found!</p>;
    }

    return (
        <section className="detail-page">
            <NoteDetail {...note} onDelete={onDeleteHandler}
                        onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler}
            />
        </section>
    );
}

export default DetailPage;
