import React from 'react';
import DeleteButton from './buttons/DeleteButton.jsx';
import UnArchiveButton from './buttons/UnarchiveButton.jsx';
import ArchiveButton from './buttons/ArchiveButton.jsx';
import PropTypes from 'prop-types';
import NoteDetailBody from './NoteDetailBody.jsx';

const NoteDetail = ({id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive}) => {
    return (
        <>
            <NoteDetailBody title={title} createdAt={createdAt} body={body}/>
            <div className='detail-page__action'>
                {
                    archived ? (
                        <UnArchiveButton id={id} onUnarchive={onUnarchive}/>
                    ) : (
                        <ArchiveButton id={id} onArchive={onArchive}/>
                    )
                }
                <DeleteButton id={id} onDelete={onDelete}/>
            </div>
        </>
    );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default NoteDetail;