import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import PropTypes from 'prop-types';

const DeleteButton = ({id, onDelete}) => {
    return (
        <button className='action' onClick={() => onDelete(id)}><MdDeleteForever/></button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default DeleteButton;