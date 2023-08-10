import React from 'react';
import {showFormattedDateEn, showFormattedDateId} from '../utils/index.js';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext.js';

const NoteDetailBody = ({title, createdAt, body}) => {
    const {locale} = React.useContext(LocaleContext);

    return (
        <>
            <h1 className='detail-page__title'>{title}</h1>
            <p className='detail-page__createdAt'>{locale === 'id' ? showFormattedDateId(createdAt) : showFormattedDateEn(createdAt)}</p>
            <div className='detail-page__body'>{parser(body)}</div>
        </>
    );
}

NoteDetailBody.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteDetailBody;