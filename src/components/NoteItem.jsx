import React from 'react';
import NoteItemBody from "./NoteItemBody.jsx";
import DeleteButton from "./DeleteButton.jsx";
import ArchiveButton from "./ArchiveButton.jsx";

const NoteItem = ({ id, title, createdAt, body, onDelete, onArchive }) => {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemBody title={title} createdAt={createdAt} body={body}/>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchive={onArchive} />
            </div>
        </div>
    );
}

export default NoteItem;