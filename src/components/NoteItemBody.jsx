import React from 'react';
import {showFormattedDateEn, showFormattedDateId} from '../utils/index.js';
import {Link} from 'react-router-dom';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext.js';

const NoteItemBody = ({id, title, createdAt, body}) => {
    const {locale} = React.useContext(LocaleContext);
    return (
        <div>
            <h3 className='note-item__title'>
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p className='note-item__createdAt'>{locale === 'id' ? showFormattedDateId(createdAt) : showFormattedDateEn(createdAt)}</p>
            <p className='note-item__body'>{parser(body)}</p>
        </div>
    );
}

NoteItemBody.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItemBody;