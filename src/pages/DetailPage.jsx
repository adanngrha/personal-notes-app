import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {archiveNote, unarchiveNote, deleteNote, getNote} from "../utils/local-data.js";
import NoteDetail from "../components/NoteDetail.jsx";
import PropTypes from "prop-types";

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    onArchiveHandler = (id) => {
        archiveNote(id);
        this.props.navigate('/');
    }

    onUnarchiveHandler = (id) => {
        unarchiveNote(id);
        this.props.navigate('/');
    }

    onDeleteHandler = (id) => {
        deleteNote(id);
        this.props.navigate('/');
    }

    render() {
        if (this.state.note === null) {
            return <p>Note not found!</p>;
        }

        return (
            <section className="detail-page">
                <NoteDetail {...this.state.note} onDelete={this.onDeleteHandler}
                            onArchive={this.onArchiveHandler} onUnarchive={this.onUnarchiveHandler}
                />
            </section>
        );
    }
}

const DetailPageWrapper = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return <DetailPage id={id} navigate={navigate}/>
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;