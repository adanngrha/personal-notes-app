import React from "react";
import NoteItem from "./NoteItem.jsx";

const NoteList = ({ notes }) => {

    if (notes.length === 0) {
        return (
                <p className="notes-list__empty-message">Tidak ada catatan.</p>
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

export default NoteList;