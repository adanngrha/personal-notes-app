import React from 'react';
import NoteItem from './NoteItem.jsx';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext.js';

const NoteList = ({notes}) => {
    const {locale} = React.useContext(LocaleContext);
    if (notes.length === 0) {
        return (
            <section className='notes-list-empty'>
                <p>{locale === 'id' ? 'Tidak ada catatan.' : 'No notes found.'}</p>
            </section>
        );
    }

    return (
        <section className='notes-list'>
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

export const noteItemPropTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NoteList;