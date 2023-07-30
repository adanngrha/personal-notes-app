import React from "react";
import {showFormattedDate} from "../utils/index.js";

function NoteItemBody({ title, createdAt, body }) {
    const date = showFormattedDate(createdAt);
    return (
        <div className="note-item__body">
            <h4 className="note-item__title">{title}</h4>
            <p className="note-item__date">{date}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemBody;