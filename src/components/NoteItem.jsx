import React from 'react';
import NoteItemBody from "./NoteItemBody.jsx";

const NoteItem = ({ id, title, createdAt, body }) => {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemBody id={id} title={title} createdAt={createdAt} body={body}/>
            </div>
        </div>
    );
}

export default NoteItem;