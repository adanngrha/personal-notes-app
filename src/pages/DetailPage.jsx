import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {archiveNote, deleteNote, getNote, unarchiveNote} from '../utils/network-data.js';
import NoteDetail from '../components/NoteDetail.jsx';

const DetailPage = () => {
    const {id} = useParams();
    const [note, setNote] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getNote(id).then(({data}) => {
            setNote(data);
        });
        setInitializing(false);
    }, []);

    const onArchiveHandler = async (id) => {
        await archiveNote(id);
        navigate('/');
    }

    const onUnarchiveHandler = async (id) => {
        await unarchiveNote(id);
        navigate('/');
    }

    const onDeleteHandler = async (id) => {
        await deleteNote(id);
        navigate('/');
    }

    if (initializing) {
        return null;
    }

    if (!note) {
        return <p>Note not found!</p>;
    }

    return (
        <section className='detail-page'>
            <NoteDetail {...note} onDelete={onDeleteHandler}
                        onArchive={onArchiveHandler} onUnarchive={onUnarchiveHandler}
            />
        </section>
    );
}

export default DetailPage;
