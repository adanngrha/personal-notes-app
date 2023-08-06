import React from "react";
import {showFormattedDate} from "../utils/index.js";
import parser from "html-react-parser";
import { MdDeleteForever, MdArchive, MdUnarchive } from "react-icons/md";

const NoteDetail = ({ id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive }) => {
    return (
        <>
            <h1 className="detail-page__title">{title}</h1>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{parser(body)}</div>
            <div className="detail-page__action">
                <button className="action" onClick={() => onDelete(id) }><MdDeleteForever /></button>
                {
                    archived ? (
                        <button className="action" onClick={() => onUnarchive(id) }><MdUnarchive /></button>
                    ) : (
                        <button className="action" onClick={() => onArchive(id) }><MdArchive /></button>
                    )
                }
            </div>
        </>
    );
}

export default NoteDetail;