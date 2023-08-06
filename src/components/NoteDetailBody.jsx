import React from "react";
import {showFormattedDate} from "../utils/index.js";
import parser from "html-react-parser";

const NoteDetailBody = ({ title, createdAt, body }) => {
    return (
        <>
            <h1 className="detail-page__title">{title}</h1>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{parser(body)}</div>
        </>
    );
}

export default NoteDetailBody;