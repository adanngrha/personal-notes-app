import React from 'react';
import { MdArchive } from "react-icons/md";
import PropTypes from "prop-types";

const ArchiveButton = ({ id, onArchive }) => {
    return (
        <button className="action" onClick={() => onArchive(id) }><MdArchive /></button>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default ArchiveButton;