import React from "react";
import {showFormattedDate} from "../utils/index.js";
import parser from "html-react-parser";

const NoteDetail = ({ title, createdAt, body, archived, onDelete, onArchive, onUnarchived }) => {
    return (
        <>
            <h1 className="detail-page__title">{title}</h1>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{parser(body)}</div>
            <div className="detail-page__action">
                <button className="action" onClick={onDelete}>-</button>
                {
                    archived ? (
                        <button className="action" onClick={onUnarchived}>U</button>
                    ) : (
                        <button className="action" onClick={onArchive}>A</button>
                    )
                }
            </div>
        </>
    );
}

export default NoteDetail;