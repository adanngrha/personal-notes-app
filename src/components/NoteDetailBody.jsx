import React from "react";
import {showFormattedDate} from "../utils/index.js";
import parser from "html-react-parser";
import PropTypes from "prop-types";

const NoteDetailBody = ({ title, createdAt, body }) => {
    return (
        <>
            <h1 className="detail-page__title">{title}</h1>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{parser(body)}</div>
        </>
    );
}

NoteDetailBody.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteDetailBody;