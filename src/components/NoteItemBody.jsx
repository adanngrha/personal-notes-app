import React from "react";
import {showFormattedDate} from "../utils/index.js";
import {Link} from "react-router-dom";

function NoteItemBody({ id, title, createdAt, body }) {
    return (
        <div className="note-item__body">
            <h4 className="note-item__title">
                <Link to={`/notes/${id}`}>{title}</Link>
            </h4>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemBody;