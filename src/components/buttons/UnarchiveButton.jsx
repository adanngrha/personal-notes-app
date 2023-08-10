import React from 'react';
import {MdUnarchive} from 'react-icons/md';
import PropTypes from 'prop-types';

const UnArchiveButton = ({id, onUnarchive}) => {
    return (
        <button className='action' onClick={() => onUnarchive(id)}><MdUnarchive/></button>
    );
}

UnArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default UnArchiveButton;