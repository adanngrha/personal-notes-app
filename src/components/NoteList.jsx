import React from "react";
import NoteItem from "./NoteItem.jsx";
import PropTypes from "prop-types";

const NoteList = ({ notes }) => {
    if (notes.length === 0) {
        return (
            <section className="notes-list-empty">
                <p>Tidak ada catatan.</p>
            </section>
        );
    }

    return (
       <section className="notes-list">
           {
               notes.map((note) => (
                     <NoteItem
                            key={note.id}
                            id={note.id}
                            {...note}
                     />
                ))
           }
       </section>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;